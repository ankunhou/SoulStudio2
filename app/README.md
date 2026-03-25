# SoulStudio 前端

基于 React + TypeScript + Vite 构建的现代化前端应用。

## 技术栈

- **React 19** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript 超集
- **Vite** - 极速前端构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **React Flow (@xyflow/react)** - 流程图和节点编辑库
- **Vercel AI SDK** - AI 功能集成

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm run dev
```

开发服务器将在 `http://localhost:5173` 启动。

### 构建生产版本

```bash
pnpm run build
```

构建产物将输出到 `dist` 目录。

### 预览生产构建

```bash
pnpm run preview
```

### 代码检查

```bash
pnpm run lint
```

## 项目结构

```
app/
├── public/             # 静态资源目录
├── src/
│   ├── App.tsx         # 主应用组件
│   ├── main.tsx        # 应用入口文件
│   ├── index.css       # 全局样式
│   ├── App.css         # 应用样式
│   └── assets/         # 图片和其他资源文件
├── package.json        # 项目依赖和脚本
├── tsconfig.json       # TypeScript 配置
├── tsconfig.node.json  # Node.js TypeScript 配置
├── vite.config.ts      # Vite 配置
└── eslint.config.js    # ESLint 配置
```

## 核心功能特性

### 1. 可视化工作流程编辑
- 基于 React Flow 实现的拖拽式节点编辑器
- 支持自定义节点类型和连线规则
- 实时更新和节点状态管理

### 2. AI 智能辅助
- 集成 Vercel AI SDK
- 提供智能代码补全和建议
- 支持多种 AI 模型

### 3. 响应式设计
- 使用 Tailwind CSS 实现完整的响应式布局
- 支持深色/浅色主题切换
- 适配移动设备和桌面端

### 4. 类型安全
- 完整的 TypeScript 类型定义
- 严格的类型检查配置
- 提供更好的开发体验和代码质量

## 开发指南

### 添加新组件

在 `src` 目录下创建新的组件文件，例如 `src/components/MyComponent.tsx`：

```tsx
import React from 'react'

interface MyComponentProps {
  title: string
}

// 我的组件 - 示例组件
export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return <div>{title}</div>
}
```

### 使用 React Flow

```tsx
import React, { useCallback, useRef } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

// 初始化节点数据
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '节点 1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '节点 2' } },
]

// 初始化连线数据
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

// 流程图组件
const FlowEditor = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  // 处理新连线创建
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div ref={reactFlowWrapper} style={{ width: '100%', height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  )
}

export default FlowEditor
```

## 主题自定义

项目使用 CSS 变量实现主题支持，可以在 `src/index.css` 中自定义：

```css
:root {
  --text: #6b6375;           /* 文本颜色 */
  --text-h: #08060d;         /* 标题文本颜色 */
  --bg: #fff;                 /* 背景色 */
  --border: #e5e4e7;         /* 边框颜色 */
  --code-bg: #f4f3ec;        /* 代码块背景 */
  --accent: #aa3bff;         /* 主色调 */
  --accent-bg: rgba(170, 59, 255, 0.1);    /* 强调色背景 */
  --accent-border: rgba(170, 59, 255, 0.5); /* 强调色边框 */
  /* ... 更多变量 */
}
```

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

MIT 许可证
