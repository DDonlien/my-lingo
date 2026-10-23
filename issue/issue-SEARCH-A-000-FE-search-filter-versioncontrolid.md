# SEARCH-A：搜索、筛选与统计

- ID：`SEARCH-A-000`。
- 类型：`FE`。
- 状态：已完成（沿用原需求记录；本轮未重新执行产品验收）。
- 版本管理标识：`versioncontrolid`（含义待定义，不推断为 commit、branch 或 change）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / Phase 1：v0.1 最小可用编辑器 / SEARCH-A：搜索、筛选与统计。
- 原稳定 ID：`SEARCH-A-000`, `SEARCH-A-001`, `SEARCH-A-002`, `SEARCH-A-003`, `SEARCH-A-004`, `SEARCH-A-005`, `SEARCH-A-006`, `SEARCH-A-006-WORD`, `SEARCH-A-007`, `SEARCH-A-008`, `SEARCH-A-009`, `SEARCH-A-010`；不改写或重编号这些既有 ID。

## 当前需求与范围

- [x] [SEARCH-A-000] 实现基础检索与统计 #epic #P0
  - [x] [SEARCH-A-001] 搜索 source
  - [x] [SEARCH-A-002] 搜索任意语言译文
  - [x] [SEARCH-A-003] 搜索 tag
  - [x] [SEARCH-A-004] 筛选完成情况
    - [x] 所有目标语言有译文视为完成
    - [x] 任一目标语言缺译文视为未完成
    - [x] 支持按一个或多个已加载语言筛选完成或未完成状态
    - [x] 支持 `All languages`
  - [x] [SEARCH-A-005] 筛选 changed
  - [x] [SEARCH-A-006] 筛选 tag
    - [x] 点击筛选下拉框外部区域时自动收起菜单
    - [x] 支持多选 tag；条目命中任一所选 tag 时显示
    - [x] Source Tag 顶栏入口使用 `Source Tag` 名称
    - [x] `全部` 勾选时显式选中全部已知 tag 和 `空`
    - [x] `全部` 与具体选项之间使用虚线分隔
    - [x] 提供 `空` 选项，匹配没有 Source Tag 的条目
  - [x] [SEARCH-A-006-WORD] 筛选 Word Tag
    - [x] 顶栏增加 Word Tag 筛选入口
    - [x] 支持多选 Word Tag
    - [x] 支持按一个或多个语言限定 Word Tag 筛选范围
    - [x] 支持 `All languages`
    - [x] `全部` 勾选时显式选中全部已知 Word Tag 和 `空`
    - [x] `全部` 与具体选项之间使用虚线分隔
    - [x] 提供 `空` 选项，匹配指定语言范围内没有 Word Tag 的单元格
  - [x] [SEARCH-A-007] 统计条目信息
    - [x] 总条目数
    - [x] 当前筛选结果条目数
  - [x] [SEARCH-A-008] 统计各语言完成率
    - [x] 已翻译数量
    - [x] 未翻译数量
    - [x] 完成率
  - [x] [SEARCH-A-009] 统计 tag 数量
  - [x] [SEARCH-A-010] 统计 changed 数量

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments

### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 20260601231418-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260601231418-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 Prompt

```text
修改：
- 全部tags改名叫Source Tag
- 全部勾选时，应该意味着所有tag都被选上
- 全部和下面的选项中应该有一道虚线隔开
- 增加一个默认的“空”选项对应没有tag的项目
```

#### 匹配到的需求

- `[SEARCH-A-006]` 筛选 tag
- `[SEARCH-A-006-WORD]` 筛选 Word Tag

#### 完成工作

- Source Tag 与 Word Tag 筛选菜单均提供 `全部`、虚线、`空` 和具体标签列表。
- Source Tag 的 `空` 匹配没有 Source Tag 的条目。
- Word Tag 的 `空` 匹配指定语言范围内真实存在但没有 Word Tag 的单元格。
- 勾选 `全部` 时同步选中全部具体标签与 `空`。
- 更新 `README.md`、`REQUIREMENTS.md` 和 `DESIGN.md`。

#### 更新的需求 ID

- `[SEARCH-A-006]`
- `[SEARCH-A-006-WORD]`

#### 验证方式

- `npm test`：通过，28 个测试。
- `npm run build`：通过。
- `git diff --check`：通过。
- 本地浏览器：Source Tag 菜单显示 `全部`、虚线和 `空`；点击 `全部` 后菜单内 `8 / 8` 个 checkbox 全部勾选。

#### 备注

- 没有勾选任何 Tag 时，筛选保持关闭；勾选 `全部` 时筛选结果等价于显示全部有标签与无标签项。

### 20260601133302-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260601133302-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 Prompt

```text
顶栏的筛选需要增加2个功能
- complete、incomplete这里，需要根据加载的语言类型增加二级选项：
-- 选项类似 Incomplete zh-Hans，这些子的语言选项需要可以多选，顶部增加一个all的选项
- tag需要可以多选
```

#### 完成工作

- 顶栏完成度筛选支持按语言多选。
- 顶栏 tag 筛选支持多选。
- 旧项目 JSON 可自动迁移筛选状态。

#### 更新的需求 ID

- `[SEARCH-A-004]`
- `[SEARCH-A-006]`

#### 验证方式

- `npm test`：通过，1 个测试文件，共 12 个测试。
- `npm run build`：通过。
- `curl.exe --noproxy "*" http://127.0.0.1:5173/`：返回 `HTTP 200`。
- 新增回归测试：按一个或多个语言筛选 complete / incomplete。
- 新增回归测试：多 tag 任一命中。
- 新增回归测试：旧单值 tag 项目视图迁移。

#### 备注

- 语言多选为空表示 `All languages`。
- tag 多选为空表示 `All tags`。
