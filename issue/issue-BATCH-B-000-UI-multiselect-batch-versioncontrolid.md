# BATCH-B：矩阵多选与批量填写

- ID：`BATCH-B-000`。
- 类型：`UI`。
- 状态：进行中（原文同时包含已完成与未完成项）。
- 版本管理标识：`versioncontrolid`（含义待定义，不推断为 commit、branch 或 change）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / Phase 1：v0.1 最小可用编辑器 / BATCH-B：矩阵多选与批量填写。
- 原稳定 ID：`BATCH-B-000`, `BATCH-B-001`, `BATCH-B-002`, `BATCH-B-003`, `BATCH-B-004`, `BATCH-B-005`, `BATCH-B-010`, `BATCH-B-011`, `BATCH-B-012`, `BATCH-B-013`；不改写或重编号这些既有 ID。

## 当前需求与范围

- [x] [BATCH-B-000] 实现类似 Excel 的矩阵多选与批量编辑 #feature #P1
  - [x] [BATCH-B-001] 按住 `Shift` 并点击鼠标左键时，可选中多个单元格
    - [x] 多选状态有清晰、低噪声的视觉反馈
    - [x] 点击未选中的其他位置时，退出原多选状态并切换当前单元格
  - [x] [BATCH-B-002] 支持对已选单元格批量复制和粘贴
    - [x] 复制和粘贴行为参考 Excel 的矩阵操作方式
    - [x] 粘贴后将实际发生变化的单元格标记为 changed
  - [x] [BATCH-B-003] 支持对已选单元格批量填写相同内容
    - [x] 在多选范围内任一单元格输入内容后，按 `Enter` 或 `Tab` 将相同内容填写到全部已选单元格
    - [x] 在多选范围内任一单元格输入内容后，点击其他位置时只提交当前编辑单元格，不批量填写
    - [x] 批量填写后将实际发生变化的单元格标记为 changed
  - [x] [BATCH-B-004] tag 单元格支持相同的多选、批量复制、批量粘贴和批量填写行为
    - [x] tag 批量修改后保持 entry 级共享语义
    - [x] tag 批量修改后标记项目状态为未保存
  - [x] [BATCH-B-005] 支持矩阵编辑撤销与重做
    - [x] `Ctrl/Cmd+Z` 撤销已提交的单元格、批量填写、批量粘贴、Source Tag 和 Word Tag 修改
    - [x] `Ctrl/Cmd+Shift+Z` 重做上述撤销操作
    - [x] 正在输入但尚未提交的译文草稿保留浏览器文本框自身的撤销行为
    - [x] 打开或导入新项目后清空上一项目的撤销/重做历史
- [ ] [BATCH-B-010] 点击矩阵单元格以外的位置时取消当前单元格选择 #ux #P1
  - [x] [BATCH-B-011] 点击空白表头、矩阵外空白区域或非单元格 UI 时，清空当前单元格 selection 与多选 selection
  - [x] [BATCH-B-012] 取消选择后，详情编辑器进入未选择状态
  - [ ] [BATCH-B-013] 取消选择后，AI 翻译/生成按钮进入“无单元格选中”的批量空单元格模式

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments

### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 20260608154639-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260608154639-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

```text
功能是 OK 的，一个小问题：你现在没有 Ctrl+Z 和 Ctrl+Shift+Z的撤销和重做功能
```

#### 匹配到的需求

- `[BATCH-B-000]` 实现类似 Excel 的矩阵多选与批量编辑
- 新增并完成 `[BATCH-B-005]` 矩阵编辑撤销与重做

#### 完成工作

- 修改 `ts/renderer/App.tsx`：
  - 新增 entries 快照 clone helper。
  - 新增 undo / redo 栈和快捷键处理。
  - 矩阵批量写入、剪贴板粘贴、Source Tag、Word Tag 和批量替换接入历史记录。
  - 新项目导入和项目恢复时清空历史。
- 修改 `REQUIREMENTS.md`：
  - 新增并勾选 `[BATCH-B-005]`。
- 修改 `README.md`：
  - Phase 1 能力说明补充撤销/重做快捷键。

#### 更新的需求 ID

- `[BATCH-B-005]`

#### 验证方式

- `npm test`：通过，2 个测试文件，47 个测试。
- `npm run build`：通过，包含 Vite app build 与 Electron TypeScript build。

#### 备注

- 本次未提交。
- 当前工作区仍包含上一轮多选功能和 AI 设置视觉调整的未提交改动。

### 20260608153713-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260608153713-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

```text
这个功能提交了吗？我实际试了一下，没有用
```

#### 匹配到的需求

- `[BATCH-B-000]` 实现类似 Excel 的矩阵多选与批量编辑
- `[BATCH-B-001]` Shift + 鼠标左键多选
- `[BATCH-B-002]` 批量复制和粘贴
- `[BATCH-B-003]` 批量填写相同内容
- `[BATCH-B-004]` tag 单元格支持同等批量行为

#### 完成工作

- 修改 `ts/renderer/App.tsx`：
  - 新增 `MatrixCellSelection`、活动单元格和多选单元格状态。
  - 新增矩阵多选、复制、粘贴、批量填写 helper。
  - 翻译单元格和 Source Tag 单元格接入多选、剪贴板和提交逻辑。
- 修改 `ts/renderer/styles.css`：
  - 新增多选单元格视觉反馈。
- 修改 `REQUIREMENTS.md`：
  - 勾选 `[BATCH-B-000]` 至 `[BATCH-B-004]`。
- 修改 `README.md`：
  - Phase 1 能力列表补充矩阵多选、批量复制粘贴和批量填写。
- 修改 `DESIGN.md`：
  - 表格 / 矩阵章节补充多选视觉规范。

#### 更新的需求 ID

- `[BATCH-B-000]`
- `[BATCH-B-001]`
- `[BATCH-B-002]`
- `[BATCH-B-003]`
- `[BATCH-B-004]`

#### 验证方式

- `npm test`：通过，2 个测试文件，47 个测试。
- `npm run build`：通过，包含 Vite app build 与 Electron TypeScript build。
- `git diff --check`：通过。
- 尝试使用 Node REPL + Playwright 做本地浏览器自动化验证，但项目和 REPL 环境均没有 Playwright 依赖；为避免引入无关依赖，未新增 Playwright。

#### 备注

- 本次未执行 git commit 或 push。
- 上一轮新增需求时没有实现代码；本轮已补实现。

### 20260601204801-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260601204801-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 Prompt

```text
在requirement p2里增加一个功能，如果按住shift，鼠标左键应该可以选中多个对象，这时候应该可以：
批量复制、粘贴，就像excel一样
在一个单元格里输入，回车或tab后所有单元格都填写一样的内容（鼠标点击其他地方则只填写这一个格子）
这两个功能对tag也要生效
```

#### 用户补充 Prompt

```text
加到p1吧
```

#### 匹配到的需求

- `[BATCH-A-000]` 实现批量查找与替换
- `[TAG-A-002]` tag 作用于 source entry
- `[TAG-A-005]` 支持在矩阵 tag 单元格中直接编辑 tag

#### 完成工作

- 新增 `[BATCH-B-000]`，记录类似 Excel 的矩阵多选与批量编辑能力。
- 明确 `Enter` 或 `Tab` 触发向全部已选单元格批量填写；鼠标点击其他位置时只提交当前编辑单元格。
- 明确 tag 单元格支持相同的多选、批量复制、批量粘贴和批量填写行为。

#### 更新的需求 ID

- `[BATCH-B-000]`
- `[BATCH-B-001]`
- `[BATCH-B-002]`
- `[BATCH-B-003]`
- `[BATCH-B-004]`

#### 验证方式

- 检查 `REQUIREMENTS.md` 中新增条目的阶段、层级、稳定 ID、checkbox 和 P1 标签。

#### 备注

- 本次仅补充需求文档，未修改实现代码，未运行自动化测试。

### 20260608164249-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260608164249-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

```text
实现 Batch B 010
```

#### 匹配到的需求

- `[BATCH-B-010]` 点击矩阵单元格以外的位置时取消当前单元格选择
- `[BATCH-B-011]` 清空当前单元格 selection 与多选 selection
- `[BATCH-B-012]` 详情编辑器进入未选择状态
- `[BATCH-B-013]` 无单元格选中时的批量 AI 模式

#### 完成工作

- 修改 `ts/renderer/App.tsx`：
  - `activeMatrixCell` 支持 `null`。
  - 新增并接入 `clearMatrixSelection()` 与 `clearMatrixSelectionFromNonCell()`。
  - 非矩阵单元格点击后详情区回到未选择状态。
- 修改 `REQUIREMENTS.md`：
  - 勾选 `[BATCH-B-011]` 和 `[BATCH-B-012]`。
  - 保持 `[BATCH-B-010]` 与 `[BATCH-B-013]` 未完成，等待 `AI-A-040` 批量 AI 翻译实现后收口。

#### 更新的需求 ID

- `[BATCH-B-011]`
- `[BATCH-B-012]`

#### 验证方式

- `npm test`：通过，2 个测试文件，47 个测试。
- `npm run build`：通过，包含 Vite app build 与 Electron TypeScript build。

#### 备注

- 本次未提交。
- 当前工作区已有多轮未提交改动和日志，本次未回滚或清理无关内容。
