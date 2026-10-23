# RELEASE-A：浏览器版本发布

- ID：`RELEASE-A-001`。
- 类型：`OPS`。
- 状态：已完成（沿用原需求记录；本轮未重新执行产品验收）。
- 版本管理标识：`versioncontrolid`（含义待定义，不推断为 commit、branch 或 change）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / 阶段 2：后续 Backlog / RELEASE-A：浏览器版本发布。
- 原稳定 ID：`RELEASE-A-001`；不改写或重编号这些既有 ID。

## 当前需求与范围

- [x] [RELEASE-A-001] 使用 GitHub Actions 部署 GitHub Pages #P0
  - [x] 推送 `main` 时执行测试与构建
  - [x] 使用 Pages artifact 发布 `dist/`
  - [x] Vite 在 GitHub Actions 中使用 `/my-lingo/app/` 子路径

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments

### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 20260601180442-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260601180442-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 Prompt

```text
我已经开通了GITHUB ACTION，提交项目并部署到GITHUB PAGE
```

任务执行中补充：

```text
把ELECTRON封装任务放到P2
```

```text
继续未完成的任务
```

#### 完成工作

- GitHub Pages 自动部署 workflow 已准备完成。
- Electron 封装任务已进入 P2 backlog。

#### 更新的需求 ID

- `[RELEASE-A-001]`
- `[BACK-A-009]`

#### 验证方式

- `npm test`：通过，1 个测试文件，共 17 个测试。
- `$env:GITHUB_ACTIONS='true'; npm run build`：通过。
- `dist/index.html`：资源路径为 `/lingrid/assets/...`。
- `git diff --check`：通过，仅有 LF/CRLF 提示。
- GitHub Pages API：`build_type` 为 `workflow`。

#### 备注

- 提交和推送后的线上 Actions 结果在本次执行后续继续检查。
