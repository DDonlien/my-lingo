# FOUND-A：产品边界

- ID：`FOUND-A-000`。
- 类型：`DOC`。
- 状态：已完成（沿用原需求记录；本轮未重新执行产品验收）。
- 版本管理标识：`versioncontrolid`（含义待定义，不推断为 commit、branch 或 change）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / 阶段 0：项目协作与产品定义 / FOUND-A：产品边界。
- 原稳定 ID：`FOUND-A-000`, `FOUND-A-001`, `FOUND-A-002`, `FOUND-A-003`, `FOUND-A-004`, `FOUND-A-005`；不改写或重编号这些既有 ID。

## 当前需求与范围

- [x] [FOUND-A-000] 定义 Phase 1（v0.1）产品方向 #epic #P0
  - [x] [FOUND-A-001] 产品命名为 `myLingo`
  - [x] [FOUND-A-002] 定义产品定位
    - [x] 轻量、现代、本地优先
    - [x] PO / CSV 多语言并排编辑器
    - [x] 面向独立游戏与小型软件本地化流程
  - [x] [FOUND-A-003] 定义 Phase 1（v0.1）第一优先级
    - [x] 多语言矩阵视图
    - [x] 并排编辑
    - [x] 直接保存回 `.po` / `.csv`
  - [x] [FOUND-A-004] 定义 Phase 1（v0.1）非目标范围
    - [x] 不做 Excel
    - [x] 不做术语库
    - [x] 不做复杂项目管理
    - [x] 不做复杂 QA
    - [x] 不做翻译记忆
    - [x] 不做 Git 集成
  - [x] [FOUND-A-005] 将项目与产品统一到 `my` 系列命名 #brand #P0
    - [x] 仓库、目录、npm package 与 GitHub Pages slug 使用 `my-lingo`
    - [x] 应用、安装包、网页、PWA、文档与诊断信息使用产品名 `myLingo`
    - [x] Electron app ID 使用 `com.ddonlien.my-lingo`
    - [x] TypeScript 项目类型与 Electron preload bridge 使用 `MyLingoProject` / `window.myLingo`
    - [x] 版本由 `0.1.1` 升级为 `0.1.2`，并同步 package 与 UI 展示
    - [x] 保留原 Lingrid 本地偏好、最近项目与 `.lingrid.json` 项目文件的兼容迁移

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments

### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 20260531234242-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260531234242-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 Prompt

```text
v0.1对应phase1,要支持.po和.csv两种文件作为原文件输入
```

#### 完成工作

- 更新 `AGENTS.md`，统一阶段称呼并明确 adapter 和文件输入边界。
- 更新 `README.md`，将 Phase 1（v0.1）的可编辑原文件输入写为 `.po` 和 `.csv`。
- 更新 `REQUIREMENTS.md`，新增 `[FILE-A-012]`，记录两类原文件输入和 `.pot` 的只读边界。
- 更新 `DESIGN.md`，统一 Phase 1（v0.1）称呼。

#### 更新的需求 ID

- `[FOUND-A-000]`
- `[FOUND-A-003]`
- `[FOUND-A-004]`
- `[FILE-A-012]`
- `[QA-A-000]`

#### 验证方式

- 使用 `rg` 检查 Phase 1（v0.1）、`.po`、`.csv` 和 `.pot` 的表述。
- 未运行构建或测试：仓库当前仅有文档，尚未初始化应用代码。

#### 备注

- `.pot` 仍在 Phase 1（v0.1）范围内，但只作为 source/template 输入，不属于可以保存回写的原文件输入。
