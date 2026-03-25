
# FastAPI 项目 - 开发指南

## Docker Compose

* 使用 Docker Compose 启动本地开发环境：

```bash
docker compose watch
```

* 现在可以在浏览器中访问以下地址：

前端，使用 Docker 构建，根据路径处理路由：<http://localhost:5173>

后端，基于 OpenAPI 的 JSON Web API：<http://localhost:8000>

自动交互式文档（Swagger UI，来自 OpenAPI 后端）：<http://localhost:8000/docs>

Adminer，数据库 Web 管理：<http://localhost:8080>

Traefik UI，查看代理如何处理路由：<http://localhost:8090>

**注意**：第一次启动堆栈时，可能需要一分钟才能准备好。后端等待数据库准备好并配置一切。你可以查看日志来监控。

查看日志，运行（在另一个终端中）：

```bash
docker compose logs
```

查看特定服务的日志，添加服务名称，例如：

```bash
docker compose logs backend
```

## Mailcatcher

Mailcatcher 是一个简单的 SMTP 服务器，在本地开发期间捕获后端发送的所有邮件。它不会发送真实邮件，而是在 Web 界面中捕获和显示。

这对于以下情况很有用：

* 在开发过程中测试邮件功能
* 验证邮件内容和格式
* 调试邮件相关功能而不发送真实邮件

后端在本地使用 Docker Compose 运行时会自动配置使用 Mailcatcher（SMTP 端口 1025）。所有捕获的邮件可以在 <http://localhost:1080> 查看。

## 本地开发

Docker Compose 文件配置为每个服务在 `localhost` 的不同端口上可用。

对于后端和前端，它们使用与本地开发服务器相同的端口，因此后端在 `http://localhost:8000`，前端在 `http://localhost:5173`。

这样，你可以关闭一个 Docker Compose 服务并启动其本地开发服务器，一切都会继续工作，因为它们使用相同的端口。

例如，你可以在 Docker Compose 中停止 `frontend` 服务，在另一个终端中运行：

```bash
docker compose stop frontend
```

然后启动本地前端开发服务器：

```bash
pnpm run dev
```

或者你可以停止 `backend` Docker Compose 服务：

```bash
docker compose stop backend
```

然后你可以运行后端的本地开发服务器：

```bash
cd backend
fastapi dev app/main.py
```

## Docker Compose 文件和环境变量

有一个主 `compose.yml` 文件，包含适用于整个堆栈的所有配置，`docker compose` 会自动使用它。

还有一个 `compose.override.yml`，包含开发覆盖，例如将源代码作为卷挂载。`docker compose` 会自动使用它来在 `compose.yml` 之上应用覆盖。

这些 Docker Compose 文件使用 `.env` 文件，包含要作为环境变量注入容器的配置。

它们还使用一些额外的配置，这些配置来自在调用 `docker compose` 命令之前在脚本中设置的环境变量。

更改变量后，确保重启堆栈：

```bash
docker compose watch
```

## .env 文件

`.env` 文件包含所有配置、生成的密钥和密码等。

根据你的工作流程，你可能希望将其从 Git 中排除，例如如果你的项目是公开的。在这种情况下，你需要确保设置一种方式让你的 CI 工具在构建或部署项目时获取它。

## Pre-commits 和代码检查

我们使用一个名为 [prek](https://prek.j178.dev/)（[Pre-commit](https://pre-commit.com/) 的现代替代品）的工具进行代码检查和格式化。

安装后，它会在 git 提交之前运行。这样可以确保代码在提交之前就是一致和格式化的。

#### 安装 prek 自动运行

`prek` 已经是项目依赖项的一部分。

安装并可用 `prek` 工具后，你需要在本地仓库中"安装"它，以便它在每次提交之前自动运行。

使用 `uv`，你可以这样做（确保你在 `backend` 文件夹内）：

```bash
❯ uv run prek install -f
prek installed at `../.git/hooks/pre-commit`
```

`-f` 标志强制安装，以防之前已经安装了 `pre-commit` 钩子。

现在每当你尝试提交时，例如：

```bash
git commit
```

...prek 将运行并检查和格式化你即将提交的代码，并要求你在提交之前再次添加该代码（使用 git 暂存）。

然后你可以再次 `git add` 修改/修复的文件，现在可以提交了。

#### 手动运行 prek 钩子

你也可以使用 `uv` 手动运行 `prek`：

```bash
❯ uv run prek run --all-files
check for added large files..............................................Passed
check toml...............................................................Passed
check yaml...............................................................Passed
fix end of files.........................................................Passed
trim trailing whitespace.................................................Passed
ruff.....................................................................Passed
ruff-format..............................................................Passed
biome check..............................................................Passed
```

## URL

生产或暂存 URL 将使用相同的路径，但使用你自己的域名。

### 开发 URL

开发 URL，用于本地开发。

前端：<http://localhost:5173>

后端：<http://localhost:8000>

自动交互式文档（Swagger UI）：<http://localhost:8000/docs>

自动替代文档（ReDoc）：<http://localhost:8000/redoc>

Adminer：<http://localhost:8080>

Traefik UI：<http://localhost:8090>

MailCatcher：<http://localhost:1080>

