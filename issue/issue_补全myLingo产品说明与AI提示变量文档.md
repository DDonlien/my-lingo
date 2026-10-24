# 补全myLingo产品说明与AI提示变量文档

- ID：`DOC-A-002`。
- 类型：`DOC`。
- 状态：已完成（仅沿用本任务原始勾选；本轮未重新执行产品验收）。
- 版本管理：Git。
- 实施提交：未核实（现有记录未提供可直接对应本任务的实际实施提交；来源快照、当前 HEAD 与文档迁移提交不代替任务实施版本）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / 阶段 0：项目协作与产品定义 / DOC-A：仓库文档基础。
- 原稳定 ID：`DOC-A-000`, `DOC-A-001`, `DOC-A-002`, `DOC-A-003`, `DOC-A-004`, `DOC-A-005`, `DOC-A-006`, `DOC-A-007`；不改写或重编号这些既有 ID。
- 来源汇总状态：已完成（沿用原需求记录；本轮未重新执行产品验收）。
- 原迁移记录 ID：`DOC-A-000`。
- 本文件原任务 ID：`DOC-A-002`、`DOC-A-006`、`DOC-A-007`。
- 原需求标题：DOC-A：仓库文档基础。
- 原迁移文件：`issue/issue-DOC-A-000-DOC-repository-documentation-foundation-versioncontrolid.md`（重命名前路径，仅用于历史追溯）。
- 同源任务：[建立myLingo协作规范并保留旧需求与日志制度记录](issue_%E5%BB%BA%E7%AB%8BmyLingo%E5%8D%8F%E4%BD%9C%E8%A7%84%E8%8C%83%E5%B9%B6%E4%BF%9D%E7%95%99%E6%97%A7%E9%9C%80%E6%B1%82%E4%B8%8E%E6%97%A5%E5%BF%97%E5%88%B6%E5%BA%A6%E8%AE%B0%E5%BD%95.md)、[建立myLingo界面视觉与可访问性规范](issue_%E5%BB%BA%E7%AB%8BmyLingo%E7%95%8C%E9%9D%A2%E8%A7%86%E8%A7%89%E4%B8%8E%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7%E8%A7%84%E8%8C%83.md)。
- 共同约束与完整历史：[建立myLingo协作规范并保留旧需求与日志制度记录](issue_%E5%BB%BA%E7%AB%8BmyLingo%E5%8D%8F%E4%BD%9C%E8%A7%84%E8%8C%83%E5%B9%B6%E4%BF%9D%E7%95%99%E6%97%A7%E9%9C%80%E6%B1%82%E4%B8%8E%E6%97%A5%E5%BF%97%E5%88%B6%E5%BA%A6%E8%AE%B0%E5%BD%95.md)（共享说明与源 Comments 保留在该主记录）。

## 当前需求与范围
  - [x] [DOC-A-002] 创建根目录 `README.md`
    - [x] 说明项目是什么
    - [x] 说明 Phase 1（v0.1）当前能力与非目标范围
    - [x] 索引 `AGENTS.md`、`REQUIREMENTS.md`、`DESIGN.md` 和 `agent-log/`
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


### 2026-10-24 07:13:06 UTC — Agent（纠正迁移命名）

根据用户确认的原语言与下划线命名规则整理本记录；类型与原 ID 保留在 properties，原始勾选、取消／延后标记及验收边界照录。 本源文档按独立目标拆为 3 份，原始 Comments 与共同说明见上方主记录链接。 未核实本任务实际实施提交，省略文件名版本后缀；未执行代码、构建或用户验收，未提交或推送。
