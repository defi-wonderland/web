/**
 * Configuration for optimize-images.js
 *
 * You can create this file to customize the optimization without modifying the main script.
 * Copy this file and adjust the values according to your needs.
 */

export default {
  // Minimum file size to optimize (in KB)
  // Only images larger than this size will be processed
  minSizeKB: 500,

  // Image quality (0-100)
  // 90 = High quality with good compression (recommended)
  // 95 = Maximum quality with less compression
  // 80 = Good quality with maximum compression
  quality: 90,

  // PNG compression level (0-9)
  // 9 = Maximum compression (slower but better result)
  // 7 = Balance between speed and compression
  pngCompressionLevel: 9,

  // Default folder to optimize
  defaultDir: './public/img',

  // File patterns to exclude (optional)
  // exclude: ['**/node_modules/**', '**/.git/**']
};
