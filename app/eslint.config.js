import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

// ESLint 配置文件 - SoulStudio 代码规范检查配置
export default defineConfig([
  // 全局忽略 - 排除 dist 目录
  globalIgnores(['dist']),
  {
    // 匹配 TypeScript 和 TSX 文件
    files: ['**/*.{ts,tsx}'],
    extends: [
      // 基础推荐规则
      js.configs.recommended,
      // TypeScript 推荐规则
      tseslint.configs.recommended,
      // React Hooks 推荐规则
      reactHooks.configs.flat.recommended,
      // Vite 热更新相关规则
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      // ECMAScript 版本
      ecmaVersion: 2020,
      // 浏览器全局变量
      globals: globals.browser,
    },
  },
])
