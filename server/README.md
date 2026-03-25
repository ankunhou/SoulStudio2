
# SoulStudio 后端服务

基于 FastAPI 构建的全栈应用模板，提供完整的后端服务和管理后台。

## 技术栈与特性

- ⚡ [**FastAPI**](https://fastapi.tiangolo.com) Python 后端 API 框架
  - 🧰 [SQLModel](https://sqlmodel.tiangolo.com) Python SQL 数据库交互（ORM）
  - 🔍 [Pydantic](https://docs.pydantic.dev) 数据验证和设置管理
  - 💾 [PostgreSQL](https://www.postgresql.org) SQL 数据库
- 🚀 [React](https://react.dev) 前端框架
  - 💃 使用 TypeScript、hooks、[Vite](https://vitejs.dev) 等现代前端技术栈
  - 🎨 [Tailwind CSS](https://tailwindcss.com) 和 [shadcn/ui](https://ui.shadcn.com) 前端组件
  - 🤖 自动生成的前端客户端
  - 🧪 [Playwright](https://playwright.dev) 端到端测试
  - 🦇 深色模式支持
- 🐋 [Docker Compose](https://www.docker.com) 开发和生产环境
- 🔒 默认安全密码哈希
- 🔑 JWT（JSON Web Token）认证
- 📫 基于邮件的密码找回
- 📬 [Mailcatcher](https://mailcatcher.me) 本地开发邮件测试
- ✅ [Pytest](https://pytest.org) 测试
- 📞 [Traefik](https://traefik.io) 反向代理/负载均衡
- 🚢 Docker Compose 部署说明，包括如何设置前端 Traefik 代理处理自动 HTTPS 证书
- 🏭 基于 GitHub Actions 的 CI（持续集成）和 CD（持续部署）

## 快速开始

### 使用 Docker Compose

```bash
docker compose watch
```

### 本地开发

后端开发文档：[backend/README.md](./backend/README.md)

前端开发文档：[frontend/README.md](./frontend/README.md)

## 环境配置

在 `.env` 文件中配置环境变量，部署前请确保修改以下值：

- `SECRET_KEY` - 项目密钥
- `FIRST_SUPERUSER_PASSWORD` - 第一个超级用户密码
- `POSTGRES_PASSWORD` - PostgreSQL 数据库密码

### 生成密钥

```bash
python -c "import secrets; print(secrets.token_urlsafe(32))"
```

## 部署

部署文档：[deployment.md](./deployment.md)

## 开发指南

开发文档：[development.md](./development.md)

## 发布说明

查看 [release-notes.md](./release-notes.md)

## 许可证

MIT 许可证

