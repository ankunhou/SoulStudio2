
# FastAPI 项目 - 后端

## 环境要求

- [Docker](https://www.docker.com/)
- [uv](https://docs.astral.sh/uv/) Python 包和环境管理器

## Docker Compose

按照 [../development.md](../development.md) 中的指南使用 Docker Compose 启动本地开发环境。

## 常规工作流程

默认情况下，依赖项使用 [uv](https://docs.astral.sh/uv/) 管理，请先安装它。

从 `./backend/` 安装所有依赖项：

```console
$ uv sync
```

然后激活虚拟环境：

```console
$ source .venv/bin/activate
```

确保你的编辑器使用正确的 Python 虚拟环境，解释器位于 `backend/.venv/bin/python`。

在 `./backend/app/models.py` 中修改或添加 SQLModel 模型用于数据和 SQL 表，在 `./backend/app/api/` 中添加 API 端点，在 `./backend/app/crud.py` 中添加 CRUD（创建、读取、更新、删除）工具。

## VS Code

已经有配置可以通过 VS Code 调试器运行后端，这样你可以使用断点、暂停和探索变量等。

设置也已经配置好可以通过 VS Code Python 测试选项卡运行测试。

## Docker Compose 覆盖

在开发过程中，你可以在 `compose.override.yml` 文件中更改 Docker Compose 设置，这些更改只会影响本地开发环境。

## 后端测试

测试后端运行：

```console
$ bash ./scripts/test.sh
```

测试使用 Pytest 运行，在 `./backend/tests/` 中修改和添加测试。

## 数据库迁移

由于在本地开发期间你的应用目录作为卷挂载到容器中，你也可以在容器内使用 `alembic` 命令运行迁移，迁移代码将位于你的应用目录中。

- 在后端容器中启动交互式会话：

```console
$ docker compose exec backend bash
```

- 更改模型后（例如，添加列），在容器内创建修订：

```console
$ alembic revision --autogenerate -m "Add column last_name to User model"
```

- 将 alembic 目录中生成的文件提交到 git 仓库

- 创建修订后，在数据库中运行迁移：

```console
$ alembic upgrade head
```

## 邮件模板

邮件模板位于 `./backend/app/email-templates/`。这里有两个目录：`build` 和 `src`。`src` 目录包含用于构建最终邮件模板的源文件。`build` 目录包含应用程序使用的最终邮件模板。

