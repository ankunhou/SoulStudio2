
# FastAPI 项目 - 前端

前端使用 [Vite](https://vitejs.dev/)、[React](https://reactjs.org/)、[TypeScript](https://www.typescriptlang.org/)、[TanStack Query](https://tanstack.com/query)、[TanStack Router](https://tanstack.com/router) 和 [Tailwind CSS](https://tailwindcss.com/) 构建。

## 环境要求

- [pnpm](https://pnpm.io/)（推荐）或 [Node.js](https://nodejs.org/)

## 快速开始

```bash
pnpm install
pnpm run dev
```

然后在浏览器中打开 http://localhost:5173/

注意：这个开发服务器不是在 Docker 内运行的，它是用于本地开发的推荐工作流程。

## 生成客户端

### 自动生成

- 激活后端虚拟环境
- 从项目根目录运行脚本：

```bash
bash ./scripts/generate-client.sh
```

- 提交更改

### 手动生成

- 启动 Docker Compose 栈

- 从 `http://localhost/api/v1/openapi.json` 下载 OpenAPI JSON 文件，复制到 `frontend` 目录下的 `openapi.json` 文件

- 生成前端客户端：

```bash
pnpm run generate-client
```

- 提交更改

注意：每次后端更改（更改 OpenAPI 架构）时，都应该再次执行这些步骤来更新前端客户端。

## 使用远程 API

如果要使用远程 API，可以设置环境变量 `VITE_API_URL` 为远程 API 的 URL。例如，在 `frontend/.env` 文件中设置：

```env
VITE_API_URL=https://api.my-domain.example.com
```

## 代码结构

前端代码结构如下：

- `frontend/src` - 主要前端代码
- `frontend/src/assets` - 静态资源
- `frontend/src/client` - 生成的 OpenAPI 客户端
- `frontend/src/components` - 前端的各种组件
- `frontend/src/hooks` - 自定义 hooks
- `frontend/src/routes` - 前端的不同路由，包含页面

## 使用 Playwright 进行端到端测试

前端包含使用 Playwright 的初始端到端测试。运行测试需要 Docker Compose 栈运行。使用以下命令启动栈：

```bash
docker compose up -d --wait backend
```

然后使用以下命令运行测试：

```bash
playwright test
```

也可以在 UI 模式下运行测试，查看浏览器并与之交互：

```bash
playwright test --ui
```

使用以下命令停止并删除 Docker Compose 栈并清理测试中创建的数据：

```bash
docker compose down -v
```

