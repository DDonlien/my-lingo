# 说明myLingo需求记录的ID层级与验收标记

- ID：`migration-921e022a49e9`。
- 类型：`QA`。
- 状态：已确认约束 / 状态待核对（原文未单列完成状态）。
- 版本管理：Git。
- 实施提交：未核实（现有记录未提供可直接对应本任务的实际实施提交；来源快照、当前 HEAD 与文档迁移提交不代替任务实施版本）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪。
- 原需求标题：myLingo 需求追踪。
- 原迁移文件：`issue/issue-migration-921e022a49e9-QA-mylingo-versioncontrolid.md`（重命名前路径，仅用于历史追溯）。
- 记录性质：需求记录格式说明；背景记录，不代表新增实施任务。

## 当前需求与范围

本文件记录 myLingo 的需求、任务与验收状态。使用 Obsidian 原生友好的 Markdown checkbox、层级缩进、稳定 ID 和少量标签。

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments


### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 20260827003608-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260827003608-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 完成工作

- 项目名：`my-lingo`
- 产品名：`myLingo`
- 项目文件：`.my-lingo.json`
- macOS 测试包：`release/mac-arm64/myLingo.app`
- Bundle ID：`com.ddonlien.my-lingo`
- GitHub 仓库：`https://github.com/DDonlien/my-lingo`
- GitHub Pages：`https://ddonlien.github.io/my-lingo/`

#### 更新的需求 ID

- `FOUND-A-001`
- `FOUND-A-005`
- `FILE-B-001`～`FILE-B-005`
- `FILE-C-004`
- `SITE-A`
- `SITE-B-003`
- `BACK-A-009`
- `RELEASE-A-001`

#### 验证方式

- `npm test`：4 个 test files、88 个 tests 全部通过。
- `npm run build`：Vite 应用与 Electron TypeScript 构建通过。
- `npm run build:site`：`website/` 与 `dist-site/` 同步构建通过。
- `GITHUB_ACTIONS=true npm run build:app` 与 `GITHUB_ACTIONS=true npm run build:site`：确认部署结构为站点根目录 + `/my-lingo/app/`。
- `CSC_IDENTITY_AUTO_DISCOVERY=false npm run package:electron`：macOS arm64 测试包生成通过。
- `codesign --verify --deep --strict release/mac-arm64/myLingo.app`：ad-hoc 签名结构校验通过。
- `Info.plist`：`CFBundleDisplayName=myLingo`、`CFBundleIdentifier=com.ddonlien.my-lingo`、`CFBundleShortVersionString=0.1.2`。
- 残留扫描：除兼容迁移常量、迁移测试、历史日志与生成缓存外，不再存在旧仓库 URL、旧 Pages 路径、旧产品显示名或旧代码接口。

#### 备注

- 正式 macOS 分发仍需按既有发布流程完成 Developer ID 签名与 notarization；本次只验证更名后的 unpacked 应用结构。
- 推送 `main` 后由 GitHub Actions 触发 GitHub Pages 部署，最终运行状态在交付时单独核对。

### 2026-10-24 07:13:06 UTC — Agent（纠正迁移命名）

根据用户确认的原语言与下划线命名规则整理本记录；类型与原 ID 保留在 properties，原始勾选、取消／延后标记及验收边界照录。 未核实本任务实际实施提交，省略文件名版本后缀；未执行代码、构建或用户验收，未提交或推送。
