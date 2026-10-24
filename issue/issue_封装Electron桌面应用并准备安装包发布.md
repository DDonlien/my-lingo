# 封装Electron桌面应用并准备安装包发布

- ID：`BACK-A-009`。
- 类型：`CI`。
- 状态：进行中（本任务原文同时包含已完成与未完成项；未由历史日志新增完成勾选）。
- 版本管理：Git。
- 实施提交：未核实（现有记录未提供可直接对应本任务的实际实施提交；来源快照、当前 HEAD 与文档迁移提交不代替任务实施版本）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / 阶段 2：后续 Backlog / BACK-A：格式与工作流扩展。
- 原稳定 ID：`BACK-A-001`, `BACK-A-002`, `BACK-A-009`, `BACK-A-003`, `BACK-A-004`, `BACK-A-005`, `BACK-A-006`, `BACK-A-007`, `BACK-A-008`；不改写或重编号这些既有 ID。
- 来源汇总状态：进行中（原文同时包含已完成与未完成项）。
- 原迁移记录 ID：`BACK-A-001`。
- 本文件原任务 ID：`BACK-A-009`。
- 原需求标题：BACK-A：格式与工作流扩展。
- 原迁移文件：`issue/issue-BACK-A-001-CI-project-goal-versioncontrolid.md`（重命名前路径，仅用于历史追溯）。
- 同源任务：[支持Excel翻译文件导入与导出](issue_%E6%94%AF%E6%8C%81Excel%E7%BF%BB%E8%AF%91%E6%96%87%E4%BB%B6%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%AF%BC%E5%87%BA.md)、[为本地化翻译提供术语库支持](issue_%E4%B8%BA%E6%9C%AC%E5%9C%B0%E5%8C%96%E7%BF%BB%E8%AF%91%E6%8F%90%E4%BE%9B%E6%9C%AF%E8%AF%AD%E5%BA%93%E6%94%AF%E6%8C%81.md)、[为本地化翻译提供翻译记忆支持](issue_%E4%B8%BA%E6%9C%AC%E5%9C%B0%E5%8C%96%E7%BF%BB%E8%AF%91%E6%8F%90%E4%BE%9B%E7%BF%BB%E8%AF%91%E8%AE%B0%E5%BF%86%E6%94%AF%E6%8C%81.md)、[记录待细化的myLingo复杂质量检查需求](issue_%E8%AE%B0%E5%BD%95%E5%BE%85%E7%BB%86%E5%8C%96%E7%9A%84myLingo%E5%A4%8D%E6%9D%82%E8%B4%A8%E9%87%8F%E6%A3%80%E6%9F%A5%E9%9C%80%E6%B1%82.md)、[提供plural-forms高级编辑能力](issue_%E6%8F%90%E4%BE%9Bplural-forms%E9%AB%98%E7%BA%A7%E7%BC%96%E8%BE%91%E8%83%BD%E5%8A%9B.md)、[对比Git差异与外部翻译文件修改](issue_%E5%AF%B9%E6%AF%94Git%E5%B7%AE%E5%BC%82%E4%B8%8E%E5%A4%96%E9%83%A8%E7%BF%BB%E8%AF%91%E6%96%87%E4%BB%B6%E4%BF%AE%E6%94%B9.md)、[扩展JSON-i18next-XLIFF翻译文件支持](issue_%E6%89%A9%E5%B1%95JSON-i18next-XLIFF%E7%BF%BB%E8%AF%91%E6%96%87%E4%BB%B6%E6%94%AF%E6%8C%81.md)、[保留批量AI建议的原始后续待办](issue_%E4%BF%9D%E7%95%99%E6%89%B9%E9%87%8FAI%E5%BB%BA%E8%AE%AE%E7%9A%84%E5%8E%9F%E5%A7%8B%E5%90%8E%E7%BB%AD%E5%BE%85%E5%8A%9E.md)。
- 共同约束与完整历史：[支持Excel翻译文件导入与导出](issue_%E6%94%AF%E6%8C%81Excel%E7%BF%BB%E8%AF%91%E6%96%87%E4%BB%B6%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%AF%BC%E5%87%BA.md)（共享说明与源 Comments 保留在该主记录）。

## 当前需求与范围
- [x] [BACK-A-009] 完成 Electron 桌面封装与安装包发布 #P2
  - [x] 定义桌面安装包构建命令：`npm run package:electron` 与 `npm run dist:electron`
  - [x] 验证桌面文件对话框、受控读写和项目恢复：已通过 Electron main/preload 受控 API 编译与 unpacked 应用打包验证，实际交互可用 `npm run dev:electron` 或 `release/mac-arm64/myLingo.app` 复测
  - [x] 定义桌面版本发布流程：先运行 `npm test`、`npm run build`，再运行 `npm run dist:electron` 生成 `release/` 产物
  - [x] 补充应用图标：原始 1254x1254 源图存于 `assets/icon-source.png`，`assets/icon-{16,32,48,64,128,180,192,256,512,1024}.png` 覆盖常用尺寸，`package.json` 的 `build.icon` 指向 1024 版本，electron-builder 自动为各平台生成 .icns / .ico
  - [ ] 补充 Developer ID 证书与 notarization 配置（macOS 正式发布前）

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments


### 2026-10-24 07:13:06 UTC — Agent（纠正迁移命名）

根据用户确认的原语言与下划线命名规则整理本记录；类型与原 ID 保留在 properties，原始勾选、取消／延后标记及验收边界照录。 本源文档按独立目标拆为 9 份，原始 Comments 与共同说明见上方主记录链接。 未核实本任务实际实施提交，省略文件名版本后缀；未执行代码、构建或用户验收，未提交或推送。
