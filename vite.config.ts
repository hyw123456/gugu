/// <reference path="./vite.d.ts" />
import { defineConfig } from 'vite'
// import styleImport from 'vite-plugin-style-import'
import vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite'
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import * as path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import postcssNested from 'postcss-nested'
import autoprefixer from 'autoprefixer'
import postcssScss from 'postcss-scss'
import pav from 'postcss-advanced-variables'
import calc from 'postcss-calc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), eslintPlugin()],
    server: {
      proxy: {

      }
    },
    resolve: {
        alias: {
            // 配置别名
            '@': path.resolve(__dirname, './src')
        }
    },
    css: {
        postcss: {
            syntax: postcssScss, // postcss中 可以使用scss语法
            plugins: [
                postcssNested, // 仿scss嵌套
                autoprefixer, // css前缀规范
                calc,
                pav // 类似SASS自定义变量并引用，实现编写变量、条件、循环。 具体看https://github.com/csstools/postcss-advanced-variables
            ]
        }
    }
})
