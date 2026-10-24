# 搭建可切换中英文并演示核心特性的myLingo介绍网站

- ID：`SITE-A-000`。
- 类型：`DOC`。
- 状态：已完成（沿用原需求记录；本轮未重新执行产品验收）。
- 版本管理：Git。
- 实施提交：未核实（现有记录未提供可直接对应本任务的实际实施提交；来源快照、当前 HEAD 与文档迁移提交不代替任务实施版本）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / Phase 2：品牌网站与产品落地页 #P2 / SITE-A：myLingo 介绍网站（Marketing Site / Landing Page）。
- 原稳定 ID：`SITE-A-000`, `SITE-A-001`, `SITE-A-002`, `SITE-A-003`, `SITE-A-004`, `SITE-A-005`；不改写或重编号这些既有 ID。
- 原需求标题：SITE-A：myLingo 介绍网站（Marketing Site / Landing Page）。
- 原迁移文件：`issue/issue-SITE-A-000-DOC-mylingo-website-marketing-site-landing-versioncontrolid.md`（重命名前路径，仅用于历史追溯）。

## 当前需求与范围

- [x] [SITE-A-000] 搭建独立介绍网站 #epic #P2
  - [x] [SITE-A-001] 创建 `website/` 目录作为静态站点源码根目录
    - [x] 使用纯静态 HTML + CSS + JS，不引入额外构建工具，保持轻量可维护
    - [x] 视觉风格沿用 myLingo 品牌：蓝紫主色 `#635BFF`、深色背景 `#1F1742`、现代极简、参考 Linear 气质
    - [x] 响应式布局，适配桌面端与移动端
  - [x] [SITE-A-002] 网站核心区块
    - [x] 7 个卖点纵向平铺：矩阵编辑、导入合并、PO 元数据保真、本地优先、AI 建议、标签系统、批量编辑
    - [x] 每个卖点包含编号、标题、描述和 CSS 动画演示面板
    - [x] 演示面板 hover 时触发动画，展示该特性的动态效果
    - [x] 演示内容支持多语言切换（中文/英文）
    - [x] Hero 区保留：产品名称、一句话定位、双 CTA 按钮
    - [x] 使用方式区：Web 浏览器版与 Electron 桌面版
    - [x] 技术亮点区：本地优先、PO 元数据保真、Obsidian 风格标签、批量查找替换、撤销重做
    - [x] 文档与社区入口：链接到 README、GitHub 仓库、问题反馈（Issues）
    - [x] Footer：版权、GitHub 链接、许可证信息
  - [x] [SITE-A-003] 品牌资产复用
    - [x] 网站 favicon 复用 `public/favicon.ico` 与 `public/apple-touch-icon.png`
    - [x] 品牌图标复用 `assets/icon-*.png` 系列
    - [x] 网站 manifest / theme-color 与主应用保持一致 `#1F1742`
  - [x] [SITE-A-004] 多语言支持（网站界面）
    - [x] 网站提供英文（默认）与简体中文两种语言切换
    - [x] 语言切换使用轻量按钮组，不引入复杂 i18n 框架；内容以静态文案方式维护
  - [x] [SITE-A-005] SEO 与分享优化
    - [x] 每个语言版本包含独立的 `<title>`、`<meta name="description">`、Open Graph 标签
    - [x] 提供 `og:image` 使用品牌图标或网站截图

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments


### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 2026-10-24 07:13:06 UTC — Agent（纠正迁移命名）

根据用户确认的原语言与下划线命名规则整理本记录；类型与原 ID 保留在 properties，原始勾选、取消／延后标记及验收边界照录。 未核实本任务实际实施提交，省略文件名版本后缀；未执行代码、构建或用户验收，未提交或推送。
