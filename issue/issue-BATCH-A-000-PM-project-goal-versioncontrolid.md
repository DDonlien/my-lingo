# BATCH-A：轻量批处理

- ID：`BATCH-A-000`。
- 类型：`PM`。
- 状态：已完成（沿用原需求记录；本轮未重新执行产品验收）。
- 版本管理标识：`versioncontrolid`（含义待定义，不推断为 commit、branch 或 change）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / Phase 1：v0.1 最小可用编辑器 / BATCH-A：轻量批处理。
- 原稳定 ID：`BATCH-A-000`, `BATCH-A-001`, `BATCH-A-002`, `BATCH-A-003`, `BATCH-A-004`, `BATCH-A-005`；不改写或重编号这些既有 ID。

## 当前需求与范围

- [x] [BATCH-A-000] 实现批量查找与替换 #feature #P1
  - [x] [BATCH-A-001] 输入 Find 文本
  - [x] [BATCH-A-002] 输入 Replace 文本
  - [x] [BATCH-A-003] 选择作用范围
    - [x] 当前语言
    - [x] 所有语言
    - [x] source
    - [x] tag
  - [x] [BATCH-A-004] 显示匹配数量
  - [x] [BATCH-A-005] 应用替换后标记 changed

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments

### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。
