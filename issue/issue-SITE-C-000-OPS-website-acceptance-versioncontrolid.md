# SITE-C：网站验收标准

- ID：`SITE-C-000`。
- 类型：`OPS`。
- 状态：进行中（原文同时包含已完成与未完成项）。
- 版本管理标识：`versioncontrolid`（含义待定义，不推断为 commit、branch 或 change）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / Phase 2：品牌网站与产品落地页 #P2 / SITE-C：网站验收标准。
- 原稳定 ID：`SITE-C-000`, `SITE-C-001`, `SITE-C-002`, `SITE-C-003`, `SITE-C-004`, `SITE-C-005`, `SITE-C-006`；不改写或重编号这些既有 ID。

## 当前需求与范围

- [x] [SITE-C-000] 网站质量验收 #qa #P2
  - [x] [SITE-C-001] 网站在桌面端（Chrome、Firefox、Safari、Edge）正常显示，无布局错位
  - [x] [SITE-C-002] 网站在移动端（iOS Safari、Android Chrome）正常显示，触控友好
  - [x] [SITE-C-003] 所有 CTA 按钮链接有效：在线试用指向应用地址、GitHub 指向仓库、下载指向 Release 页
  - [x] [SITE-C-004] 语言切换功能正常，切换后文案、标题、OG 标签对应更新
  - [ ] [SITE-C-005] Lighthouse 性能评分 ≥ 80，可访问性评分 ≥ 90
  - [x] [SITE-C-006] 构建与部署流程通过 GitHub Actions 验证

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments

### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。
