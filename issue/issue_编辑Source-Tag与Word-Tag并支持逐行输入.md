# 编辑Source-Tag与Word-Tag并支持逐行输入

- ID：`TAG-A-000`。
- 类型：`DATA`。
- 状态：已完成（沿用原需求记录；本轮未重新执行产品验收）。
- 版本管理：Git。
- 实施提交：未核实（现有记录未提供可直接对应本任务的实际实施提交；来源快照、当前 HEAD 与文档迁移提交不代替任务实施版本）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / Phase 1：v0.1 最小可用编辑器 / TAG-A：Tag 与标记。
- 原稳定 ID：`TAG-A-000`, `TAG-A-001`, `TAG-A-002`, `TAG-A-003`, `TAG-A-004`, `TAG-A-005`, `TAG-A-006`, `TAG-A-007`, `TAG-A-008`；不改写或重编号这些既有 ID。
- 原需求标题：TAG-A：Tag 与标记。
- 原迁移文件：`issue/issue-TAG-A-000-DATA-tag-versioncontrolid.md`（重命名前路径，仅用于历史追溯）。

## 当前需求与范围

- [x] [TAG-A-000] 实现两层 tag 系统 #feature #P0
  - [x] [TAG-A-001] 支持 Obsidian 风格 tag
    - [x] 例如 `#todo`
    - [x] 例如 `#ui`
    - [x] 例如 `#review`
  - [x] [TAG-A-002] tag 作用于 source entry
    - [x] 同一 source 的所有语言共享 tag
  - [x] [TAG-A-003] tag 保存到项目 JSON
    - [x] 不默认写入 `.po`
    - [x] 不默认写入 `.csv`
  - [x] [TAG-A-004] 支持在详情编辑区编辑 tag
  - [x] [TAG-A-005] 支持在矩阵 tag 单元格中直接编辑 tag
  - [x] [TAG-A-006] 将 entry 级 tag 明确为 Source Tag
    - [x] 同一 source 的所有语言共享 Source Tag
  - [x] [TAG-A-007] 支持 Word Tag
    - [x] Word Tag 作用于具体 source 的具体语言单元格
    - [x] 在详情侧栏 Source Tag 下方编辑当前单元格的 Word Tag
    - [x] Word Tag 保存到项目 JSON，不默认写入 `.po` 或 `.csv`
    - [x] 单元格右上角使用带 padding 的彩色竖条展示 Word Tag
    - [x] 多个 Word Tag 显示多个竖条，hover 展示该单元格全部 Word Tag
    - [x] 相同 Word Tag 使用稳定一致的颜色
- [x] [TAG-A-008] Tag 输入支持回车换行分隔多 Tag #feature #P1
  - [x] 矩阵 tag 单元格、详情区 Source Tag 和 Word Tag 的输入框统一改为 textarea
  - [x] 用户可在输入框中用回车（换行）分隔多个 tag，每行一个 tag
  - [x] 提交时按任意空白字符（含换行）拆分并逐个 normalize
  - [x] 矩阵 tag 单元格中 Tab 键保持提交并移动焦点的行为；Enter 键插入换行以继续输入下一个 tag
  - [x] 详情区 tag textarea 失焦时自动提交，Enter 键自由插入换行
  - [x] 显示时以换行符连接，保持每行一个 tag 的视觉呈现

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments


### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 20260601221134-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260601221134-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 Prompt

```text
把tag功能拆分成2层，在侧栏现有的tag下面增加额外一行
Source Tag：不变
Word Tag：增加到每个具体语言的具体单元格
在添加word tag后，应该在单元格的右上角（做一些padding）增加一个小小的竖条长方形彩色标签，hover应该显示所有tag，如果有多个tag应该是多个竖条，竖条的颜色和tag的应该保持一致，顶栏目应该增加一个筛选功能Word Tag，它和“未完成”一样，应该有二级分类（一级word，二级是对应的语言）
```

#### 匹配到的需求

- `[TAG-A-000]` Tag 与标记
- `[SEARCH-A-003]` 搜索 tag
- `[SEARCH-A-006]` 筛选 tag

#### 完成工作

- 侧栏现有 tag 更名为 `Source Tag`，下方增加 `Word Tag`。
- Word Tag 绑定具体 source 与语言单元格。
- Word Tag 保存到项目 JSON 的 `wordTags`，默认不写入 `.po` 或 `.csv`。
- 单元格右上角增加带 padding 的细小彩色竖条；多个 Word Tag 展示多个竖条；hover 显示全部标签。
- 顶栏新增 Word Tag 筛选菜单，支持 Word Tag 多选和语言范围多选。
- 搜索框同时匹配 Source Tag 与 Word Tag。
- 批量替换、草稿提交和 changed 状态清理保持 Word Tag 不丢失。
- 更新 `AGENTS.md`、`README.md`、`REQUIREMENTS.md` 和 `DESIGN.md`。

#### 更新的需求 ID

- `[TAG-A-000]`
- `[TAG-A-006]`
- `[TAG-A-007]`
- `[SEARCH-A-003]`
- `[SEARCH-A-006-WORD]`

#### 验证方式

- `npm test`：通过，27 个测试。
- `npm run build`：通过。
- `git diff --check`：通过。
- 本地浏览器：为当前单元格输入 `#review #todo` 后出现 `2` 条彩色竖条，hover 标题为 `#review #todo`。
- 本地浏览器：顶栏 Word Tag 菜单显示 tag 列表和语言二级列表；选择 `#review + 日本語` 后矩阵筛选为 `1` 行。

#### 备注

- Source Tag 和 Word Tag 都属于项目状态，不属于 PO/CSV 翻译正文。

### 2026-10-24 07:13:06 UTC — Agent（纠正迁移命名）

根据用户确认的原语言与下划线命名规则整理本记录；类型与原 ID 保留在 properties，原始勾选、取消／延后标记及验收边界照录。 未核实本任务实际实施提交，省略文件名版本后缀；未执行代码、构建或用户验收，未提交或推送。
