
# SoulStudio - 智能工作室

一个现代化的全栈应用程序，提供直观的用户界面和强大的后端服务，旨在帮助用户高效地创建和管理各种项目。

## 项目架构

### 前端部分 (app/)
- **框架**: React 19 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **已安装依赖**: React Flow (@xyflow/react)、Vercel AI SDK (ai)

### 后端部分 (server/)
- **框架**: FastAPI
- **数据库**: PostgreSQL
- **ORM**: SQLModel
- **认证**: JWT (JSON Web Token)
- **部署**: Docker Compose

## 当前状态

### app/ (前端应用)
正在开发中的前端项目，目前包含：
- 基础的 React + TypeScript + Vite 项目结构
- Tailwind CSS 样式配置
- 已安装但未集成的依赖：
  - `@xyflow/react` - 流程图库
  - `ai` - Vercel AI SDK

### server/ (后端服务)
完整的管理后台系统，包含：
- FastAPI 后端 API
- React 管理前端（自动生成的 OpenAPI 客户端）
- 用户认证与授权
- Docker Compose 部署配置

## 计划功能

- **可视化工作流程编辑**: 使用 React Flow 创建和管理复杂的流程图
- **AI 智能辅助**: 集成 Vercel AI SDK 提供智能建议和代码生成
- **实时协作**: 支持多人同时编辑和查看项目

## 快速开始

### 前端开发

```bash
cd app
pnpm install
pnpm run dev
```

### 后端开发

```bash
cd server
# 使用 uv 或 pip 安装依赖
uv sync  # 或者 pip install -r requirements.txt

# 启动开发服务器
uv run python -m backend.main --host 0.0.0.0 --port 8000
```

## 项目结构

```
SoulStudio/
├── app/                    # 前端应用（开发中）
│   ├── public/             # 静态资源
│   ├── src/                # 源代码
│   │   ├── App.tsx         # 主应用组件
│   │   ├── main.tsx        # 应用入口
│   │   ├── index.css       # 全局样式
│   │   └── assets/         # 图片和图标资源
│   ├── package.json        # 前端依赖配置
│   ├── tsconfig.json       # TypeScript 配置
│   └── vite.config.ts      # Vite 配置
├── server/                 # 后端服务
│   ├── backend/            # 后端源代码
│   ├── frontend/           # 管理后台前端
│   ├── deployment.md       # 部署说明
│   ├── development.md      # 开发指南
│   └── package.json        # 后端依赖配置
└── README.md               # 项目总览 (本文档)
```

## 技术栈特点

- **现代化工具链**: 使用 Vite 提供极速的开发体验
- **类型安全**: 全栈 TypeScript 支持
- **响应式设计**: 自适应布局，支持深色模式
- **安全架构**: JWT 认证和密码哈希保护

## 开发与贡献

请查看各部分的详细文档：
- 前端开发: [app/README.md](app/README.md)
- 后端开发: [server/README.md](server/README.md)

## 许可证

MIT 许可证

---

**SoulStudio** - 让开发更智能，工作更高效！

