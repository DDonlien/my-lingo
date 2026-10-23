# PERF-A：矩阵大工程性能优化 #epic #P1.5

- ID：`PERF-A-000`。
- 类型：`SEC`。
- 状态：进行中（原文同时包含已完成与未完成项）。
- 版本管理标识：`versioncontrolid`（含义待定义，不推断为 commit、branch 或 change）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / Phase 1.5：工作流与状态优化 / PERF-A：矩阵大工程性能优化 #epic #P1.5。
- 原稳定 ID：`PERF-A-000`, `PERF-A-001`, `PERF-A-002`, `PERF-A-003`；不改写或重编号这些既有 ID。

## 当前需求与范围

- [x] [PERF-A-000] 实现矩阵视图的性能重构 #feature #P1.5
  - [x] [PERF-A-001] 引入虚拟滚动（Virtual Scroll / Windowing）机制，只渲染可视区域内的行，以**解决打开数千条翻译的大工程时，DOM 节点数过载导致的滚动和布局卡顿问题**。
    - [x] 确保多选状态完全保存在 JavaScript 内存中（非 DOM 绑定），以保证跨视口多选（Shift+Click）和复制/粘贴能正常执行
    - [ ] 确保键盘导航（使用 `Enter` / `Tab` 移动到屏幕外的未渲染行）能配合虚拟列表 API（如 `scrollToItem`）自动滚动对齐，待目标单元格 DOM 挂载后再安全执行聚焦（`.focus()`）
  - [ ] [PERF-A-002] 实现输入框状态下放（Local State），用户打字时由单元格局部状态管理，失焦（onBlur）、回车或 Tab 时再同步至全局，以**避免打字时每一次按键都触发 App 顶层组件全量重渲染导致的输入卡顿**。
  - [ ] [PERF-A-003] 将行和单元格拆分为独立的 memo 组件（如 `MatrixRow`, `MatrixCell`），结合 `useCallback` 稳定回调引用，以**阻止选中或更新单个单元格时，让其他未发生变化的数千个单元格进行无谓的 Virtual DOM Diff 计算**。

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments

### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 20260609012700-utcp8-gemini3.5flash.md — 历史证据迁移

来源：`agent-log/20260609012700-utcp8-gemini3.5flash.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

```text
那确保把这部分录入requirement
```

#### 匹配到的需求

- 更新了 `[PERF-A-001]` 需求子项

#### 完成工作

- 更新 `REQUIREMENTS.md`，补齐了虚拟滚动设计方案下的具体交互约束子项。

#### 更新的需求 ID

- 更新：`[PERF-A-001]` 及其两个新增细节子项。

#### 验证方式

- 静态检查 `REQUIREMENTS.md` 中的格式和新增文本。

#### 备注

- 无

### 20260609012200-utcp8-gemini3.5flash.md — 历史证据迁移

来源：`agent-log/20260609012200-utcp8-gemini3.5flash.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

```text
记录几个额外的需求到requirement
- 你推荐的这些优化，记得写清楚目的
- lingrid项目文件改成隐藏的.lingrid这样的样式，加载时直接加载目标文件夹，找到了就加载成功
- 通过localstorage储存项目工程列表，便于快速打开已知项目，设计待定
```

#### 匹配到的需求

- 新增 `[PERF-A-000]`，`[FILE-B-000]`，`[FILE-C-000]` 需求组

#### 完成工作

- 更新 `REQUIREMENTS.md`，录入了性能优化、隐藏配置文件和最近项目列表这三个方向的新需求。

#### 更新的需求 ID

- 新增：`[PERF-A-000]`, `[PERF-A-001]`, `[PERF-A-002]`, `[PERF-A-003]`
- 新增：`[FILE-B-000]`, `[FILE-B-001]`, `[FILE-B-002]`, `[FILE-B-003]`
- 新增：`[FILE-C-000]`, `[FILE-C-001]`, `[FILE-C-002]`, `[FILE-C-003]`

#### 验证方式

- 静态检查 `REQUIREMENTS.md` 的层级结构和需求 ID。

#### 备注

- 无
