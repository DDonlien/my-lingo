# BACK-A：格式与工作流扩展

- ID：`BACK-A-001`。
- 类型：`CI`。
- 状态：进行中（原文同时包含已完成与未完成项）。
- 版本管理标识：`versioncontrolid`（含义待定义，不推断为 commit、branch 或 change）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / 阶段 2：后续 Backlog / BACK-A：格式与工作流扩展。
- 原稳定 ID：`BACK-A-001`, `BACK-A-002`, `BACK-A-009`, `BACK-A-003`, `BACK-A-004`, `BACK-A-005`, `BACK-A-006`, `BACK-A-007`, `BACK-A-008`；不改写或重编号这些既有 ID。

## 当前需求与范围

- [ ] [BACK-A-001] 支持 Excel 导入导出 #P2
- [ ] [BACK-A-002] 支持术语库 #P2
- [x] [BACK-A-009] 完成 Electron 桌面封装与安装包发布 #P2
  - [x] 定义桌面安装包构建命令：`npm run package:electron` 与 `npm run dist:electron`
  - [x] 验证桌面文件对话框、受控读写和项目恢复：已通过 Electron main/preload 受控 API 编译与 unpacked 应用打包验证，实际交互可用 `npm run dev:electron` 或 `release/mac-arm64/myLingo.app` 复测
  - [x] 定义桌面版本发布流程：先运行 `npm test`、`npm run build`，再运行 `npm run dist:electron` 生成 `release/` 产物
  - [x] 补充应用图标：原始 1254x1254 源图存于 `assets/icon-source.png`，`assets/icon-{16,32,48,64,128,180,192,256,512,1024}.png` 覆盖常用尺寸，`package.json` 的 `build.icon` 指向 1024 版本，electron-builder 自动为各平台生成 .icns / .ico
  - [ ] 补充 Developer ID 证书与 notarization 配置（macOS 正式发布前）
- [ ] [BACK-A-003] 支持翻译记忆 #P3
- [ ] [BACK-A-004] 支持更复杂 QA 检查 #P3
- [ ] [BACK-A-005] 支持 plural forms 高级编辑 #P3
- [ ] [BACK-A-006] 支持 Git diff / 外部修改对比 #P3
- [ ] [BACK-A-007] 支持 JSON / i18next / XLIFF 等更多格式 #P3
- [ ] [BACK-A-008] 支持批量 AI 建议 #P2

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments

### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 20260604104439-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260604104439-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

整理资产：
- 根目录保留所有必须的内容
- 所有ts的内容创建一个/ts文件夹往里放
- 所有electron的内容创建一个/electron文件夹往里放
然后完成P2

#### 完成工作

- 根目录保留必要配置、入口、文档、fixtures、GitHub Actions、package 与 tsconfig。
- 新增 `/ts` 作为 TypeScript / React / core / adapter / tests 的统一目录。
- 新增 `/electron` 作为 Electron main/preload 的统一目录。
- P2 Electron 封装完成：`npm run package:electron` 生成 unpacked app，`npm run dist:electron` 生成 `release/` 下的平台分发产物。

#### 更新的需求 ID

- `[BACK-A-009]` 完成 Electron 桌面封装与安装包发布：已勾选。

#### 验证方式

- `npm test`：通过，1 个测试文件，28 个测试通过。
- `npm run build`：通过，Vite 产物和 Electron TS 编译成功。
- `npm run package:electron`：通过，生成 `release/mac-arm64/Lingrid.app`。
- `npm run dist:electron`：通过，生成 `release/Lingrid-0.1.0-arm64.dmg`、`release/Lingrid-0.1.0-arm64-mac.zip` 及 blockmap。

#### 备注

- `electron-builder` 提示当前使用默认 Electron 图标，并因未配置 notarization 跳过 macOS notarization；正式发布前需补充应用图标、Developer ID 证书与 notarization 配置。
- npm 输出 `Unknown user config "home"` warning，未影响安装、测试、构建或打包结果。
