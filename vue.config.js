const { defineConfig } = require('@vue/cli-service')
const args = process.argv.slice(2)
const path = require('path')
const fs = require('fs')

const getEntrys = (dir) => {
  let absPath = path.resolve(dir) 
  let files = fs.readdirSync(absPath)
  let entries = {}
  files.forEach(item => {
    let p = path.join(absPath, item)
    if (fs.statSync(p).isDirectory()) {
      p = path.join(p, 'index.ts')
      entries[item] = p
    }
  })
  return entries
}

if (process.env.NODE_ENV === 'production' && args.includes('--all')) {
  module.exports = defineConfig({
    outputDir: 'dist',
    configureWebpack: {
      entry: {
        ...getEntrys('./src/packages')
      },
      output: { // babel-import-plugin
        filename: 'lib/[name]/index.js',
        libraryTarget: 'umd',
        libraryExport: 'default',
        library: ['w', '[name]'] // window.w
      },
      // 排除vue
      externals: {
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        }
      }
    },
    css: {
      sourceMap: true,
      extract: {
        filename: 'css/[name]/style.css'
      }
    },
    chainWebpack: config => {
      //删除默认配置
      config.optimization.delete('splitChunks')
      config.plugins.delete('copy')
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      config.plugins.delete('html')
      config.plugins.delete('hmr')
      config.entryPoints.delete('app')
    }
  })
}

// module.exports = defineConfig({
//   transpileDependencies: true
// })
