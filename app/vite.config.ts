import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 配置文件 - SoulStudio 前端构建配置
// 更多配置选项: https://vite.dev/config/
export default defineConfig({
  // 插件配置 - 启用 React 插件支持 JSX/TSX
  plugins: [react()],
})
