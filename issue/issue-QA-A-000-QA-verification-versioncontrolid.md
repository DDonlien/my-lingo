# QA-A：Phase 1（v0.1）验证

- ID：`QA-A-000`。
- 类型：`QA`。
- 状态：阻塞（沿用原需求记录）。
- 版本管理标识：`versioncontrolid`（含义待定义，不推断为 commit、branch 或 change）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / Phase 1：v0.1 最小可用编辑器 / QA-A：Phase 1（v0.1）验证。
- 原稳定 ID：`QA-A-000`, `QA-A-001`, `QA-A-002`, `QA-A-003`, `QA-A-004`, `QA-A-005`, `QA-A-006`, `QA-A-007`, `QA-A-008`, `QA-A-009`, `QA-A-010`, `QA-A-011`；不改写或重编号这些既有 ID。

## 当前需求与范围

- [ ] [QA-A-000] 建立 Phase 1（v0.1）验证流程 #qa #P0
  - [x] [QA-A-001] 准备 PO/POT/CSV fixtures
  - [x] [QA-A-002] 测试多 PO 合并为矩阵
  - [x] [QA-A-003] 测试编辑单元格并保存回 PO
  - [x] [QA-A-004] 测试编辑单元格并保存回 CSV
  - [ ] [QA-A-005] 测试保存和重新打开项目 JSON
  - [x] [QA-A-006] 测试 tag 搜索和筛选
  - [ ] [QA-A-007] 测试 changed 筛选和保存后清除
    - [x] 浏览器源文件写入会请求 `readwrite` 权限并回读校验；权限拒绝或校验失败时抛出明确错误
  - [x] [QA-A-008] 测试统计数据正确
  - [x] [QA-A-009] 测试 PO 元数据保真
    - [x] 保存后 plural、comments、references、flags、previous source 和 obsolete entries 不丢失
    - [x] 保存后 entry 顺序稳定
  - [x] [QA-A-010] 测试 `.pot` 不被主保存流程覆盖
  - [ ] [QA-A-011] 完成桌面 UI 自动化验收 #blocked
    - [ ] 当前 Codex 内置 Browser 安全策略阻止访问本地预览地址，需在允许 localhost 的环境中补测

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments

### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 20260601022148-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260601022148-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 Prompt

```text
完成到p1
```

#### 完成工作

- 新增 Electron main/preload 受控文件 API，Renderer 不直接访问 Node 文件系统。
- 新增 `.po` 解析与保守回写：编辑时保留 comments、references、flags、previous source、obsolete entries 和 entry 顺序。
- 新增 `.pot` 只读模板支持。
- 新增 `.csv` 原文件输入、自动映射与用户可修正 mapping。
- 新增源文件外部修改 mtime 检测，冲突时停止覆盖并保留 changed 状态。
- 新增项目 JSON：保存文件列表、列顺序、显示名称、tag、CSV mapping、视图状态；Electron 中可重新打开源文件。
- 新增完整矩阵 UI、详情编辑区、tag、筛选、统计、AI 建议和批量替换。
- 更新 `README.md`、`AGENTS.md` 和 `REQUIREMENTS.md`。

#### 更新的需求 ID

- `[CORE-A-000]` 至 `[CORE-A-006]`
- `[FILE-A-000]` 至 `[FILE-A-012]`
- `[UI-A-000]` 至 `[UI-A-006]`
- `[TAG-A-000]` 至 `[TAG-A-004]`
- `[SEARCH-A-000]` 至 `[SEARCH-A-010]`
- `[AI-A-000]` 至 `[AI-A-009]`
- `[BATCH-A-000]` 至 `[BATCH-A-005]`
- `[QA-A-001]` 至 `[QA-A-004]`
- `[QA-A-006]`
- `[QA-A-008]` 至 `[QA-A-011]`

#### 验证方式

- `npm run build`：通过。
- `npm test`：通过，1 个测试文件，共 7 个测试。
- `npm run electron`：Electron 进程可正常启动；测试后主动结束。
- 内置 Browser UI 自动化：未完成。安全策略阻止访问 localhost，本次未绕过限制。

#### 备注

- 尚未自动验证 `[QA-A-005]` 保存并重新打开项目 JSON 的桌面文件对话框完整路径。
- 尚未自动验证 `[QA-A-007]` changed 筛选和保存后清除的完整 UI 路径。
- 概念图：`/Users/taobe/.codex/generated_images/019e7eaf-4a43-7dd0-b862-feae91be7d01/ig_0baa51da0ae11692016a1c5aa0c4fc81919ba18182ba634358.png`
