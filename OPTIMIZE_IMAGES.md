# 🎨 Image Optimization Script

Script to optimize PNG and JPG images while maintaining high visual quality.

## 🚀 Quick Start

```bash
# Using npm script (recommended)
npm run optimize-images

# Or using node directly
node optimize-images.js

# Optimize a specific folder
node optimize-images.js ./public/img/pfp
```

**That's it!** The script automatically:

- 🔍 Finds all PNG and JPG images
- 📏 Identifies those larger than the configured threshold
- 🗜️ Compresses them maintaining high quality
- 💾 Shows you how much space you saved

## ✨ Features

- ✅ Automatically optimizes PNG and JPG images
- ✅ Only processes images larger than the configured threshold
- ✅ Maintains high quality (configurable)
- ✅ Creates automatic backups during the process
- ✅ Recursively processes all subfolders
- ✅ Shows detailed space saving statistics

## 📋 Prerequisites

This script uses the `sharp` library which is already installed in the project. If for some reason it's not installed, run:

```bash
npm install sharp
```

## 🚀 How to Use

### Option 1: Using npm script (recommended)

```bash
# Optimize default folder (./public/img)
npm run optimize-images
```

### Option 2: Using node directly

```bash
# Optimize default folder
node optimize-images.js

# Optimize a specific folder
node optimize-images.js ./path/to/your/folder
```

### Examples:

```bash
# Optimize only avatars
node optimize-images.js ./public/img/pfp

# Optimize only logos
node optimize-images.js ./public/img/logos

# Optimize all public images
npm run optimize-images
```

## ⚙️ Configuration

You can adjust the configuration by editing the constants in `optimize-images.js`:

```javascript
const CONFIG = {
  minSize: 50 * 1024, // Threshold in bytes (1024 bytes = 1 KB)
  quality: 90, // Quality 0-100 (90 default)
  pngCompressionLevel: 9, // PNG compression 0-9 (9 default)
  defaultDir: './public/img', // Default folder
};
```

### Recommended settings by use case:

**For maximum quality** (websites, portfolios):

```javascript
quality: 95;
pngCompressionLevel: 7;
```

**For quality/size balance** (general use) - **RECOMMENDED**:

```javascript
quality: 90;
pngCompressionLevel: 9;
```

**For maximum compression** (high traffic sites):

```javascript
quality: 80;
pngCompressionLevel: 9;
```

## 📊 Script Output

The script shows detailed information during execution:

```
🖼️  Image Optimization Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 Target directory: /Users/.../public/img
📏 Min file size: 50KB
🎨 Quality setting: 90%
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 Found 198 images
🎯 Optimizing images larger than 50KB...

🔄 Processing pfp/Cooki.png (1.69MB)...
✅ pfp/Cooki.png: 1.69MB → 481KB (72.3% reduction)

✨ Optimization complete!

📊 Summary:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   📂 Total images scanned: 198
   ✅ Images optimized: 11
   ⏭️ Images skipped (below threshold): 187
   💾 Total space saved: 8.45MB
   📉 Average reduction: 68.7%

🏆 Top optimizations:
   1. pfp/Cooki.png - 72.3% reduction
   2. logos/geo.png - 79.6% reduction
   3. pfp/Thor.png - 69.8% reduction
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Done!
```

## 🔒 Safety

The script is safe to use:

- ✅ Creates backups before modifying each image
- ✅ Automatically restores if there are errors
- ✅ Doesn't modify files smaller than the configured threshold
- ✅ Only processes PNG and JPG

## 💡 Tips

1. **Test with a small folder first**: Before optimizing all images, test with a subfolder.

2. **Review the results**: After optimizing, visually verify that images maintain good quality.

3. **Commit before running**: It's always a good idea to commit your changes before running massive optimizations.

4. **Use with Git**: If something goes wrong, you can easily revert changes:
   ```bash
   git checkout -- public/img/
   ```

## 🎯 Use Cases

### Optimize entire project (one time)

```bash
npm run optimize-images
```

### Optimize newly added images

If you added new heavy images, simply run the script again. It will only process those larger than the configured threshold.

```bash
npm run optimize-images
```

### Optimize before deploy

The script is already available as an npm script in `package.json`:

```json
{
  "scripts": {
    "optimize-images": "node optimize-images.js"
  }
}
```

You can add it as a pre-build step if needed:

```json
{
  "scripts": {
    "optimize-images": "node optimize-images.js",
    "prebuild": "npm run optimize-images"
  }
}
```

## ❓ Common Issues

**Script can't find sharp:**

```bash
npm install sharp
```

**"Directory does not exist":**
Verify the path is correct and relative to the `optimize-images.js` file

**Images look bad after optimization:**
Increase the `quality` value in the configuration (e.g., 95)

## 📝 Notes

- The script preserves folder structure
- `.svg` files are not processed (they're already optimal)
- Already optimized images (below threshold) are automatically skipped
- Processing times depend on size and quantity of images

---

**Created for Wonderland** - To keep the site fast and images beautiful ✨
