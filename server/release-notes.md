
# 发布说明

## 最新更改

## 0.10.0

### 新功能

* ✅ 添加项目和 admin 测试，并重构现有测试。PR [#2146](https://github.com/fastapi/full-stack-fastapi-template/pull/2146) 由 [@alejsdev](https://github.com/alejsdev)。
* ✨ 为 User 和 Item 模型添加 created_at 字段并更新端点。PR [#2144](https://github.com/fastapi/full-stack-fastapi-template/pull/2144) 由 [@alejsdev](https://github.com/alejsdev)。
* 🔧 从 npm 迁移到 Bun。PR [#2097](https://github.com/fastapi/full-stack-fastapi-template/pull/2097) 由 [@alejsdev](https://github.com/alejsdev)。
* 🔧 设置 node monorepo。PR [#2095](https://github.com/fastapi/full-stack-fastapi-template/pull/2095) 由 [@alejsdev](https://github.com/alejsdev)。
* 🧑‍💻 实现 uv workspaces。PR [#2090](https://github.com/fastapi/full-stack-fastapi-template/pull/2090) 由 [@alejsdev](https://github.com/alejsdev)。
* 🔧 添加推荐的 VS Code 扩展。PR [#1386](https://github.com/fastapi/full-stack-fastapi-template/pull/1386) 由 [@tobiase](https://github.com/tobiase)。
* ✨ 默认使用 pwdlib 和 Argon2，添加逻辑（和测试）以自动更新使用 Bcrypt 的旧密码。PR [#2104](https://github.com/fastapi/full-stack-fastapi-template/pull/2104) 由 [@tiangolo](https://github.com/tiangolo)。
* 🔨 在 pre-commit 时生成前端 SDK，移除自定义 workflow。PR [#2111](https://github.com/fastapi/full-stack-fastapi-template/pull/2111) 由 [@tiangolo](https://github.com/tiangolo)。

### 修复

* 🐛 在 admin 路由中添加用户认证检查以限制非超级用户访问。PR [#2145](https://github.com/fastapi/full-stack-fastapi-template/pull/2145) 由 [@alejsdev](https://github.com/alejsdev)。
* 🐛 在 `read_user_by_id` 中处理不存在的用户 ID。PR [#1396](https://github.com/fastapi/full-stack-fastapi-template/pull/1396) 由 [@saltie2193](https://github.com/saltie2193)。

### 重构

* 🔥 从推荐扩展中移除 debugpy，它已包含在 Python 扩展中。PR [#2143](https://github.com/fastapi/full-stack-fastapi-template/pull/2143) 由 [@tiangolo](https://github.com/tiangolo)。
* 🔧 使用新的顶级设置更新前端生产构建上下文。PR [#2108](https://github.com/fastapi/full-stack-fastapi-template/pull/2108) 由 [@tiangolo](https://github.com/tiangolo)。
* 🚚 将 Docker Compose 文件重命名为新名称 `compose.yml`。PR [#2106](https://github.com/fastapi/full-stack-fastapi-template/pull/2106) 由 [@tiangolo](https://github.com/tiangolo)。
* 🔒️ 确保认证花费恒定时间，以避免枚举攻击。PR [#2105](https://github.com/fastapi/full-stack-fastapi-template/pull/2105) 由 [@tiangolo](https://github.com/tiangolo)。

### 升级

* ⬆ 将 postgres 从 17 升级到 18。PR [#1910](https://github.com/fastapi/full-stack-fastapi-template/pull/1910) 由 [@dependabot[bot]](https://github.com/apps/dependabot)。
* ⬆ 将 traefik 从 3.0 升级到 3.6。PR [#1973](https://github.com/fastapi/full-stack-fastapi-template/pull/1973) 由 [@dependabot[bot]](https://github.com/apps/dependabot)。

### 文档

* 📝 更新部署文档。PR [#2109](https://github.com/fastapi/full-stack-fastapi-template/pull/2109) 由 [@tiangolo](https://github.com/tiangolo)。

### 内部

* 🎨 格式化 Python 脚本测试。PR [#2112](https://github.com/fastapi/full-stack-fastapi-template/pull/2112) 由 [@tiangolo](https://github.com/tiangolo)。
* 🔨 更新 generate-client.sh 和文档。PR [#2110](https://github.com/fastapi/full-stack-fastapi-template/pull/2110) 由 [@tiangolo](https://github.com/tiangolo)。
* 🔥 移除旧的未使用脚本。PR [#2107](https://github.com/fastapi/full-stack-fastapi-template/pull/2107) 由 [@tiangolo](https://github.com/tiangolo)。

## 0.9.0

### 新功能

* ✨ 为所有页面添加 meta title 支持。PR [#2039](https://github.com/fastapi/full-stack-fastapi-template/pull/2039) 由 [@alejsdev](https://github.com/alejsdev)。
* 🛂 将前端迁移到 Shadcn。PR [#2010](https://github.com/fastapi/full-stack-fastapi-template/pull/2010) 由 [@alejsdev](https://github.com/alejsdev)。

### 修复

* 🐛 修复 `EMAILS_FROM_NAME` 类型为 `str` 而不是 `EmailStr`。PR [#1940](https://github.com/fastapi/full-stack-fastapi-template/pull/1940) 由 [@martin0258](https://github.com/martin0258)。
* 🐛 修复 `parse_cors` 函数对空字符串和空列表的一致性。PR [#1672](https://github.com/fastapi/full-stack-fastapi-template/pull/1672) 由 [@rolkotaki](https://github.com/rolkotaki)。
* 🐛 用户选择时关闭侧边栏抽屉。PR [#1515](https://github.com/fastapi/full-stack-fastapi-template/pull/1515) 由 [@dtellz](https://github.com/dtellz)。
* 🐛 编辑用户字段时修复必填密码验证。PR [#1508](https://github.com/fastapi/full-stack-fastapi-template/pull/1508) 由 [@jpizquierdo](https://github.com/jpizquierdo)。

### 重构

* ♻️ 更新密码最大长度。PR [#1447](https://github.com/fastapi/full-stack-fastapi-template/pull/1447) 由 [@michaelAlvarino](https://github.com/michaelAlvarino)。
* 🚚 将后端测试移到 `app` 目录外。PR [#1862](https://github.com/fastapi/full-stack-fastapi-template/pull/1862) 由 [@YuriiMotov](https://github.com/YuriiMotov)。
* ✨ 为 Vite 环境变量添加 ImportMetaEnv 和 ImportMeta 接口。PR [#1860](https://github.com/fastapi/full-stack-fastapi-template/pull/1860) 由 [@alejsdev](https://github.com/alejsdev)。
* 🔧 更新 `tsconfig.json` 并修复错误。PR [#1859](https://github.com/fastapi/full-stack-fastapi-template/pull/1859) 由 [@alejsdev](https://github.com/alejsdev)。

### 升级

* ⬆ 升级 Biome 到最新版本。PR [#1861](https://github.com/fastapi/full-stack-fastapi-template/pull/1861) 由 [@alejsdev](https://github.com/alejsdev)。
* ⬆️ 更新 TansTack Router 依赖。PR [#1853](https://github.com/fastapi/full-stack-fastapi-template/pull/1853) 由 [@alejsdev](https://github.com/alejsdev)。
* ⬆️ 升级 React 和相关依赖。PR [#1843](https://github.com/fastapi/full-stack-fastapi-template/pull/1843) 由 [@alejsdev](https://github.com/alejsdev)。

### 文档

* 📝 添加本地邮件测试的 Mailcatcher 设置说明。PR [#2038](https://github.com/fastapi/full-stack-fastapi-template/pull/2038) 由 [@alejsdev](https://github.com/alejsdev)。
* 📝 更新 `README` 以包含 Vite 链接。PR [#2037](https://github.com/fastapi/full-stack-fastapi-template/pull/2037) 由 [@alejsdev](https://github.com/alejsdev)。
* 📝 修复过时的工作流徽章。PR [#2028](https://github.com/fastapi/full-stack-fastapi-template/pull/2028) 由 [@AymanAlSuleihi](https://github.com/AymanAlSuleihi)。
* 📝 更新文档。PR [#2036](https://github.com/fastapi/full-stack-fastapi-template/pull/2036) 由 [@alejsdev](https://github.com/alejsdev)。

