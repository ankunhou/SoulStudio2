
# FastAPI 项目 - 部署

你可以使用 Docker Compose 将项目部署到远程服务器。

本项目期望你有一个 Traefik 代理处理与外部世界的通信和 HTTPS 证书。

你可以使用 CI/CD（持续集成和持续部署）系统自动部署，已经有使用 GitHub Actions 的配置。

但你必须先配置几件事。🤓

## 准备工作

* 准备一个远程服务器并可用。
* 配置域名的 DNS 记录指向你刚创建的服务器 IP。
* 为你的域名配置通配符子域名，这样你可以有多个子域名用于不同的服务，例如 `*.fastapi-project.example.com`。这对于访问不同组件很有用，如 `dashboard.fastapi-project.example.com`、`api.fastapi-project.example.com`、`traefik.fastapi-project.example.com`、`adminer.fastapi-project.example.com` 等。还有 `staging`，如 `dashboard.staging.fastapi-project.example.com`、`adminer.staging.fastapi-project.example.com` 等。
* 在远程服务器上安装和配置 [Docker](https://docs.docker.com/engine/install/)（Docker Engine，不是 Docker Desktop）。

## 公共 Traefik

我们需要一个 Traefik 代理来处理传入连接和 HTTPS 证书。

你只需要执行以下步骤一次。

### Traefik Docker Compose

* 创建一个远程目录来存储你的 Traefik Docker Compose 文件：

```bash
mkdir -p /root/code/traefik-public/
```

将 Traefik Docker Compose 文件复制到你的服务器。你可以在本地终端运行 `rsync` 命令：

```bash
rsync -a compose.traefik.yml root@your-server.example.com:/root/code/traefik-public/
```

### Traefik 公共网络

这个 Traefik 将期望一个名为 `traefik-public` 的 Docker"公共网络"与你的堆栈通信。

这样，将有一个单一的公共 Traefik 代理处理与外部世界的通信（HTTP 和 HTTPS），然后在其后面，你可以有一个或多个具有不同域名的堆栈，即使它们在同一个服务器上。

要创建一个名为 `traefik-public` 的 Docker"公共网络"，在远程服务器上运行以下命令：

```bash
docker network create traefik-public
```

### Traefik 环境变量

Traefik Docker Compose 文件期望在启动之前在终端中设置一些环境变量。你可以在远程服务器上运行以下命令。

* 创建 HTTP Basic Auth 的用户名，例如：

```bash
export USERNAME=admin
```

* 创建一个包含 HTTP Basic Auth 密码的环境变量，例如：

```bash
export PASSWORD=changethis
```

* 使用 openssl 生成 HTTP Basic Auth 密码的"哈希"版本并将其存储在环境变量中：

```bash
export HASHED_PASSWORD=$(openssl passwd -apr1 $PASSWORD)
```

要验证哈希密码是否正确，可以打印它：

```bash
echo $HASHED_PASSWORD
```

* 创建一个包含服务器域名的环境变量，例如：

```bash
export DOMAIN=fastapi-project.example.com
```

* 创建一个包含 Let's Encrypt 邮箱的环境变量，例如：

```bash
export EMAIL=admin@example.com
```

**注意**：你需要设置一个不同的邮箱，`@example.com` 邮箱不会工作。

### 启动 Traefik Docker Compose

转到你在远程服务器中复制 Traefik Docker Compose 文件的目录：

```bash
cd /root/code/traefik-public/
```

现在设置了环境变量并且 `compose.traefik.yml` 就位，你可以运行以下命令启动 Traefik Docker Compose：

```bash
docker compose -f compose.traefik.yml up -d
```

## 部署 FastAPI 项目

现在你已经有了 Traefik，你可以使用 Docker Compose 部署你的 FastAPI 项目。

**注意**：你可能想跳到关于使用 GitHub Actions 进行持续部署的部分。

## 复制代码

```bash
rsync -av --filter=":- .gitignore" ./ root@your-server.example.com:/root/code/app/
```

注意：`--filter=":- .gitignore"` 告诉 `rsync` 使用与 git 相同的规则，忽略 git 忽略的文件，如 Python 虚拟环境。

## 环境变量

你需要先设置一些环境变量。

### 生成密钥

`.env` 文件中的某些环境变量默认值为 `changethis`。

你必须用密钥更改它们，要生成密钥，你可以运行以下命令：

```bash
python -c "import secrets; print(secrets.token_urlsafe(32))"
```

复制内容并将其用作密码/密钥。再次运行以生成另一个安全密钥。

### 必需的环境变量

设置 `ENVIRONMENT`，默认为 `local`（用于开发），但在部署到服务器时，你应该设置类似 `staging` 或 `production`：

```bash
export ENVIRONMENT=production
```

设置 `DOMAIN`，默认为 `localhost`（用于开发），但在部署时你会使用自己的域名，例如：

```bash
export DOMAIN=fastapi-project.example.com
```

设置 `POSTGRES_PASSWORD` 为不同于 `changethis` 的值：

```bash
export POSTGRES_PASSWORD="changethis"
```

设置 `SECRET_KEY`，用于签名令牌：

```bash
export SECRET_KEY="changethis"
```

注意：你可以使用上面的 Python 命令生成一个安全的密钥。

设置 `FIRST_SUPER_USER_PASSWORD` 为不同于 `changethis` 的值：

```bash
export FIRST_SUPERUSER_PASSWORD="changethis"
```

设置 `BACKEND_CORS_ORIGINS` 以包含你的域名：

```bash
export BACKEND_CORS_ORIGINS="https://dashboard.${DOMAIN?Variable not set},https://api.${DOMAIN?Variable not set}"
```

你可以设置其他几个环境变量：

* `PROJECT_NAME`：项目名称，用于 API 文档和邮件。
* `STACK_NAME`：用于 Docker Compose 标签和项目名称的堆栈名称，对于 `staging`、`production` 等应该不同。你可以使用相同的域名，将点替换为破折号，例如 `fastapi-project-example-com` 和 `staging-fastapi-project-example-com`。
* `BACKEND_CORS_ORIGINS`：允许的 CORS 源列表，用逗号分隔。
* `FIRST_SUPERUSER`：第一个超级用户的邮箱，这个超级用户将是可以创建新用户的用户。
* `SMTP_HOST`：发送邮件的 SMTP 服务器主机，这来自你的邮件提供商（例如 Mailgun、Sparkpost、Sendgrid 等）。
* `SMTP_USER`：发送邮件的 SMTP 服务器用户。
* `SMTP_PASSWORD`：发送邮件的 SMTP 服务器密码。
* `EMAILS_FROM_EMAIL`：发送邮件的邮箱账户。
* `POSTGRES_SERVER`：PostgreSQL 服务器的主机名。你可以保留默认的 `db`，由同一个 Docker Compose 提供。除非你使用第三方提供商，否则通常不需要更改。
* `POSTGRES_PORT`：PostgreSQL 服务器的端口。你可以保留默认值。除非你使用第三方提供商，否则通常不需要更改。
* `POSTGRES_USER`：Postgres 用户，你可以保留默认值。
* `POSTGRES_DB`：用于此应用程序的数据库名称。你可以保留默认的 `app`。
* `SENTRY_DSN`：Sentry 的 DSN，如果你使用它。

### 使用 Docker Compose 部署

设置好环境变量后，你可以使用 Docker Compose 部署：

```bash
cd /root/code/app/
docker compose -f compose.yml build
docker compose -f compose.yml up -d
```

对于生产环境，你不希望有 `compose.override.yml` 中的覆盖，这就是为什么我们明确指定 `compose.yml` 作为要使用的文件。

## 持续部署（CD）

你可以使用 GitHub Actions 自动部署你的项目。😎

你可以有多个环境部署。

已经配置了两个环境，`staging` 和 `production`。🚀

### 安装 GitHub Actions Runner

* 在远程服务器上，为你的 GitHub Actions 创建一个用户：

```bash
sudo adduser github
```

* 为 `github` 用户添加 Docker 权限：

```bash
sudo usermod -aG docker github
```

* 临时切换到 `github` 用户：

```bash
sudo su - github
```

* 转到 `github` 用户的主目录：

```bash
cd
```

* [按照官方指南安装 GitHub Action 自托管 runner](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)。

* 当询问标签时，为环境添加一个标签，例如 `production`。你也可以稍后添加标签。

安装后，指南会告诉你运行一个命令来启动 runner。但是，一旦你终止该进程或与服务器失去本地连接，它就会停止。

为了确保它在启动时运行并继续运行，你可以将其安装为服务。为此，退出 `github` 用户并返回 `root` 用户：

```bash
exit
```

完成后，你将再次处于之前的用户。并且你将处于属于该用户的之前的目录。

在能够进入 `github` 用户目录之前，你需要成为 `root` 用户（你可能已经是）：

```bash
sudo su
```

* 作为 `root` 用户，转到 `github` 用户主目录内的 `actions-runner` 目录：

```bash
cd /home/github/actions-runner
```

* 使用用户 `github` 将自托管 runner 安装为服务：

```bash
./svc.sh install github
```

* 启动服务：

```bash
./svc.sh start
```

* 检查服务状态：

```bash
./svc.sh status
```

你可以在官方指南中阅读更多内容：[将自托管 runner 应用程序配置为服务](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/configuring-the-self-hosted-runner-application-as-a-service)。

### 设置 Secrets

在你的仓库中，为你需要的环境变量配置 secrets，与上面描述的相同，包括 `SECRET_KEY` 等。按照[官方 GitHub 设置仓库 secrets 指南](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository)。

当前的 Github Actions workflows 期望这些 secrets：

* `DOMAIN_PRODUCTION`
* `DOMAIN_STAGING`
* `STACK_NAME_PRODUCTION`
* `STACK_NAME_STAGING`
* `EMAILS_FROM_EMAIL`
* `FIRST_SUPERUSER`
* `FIRST_SUPERUSER_PASSWORD`
* `POSTGRES_PASSWORD`
* `SECRET_KEY`
* `LATEST_CHANGES`
* `SMOKESHOW_AUTH_KEY`

## URL

将 `fastapi-project.example.com` 替换为你的域名。

### 主 Traefik 仪表板

Traefik UI：`https://traefik.fastapi-project.example.com`

### 生产环境

前端：`https://dashboard.fastapi-project.example.com`

后端 API 文档：`https://api.fastapi-project.example.com/docs`

后端 API 基础 URL：`https://api.fastapi-project.example.com`

Adminer：`https://adminer.fastapi-project.example.com`

### 暂存环境

前端：`https://dashboard.staging.fastapi-project.example.com`

后端 API 文档：`https://api.staging.fastapi-project.example.com/docs`

后端 API 基础 URL：`https://api.staging.fastapi-project.example.com`

Adminer：`https://adminer.staging.fastapi-project.example.com`

