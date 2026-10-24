# 生成myLingo应用图标多尺寸资源与浏览器favicon

- ID：`BRAND-A-001`。
- 类型：`UI`。
- 状态：进行中（原文同时包含已完成与未完成项）。
- 版本管理：Git。
- 实施提交：未核实（现有记录未提供可直接对应本任务的实际实施提交；来源快照、当前 HEAD 与文档迁移提交不代替任务实施版本）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / 阶段 2：后续 Backlog / BRAND-A：品牌与图标资产。
- 原稳定 ID：`BRAND-A-001`；不改写或重编号这些既有 ID。
- 原需求标题：BRAND-A：品牌与图标资产。
- 原迁移文件：`issue/issue-BRAND-A-001-UI-assets-versioncontrolid.md`（重命名前路径，仅用于历史追溯）。

## 当前需求与范围

- [x] [BRAND-A-001] 落地应用图标与浏览器 favicon #brand #P1
  - [x] 保留原始源图（1254x1254 PNG）于 `assets/icon-source.png`，作为以后重新生成所有尺寸的 source of truth
  - [x] 落地常用 PNG 尺寸到 `assets/`，覆盖 16 / 32 / 48 / 64 / 128 / 180 / 192 / 256 / 512 / 1024
  - [x] 浏览器 favicon 资源放到 `public/`，让 Vite 原样 copy 到 dist/
  - [x] 拼合多尺寸 `public/favicon.ico`（含 16 / 32 / 48 / 64 / 128 / 256）
  - [x] 提供 `public/apple-touch-icon.png`（180x180）和 `public/site.webmanifest`
  - [x] `index.html` 引入 favicon / apple-touch-icon / manifest / theme-color / description
  - [x] `package.json` 的 `build.icon` 指向 `assets/icon-1024.png`，electron-builder 自动生成 macOS .icns 与 Windows .ico
  - [x] README 与 DESIGN 引用图标资源位置
  - [ ] 替换未来 DESIGN 改版时的旧 logo；旧 logo 归档到 `archive/brand/`

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments


### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 2026-10-24 07:13:06 UTC — Agent（纠正迁移命名）

根据用户确认的原语言与下划线命名规则整理本记录；类型与原 ID 保留在 properties，原始勾选、取消／延后标记及验收边界照录。 未核实本任务实际实施提交，省略文件名版本后缀；未执行代码、构建或用户验收，未提交或推送。
