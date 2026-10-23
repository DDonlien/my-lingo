# DOC-A：仓库文档基础

- ID：`DOC-A-000`。
- 类型：`DOC`。
- 状态：已完成（沿用原需求记录；本轮未重新执行产品验收）。
- 版本管理标识：`versioncontrolid`（含义待定义，不推断为 commit、branch 或 change）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / 阶段 0：项目协作与产品定义 / DOC-A：仓库文档基础。
- 原稳定 ID：`DOC-A-000`, `DOC-A-001`, `DOC-A-002`, `DOC-A-003`, `DOC-A-004`, `DOC-A-005`, `DOC-A-006`, `DOC-A-007`；不改写或重编号这些既有 ID。

## 当前需求与范围

- [x] [DOC-A-000] 建立项目协作文档 #epic #docs #P0
  - [x] [DOC-A-001] 创建根目录 `AGENTS.md`
    - [x] 写入标准协作规范
    - [x] 补充 myLingo 项目专用内容
  - [x] [DOC-A-002] 创建根目录 `README.md`
    - [x] 说明项目是什么
    - [x] 说明 Phase 1（v0.1）当前能力与非目标范围
    - [x] 索引 `AGENTS.md`、`REQUIREMENTS.md`、`DESIGN.md` 和 `agent-log/`
  - [x] [DOC-A-003] 创建根目录 `REQUIREMENTS.md` #cut 旧工作制度已由本轮 Issue 流程替代；原勾选只保留历史事实。
    - [x] 使用稳定 ID
    - [x] 使用缩进 checkbox 表达父子任务
    - [x] 记录 Phase 1（v0.1）范围和后续 Backlog
  - [x] [DOC-A-004] 创建根目录 `DESIGN.md`
    - [x] 记录 shadcn/ui + Linear 参考方向
    - [x] 记录色彩、字体、布局、组件和可访问性原则
  - [x] [DOC-A-005] 创建根目录 `agent-log/` #cut 旧工作制度已由本轮 Issue 流程替代；原勾选只保留历史事实。
    - [x] 放入本次初始化日志
  - [x] [DOC-A-006] 根据已归档对话补全项目文档
    - [x] 将 PO 保真约束写入需求与项目说明
    - [x] 补充 `.pot` 只读语义、语言列配置和 CSV 映射边界
  - [x] [DOC-A-007] 更新 README 文档以反映最新功能与 AI prompt 语法 #docs #P1
    - [x] `README.md` 与 `README.zh-CN.md` 同步更新
    - [x] 新增 AI Prompt Template Variables 章节，说明 `{{source}}`、`{{language}}`、`{{OtherLan}}` / `{{OhterContent}}`、索引语法 `{{OtherLan_1}}`、语言代码后缀语法 `{{OtherLan_<lang>}}`
    - [x] 更新 Phase 1 能力列表，补充多 provider 支持、批量 AI 翻译、同源其他语言参考变量等已交付功能
    - [x] 更新 Current Status，反映 Phase 1.5 正在进行中的方向

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments

### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 20260531224107-utcp9-gpt5-5-thinking.md — 历史证据迁移

来源：`agent-log/20260531224107-utcp9-gpt5-5-thinking.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 Prompt

```text
Lingrid 灵译吧，根据你的知识库和我们现在的沟通，为我创建我给真的仓库需要的agents, requirements, design, log, readme
```

#### 用户请求摘要

用户确认项目名为 `Lingrid 灵译`，希望基于此前关于轻量 PO/CSV 多语言矩阵编辑器的讨论，创建真实仓库需要的 `AGENTS.md`、`REQUIREMENTS.md`、`DESIGN.md`、`README.md` 和 `agent-log/` 初始日志。

#### 匹配到的需求

- `[DOC-A-000]` 建立项目协作文档
- `[FOUND-A-000]` 定义 0.1 产品方向

#### 完成工作

- 创建 `AGENTS.md`，保留标准协作规范，并补充 Lingrid 灵译项目专用内容。
- 创建 `README.md`，说明项目定位、0.1 核心能力、非目标范围、技术方向和目录结构。
- 创建 `REQUIREMENTS.md`，以 Obsidian 友好的 checkbox 结构记录 0.1 需求和后续 backlog。
- 创建 `DESIGN.md`，记录 shadcn/ui + Linear 风格的视觉规范。
- 创建 `agent-log/20260531224107-utcp9-gpt5-5-thinking.md`，记录本次文档初始化任务。

#### 更新的需求

- `[DOC-A-000]`
- `[DOC-A-001]`
- `[DOC-A-002]`
- `[DOC-A-003]`
- `[DOC-A-004]`
- `[DOC-A-005]`
- `[FOUND-A-000]`
- `[FOUND-A-001]`
- `[FOUND-A-002]`
- `[FOUND-A-003]`
- `[FOUND-A-004]`

#### 验证

- 已在临时文件目录生成 Markdown 文件。
- 未运行项目构建或测试，因为目标仓库尚未初始化到当前环境。

#### 备注

- 将文档复制到真实仓库根目录后，首次开发任务应按 `AGENTS.md` 执行 `git pull`，并补充真实分支、版本和项目命令。
- 0.1 明确不包含 Excel、术语库、翻译记忆、复杂 QA、Git 集成和复杂项目管理。
