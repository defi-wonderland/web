#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * This script optimizes PNG and JPG images in a specified directory.
 * It uses the 'sharp' library to compress images while maintaining quality.
 *
 * Features:
 * - Optimizes images larger than 500KB
 * - Maintains high quality (90% quality setting)
 * - Creates backups automatically (removed after successful optimization)
 * - Provides detailed progress and summary statistics
 * - Recursively processes all subdirectories
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  // Minimum file size to optimize (in bytes). Images smaller than this are skipped.
  minSize: 500 * 1024, // 500KB

  // Quality settings for optimization (0-100, higher = better quality but larger file)
  quality: 90,

  // PNG compression level (0-9, higher = smaller file but slower)
  pngCompressionLevel: 9,

  // Default directory to optimize (can be overridden via command line)
  defaultDir: './public/img',
};

/**
 * Optimizes a single image file
 * @param {string} filepath - Full path to the image file
 * @returns {Object|null} - Optimization results or null if skipped
 */
async function optimizeImage(filepath, baseDir) {
  const stats = fs.statSync(filepath);
  const originalSize = stats.size;
  const ext = path.extname(filepath).toLowerCase();
  const filename = path.relative(baseDir, filepath);

  // Skip files smaller than minimum size
  if (originalSize < CONFIG.minSize) {
    return null;
  }

  console.log(`\n🔄 Processing ${filename} (${(originalSize / 1024 / 1024).toFixed(2)}MB)...`);

  try {
    // Create a backup
    const backupPath = filepath + '.backup';
    fs.copyFileSync(filepath, backupPath);

    let sharpInstance = sharp(filepath);

    // Apply optimization based on file type
    if (ext === '.png') {
      sharpInstance = sharpInstance.png({
        quality: CONFIG.quality,
        compressionLevel: CONFIG.pngCompressionLevel,
        adaptiveFiltering: true,
        force: true,
      });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      sharpInstance = sharpInstance.jpeg({
        quality: CONFIG.quality,
        progressive: true,
        mozjpeg: true,
        force: true,
      });
    }

    // Save optimized image to temporary file
    await sharpInstance.toFile(filepath + '.tmp');

    // Replace original with optimized version
    fs.renameSync(filepath + '.tmp', filepath);

    // Calculate results
    const newStats = fs.statSync(filepath);
    const newSize = newStats.size;
    const reduction = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

    console.log(
      `✅ ${filename}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024).toFixed(
        0,
      )}KB (${reduction}% reduction)`,
    );

    // Remove backup after successful optimization
    fs.unlinkSync(backupPath);

    return {
      filename,
      originalSize,
      newSize,
      reduction: parseFloat(reduction),
    };
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error.message);

    // Restore from backup if optimization failed
    const backupPath = filepath + '.backup';
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, filepath);
      fs.unlinkSync(backupPath);
    }
    return null;
  }
}

/**
 * Recursively finds all image files in a directory
 * @param {string} dir - Directory to search
 * @param {Array} fileList - Accumulator for found files
 * @returns {Array} - List of image file paths
 */
function getAllImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      getAllImages(filepath, fileList);
    } else if (/\.(png|jpe?g)$/i.test(file)) {
      fileList.push(filepath);
    }
  });

  return fileList;
}

/**
 * Main function - orchestrates the optimization process
 */
async function optimizeAllImages() {
  // Get target directory from command line or use default
  const targetDir = process.argv[2] || CONFIG.defaultDir;
  const imgDir = path.resolve(__dirname, targetDir);

  // Validate directory exists
  if (!fs.existsSync(imgDir)) {
    console.error(`❌ Error: Directory "${imgDir}" does not exist`);
    process.exit(1);
  }

  console.log('🖼️  Image Optimization Script');
  console.log('━'.repeat(50));
  console.log(`📁 Target directory: ${imgDir}`);
  console.log(`📏 Min file size: ${CONFIG.minSize / 1024}KB`);
  console.log(`🎨 Quality setting: ${CONFIG.quality}%`);
  console.log('━'.repeat(50));

  // Find all images
  const files = getAllImages(imgDir);
  console.log(`\n🔍 Found ${files.length} images`);
  console.log(`🎯 Optimizing images larger than ${CONFIG.minSize / 1024}KB...\n`);

  // Process all images
  const results = [];
  let skipped = 0;

  for (const file of files) {
    const result = await optimizeImage(file, imgDir);
    if (result) {
      results.push(result);
    } else {
      skipped++;
    }
  }

  // Print summary
  console.log('\n✨ Optimization complete!\n');
  console.log('📊 Summary:');
  console.log('━'.repeat(50));
  console.log(`   📂 Total images scanned: ${files.length}`);
  console.log(`   ✅ Images optimized: ${results.length}`);
  console.log(`   ⏭️  Images skipped (<${CONFIG.minSize / 1024}KB): ${skipped}`);

  if (results.length > 0) {
    const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
    const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
    const totalReduction = (((totalOriginal - totalNew) / totalOriginal) * 100).toFixed(1);
    const savedMB = ((totalOriginal - totalNew) / 1024 / 1024).toFixed(2);

    console.log(`   💾 Total space saved: ${savedMB}MB`);
    console.log(`   📉 Average reduction: ${totalReduction}%`);

    // Show top 5 optimizations
    if (results.length > 0) {
      console.log('\n🏆 Top optimizations:');
      const topResults = results.sort((a, b) => b.reduction - a.reduction).slice(0, 5);

      topResults.forEach((result, i) => {
        console.log(`   ${i + 1}. ${result.filename} - ${result.reduction}% reduction`);
      });
    }
  }

  console.log('━'.repeat(50));
  console.log('✅ Done!\n');
}

// Run the script
optimizeAllImages().catch(console.error);
