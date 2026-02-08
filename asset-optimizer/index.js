#!/usr/bin/env node

/**
 * Asset Optimizer Agent - Veloxia Platform
 * 
 * Autonomous agent for image optimization:
 * - Scans directory for PNG/JPG images
 * - Converts to WebP (70-90% size reduction)
 * - Backs up originals
 * - Updates HTML references
 * - Generates optimization report
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const chalk = require('chalk');

class AssetOptimizerAgent {
  constructor(options = {}) {
    this.targetDir = options.targetDir || process.argv[2] || './frontend';
    this.quality = options.quality || 85; // WebP quality (0-100)
    this.backupOriginals = options.backup !== false;
    this.updateHTML = options.updateHTML !== false;
    this.stats = {
      processed: 0,
      skipped: 0,
      errors: 0,
      originalSize: 0,
      optimizedSize: 0,
      files: []
    };
  }

  log(message, type = 'info') {
    const icons = {
      info: '📦',
      success: '✅',
      warning: '⚠️',
      error: '❌',
      stat: '📊'
    };
    const colors = {
      info: chalk.blue,
      success: chalk.green,
      warning: chalk.yellow,
      error: chalk.red,
      stat: chalk.cyan
    };
    console.log(`${icons[type]} ${colors[type](message)}`);
  }

  async findImages() {
    this.log('Scanning for images...', 'info');
    const patterns = [
      `${this.targetDir}/**/*.png`,
      `${this.targetDir}/**/*.jpg`,
      `${this.targetDir}/**/*.jpeg`
    ];
    
    const files = [];
    for (const pattern of patterns) {
      const matches = await glob(pattern, { 
        ignore: ['**/node_modules/**', '**/backup/**', '**/*.webp']
      });
      files.push(...matches);
    }
    
    this.log(`Found ${files.length} images to optimize`, 'info');
    return files;
  }

  async optimizeImage(filePath) {
    try {
      const ext = path.extname(filePath).toLowerCase();
      const dir = path.dirname(filePath);
      const basename = path.basename(filePath, ext);
      const webpPath = path.join(dir, `${basename}.webp`);

      // Skip if WebP already exists
      if (fs.existsSync(webpPath)) {
        this.log(`Skipped: ${path.basename(filePath)} (WebP exists)`, 'warning');
        this.stats.skipped++;
        return null;
      }

      // Get original size
      const originalStats = fs.statSync(filePath);
      const originalSize = originalStats.size;

      // Optimize to WebP
      await sharp(filePath)
        .webp({ quality: this.quality })
        .toFile(webpPath);

      // Get optimized size
      const optimizedStats = fs.statSync(webpPath);
      const optimizedSize = optimizedStats.size;
      const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

      // Backup original if enabled
      if (this.backupOriginals) {
        const backupDir = path.join(dir, 'backup');
        if (!fs.existsSync(backupDir)) {
          fs.mkdirSync(backupDir, { recursive: true });
        }
        const backupPath = path.join(backupDir, path.basename(filePath));
        fs.copyFileSync(filePath, backupPath);
      }

      this.stats.processed++;
      this.stats.originalSize += originalSize;
      this.stats.optimizedSize += optimizedSize;

      const result = {
        original: path.basename(filePath),
        optimized: path.basename(webpPath),
        originalPath: filePath,
        webpPath,
        originalSize,
        optimizedSize,
        reduction
      };

      this.stats.files.push(result);
      this.log(
        `Optimized: ${result.original} → ${result.optimized} (${this.formatBytes(originalSize)} → ${this.formatBytes(optimizedSize)}, -${reduction}%)`,
        'success'
      );

      return result;
    } catch (error) {
      this.log(`Error optimizing ${filePath}: ${error.message}`, 'error');
      this.stats.errors++;
      return null;
    }
  }

  async updateHTMLReferences(results) {
    if (!this.updateHTML || results.length === 0) return;

    this.log('Updating HTML references...', 'info');
    const htmlFiles = await glob(`${this.targetDir}/**/*.html`);

    for (const htmlFile of htmlFiles) {
      let content = fs.readFileSync(htmlFile, 'utf8');
      let updated = false;

      for (const result of results) {
        if (!result) continue;

        // Match various image reference patterns
        const patterns = [
          new RegExp(`src=["']([^"']*${result.original})["']`, 'g'),
          new RegExp(`href=["']([^"']*${result.original})["']`, 'g'),
          new RegExp(`url\\(["']?([^"')]*${result.original})["']?\\)`, 'g')
        ];

        for (const pattern of patterns) {
          if (pattern.test(content)) {
            // Get relative path from HTML to image
            const htmlDir = path.dirname(htmlFile);
            const imagePath = path.relative(htmlDir, result.webpPath).replace(/\\/g, '/');
            
            content = content.replace(
              new RegExp(result.original, 'g'),
              path.basename(result.webpPath)
            );
            updated = true;
          }
        }
      }

      if (updated) {
        fs.writeFileSync(htmlFile, content, 'utf8');
        this.log(`Updated: ${path.relative(this.targetDir, htmlFile)}`, 'success');
      }
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
  }

  generateReport() {
    console.log('\n' + '='.repeat(60));
    this.log('OPTIMIZATION REPORT', 'stat');
    console.log('='.repeat(60));
    
    console.log(`\n${chalk.bold('Summary:')}`);
    console.log(`  Processed: ${chalk.green(this.stats.processed)} files`);
    console.log(`  Skipped: ${chalk.yellow(this.stats.skipped)} files`);
    console.log(`  Errors: ${chalk.red(this.stats.errors)} files`);
    
    if (this.stats.processed > 0) {
      const totalReduction = ((1 - this.stats.optimizedSize / this.stats.originalSize) * 100).toFixed(1);
      console.log(`\n${chalk.bold('Size Reduction:')}`);
      console.log(`  Original: ${chalk.cyan(this.formatBytes(this.stats.originalSize))}`);
      console.log(`  Optimized: ${chalk.cyan(this.formatBytes(this.stats.optimizedSize))}`);
      console.log(`  Saved: ${chalk.green(this.formatBytes(this.stats.originalSize - this.stats.optimizedSize))} (${totalReduction}%)`);

      console.log(`\n${chalk.bold('Files:')}`);
      this.stats.files.forEach((file, i) => {
        console.log(`  ${i + 1}. ${file.original} → ${file.optimized} (-${file.reduction}%)`);
      });
    }

    console.log('\n' + '='.repeat(60) + '\n');
  }

  async run() {
    console.log('\n' + chalk.bold.blue('🚀 Asset Optimizer Agent - Veloxia Platform') + '\n');
    this.log(`Target directory: ${this.targetDir}`, 'info');
    this.log(`WebP quality: ${this.quality}`, 'info');
    this.log(`Backup originals: ${this.backupOriginals}`, 'info');
    this.log(`Update HTML: ${this.updateHTML}`, 'info');
    console.log();

    try {
      const images = await this.findImages();
      
      if (images.length === 0) {
        this.log('No images found to optimize', 'warning');
        return;
      }

      const results = [];
      for (const image of images) {
        const result = await this.optimizeImage(image);
        if (result) results.push(result);
      }

      await this.updateHTMLReferences(results);
      this.generateReport();

      this.log('Optimization complete!', 'success');
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

// Run agent if called directly
if (require.main === module) {
  const agent = new AssetOptimizerAgent({
    targetDir: process.argv[2],
    quality: parseInt(process.argv[3]) || 85,
    backup: process.argv[4] !== 'false',
    updateHTML: process.argv[5] !== 'false'
  });
  agent.run();
}

// Export for Agent Manager
async function optimize(targetDir, quality = 85) {
  console.log(`[Asset Optimizer] Otimizando assets em ${targetDir}...`);
  
  const agent = new AssetOptimizerAgent({
    targetDir,
    quality,
    backup: true,
    updateHTML: true
  });
  
  await agent.run();
  
  return { 
    success: true, 
    stats: agent.stats 
  };
}

module.exports = { AssetOptimizerAgent, optimize };

