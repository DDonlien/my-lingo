---
title: 支持Excel翻译文件导入与导出
id: BACK-A-001
type: CI
status: 待处理（本任务原文未完成项保持未勾选；取消、阻塞和延后标记照录）。
版本管理: Git。
来源: '`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / 阶段 2：后续 Backlog / BACK-A：格式与工作流扩展。'
原稳定 ID: '`BACK-A-001`, `BACK-A-002`, `BACK-A-009`, `BACK-A-003`, `BACK-A-004`, `BACK-A-005`, `BACK-A-006`, `BACK-A-007`, `BACK-A-008`；不改写或重编号这些既有 ID。'
来源汇总状态: 进行中（原文同时包含已完成与未完成项）。
原迁移记录 ID: '`BACK-A-001`。'
本文件原任务 ID: '`BACK-A-001`。'
原需求标题: BACK-A：格式与工作流扩展。
原迁移文件: '`issue/issue-BACK-A-001-CI-project-goal-versioncontrolid.md`（重命名前路径，仅用于历史追溯）。'
同源任务: '[为本地化翻译提供术语库支持](issue_%E4%B8%BA%E6%9C%AC%E5%9C%B0%E5%8C%96%E7%BF%BB%E8%AF%91%E6%8F%90%E4%BE%9B%E6%9C%AF%E8%AF%AD%E5%BA%93%E6%94%AF%E6%8C%81.md)、[封装Electron桌面应用并准备安装包发布](issue_%E5%B0%81%E8%A3%85Electron%E6%A1%8C%E9%9D%A2%E5%BA%94%E7%94%A8%E5%B9%B6%E5%87%86%E5%A4%87%E5%AE%89%E8%A3%85%E5%8C%85%E5%8F%91%E5%B8%83.md)、[为本地化翻译提供翻译记忆支持](issue_%E4%B8%BA%E6%9C%AC%E5%9C%B0%E5%8C%96%E7%BF%BB%E8%AF%91%E6%8F%90%E4%BE%9B%E7%BF%BB%E8%AF%91%E8%AE%B0%E5%BF%86%E6%94%AF%E6%8C%81.md)、[记录待细化的myLingo复杂质量检查需求](issue_%E8%AE%B0%E5%BD%95%E5%BE%85%E7%BB%86%E5%8C%96%E7%9A%84myLingo%E5%A4%8D%E6%9D%82%E8%B4%A8%E9%87%8F%E6%A3%80%E6%9F%A5%E9%9C%80%E6%B1%82.md)、[提供plural-forms高级编辑能力](issue_%E6%8F%90%E4%BE%9Bplural-forms%E9%AB%98%E7%BA%A7%E7%BC%96%E8%BE%91%E8%83%BD%E5%8A%9B.md)、[对比Git差异与外部翻译文件修改](issue_%E5%AF%B9%E6%AF%94Git%E5%B7%AE%E5%BC%82%E4%B8%8E%E5%A4%96%E9%83%A8%E7%BF%BB%E8%AF%91%E6%96%87%E4%BB%B6%E4%BF%AE%E6%94%B9.md)、[扩展JSON-i18next-XLIFF翻译文件支持](issue_%E6%89%A9%E5%B1%95JSON-i18next-XLIFF%E7%BF%BB%E8%AF%91%E6%96%87%E4%BB%B6%E6%94%AF%E6%8C%81.md)、[保留批量AI建议的原始后续待办](issue_%E4%BF%9D%E7%95%99%E6%89%B9%E9%87%8FAI%E5%BB%BA%E8%AE%AE%E7%9A%84%E5%8E%9F%E5%A7%8B%E5%90%8E%E7%BB%AD%E5%BE%85%E5%8A%9E.md)。'
updated-time: '2026-10-24T16:22:34+00:00'
---

# Description

## 当前需求与范围

- [ ] [BACK-A-001] 支持 Excel 导入导出 #P2

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

# Comments

## 20261023-174433_Agent

原记录标题：2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

原记录未提供完整 Agent / 模型详情及原执行会话链接，未补造。

## 历史记录-时间未记录

原记录标题：20260604104439-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260604104439-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

整理资产：
- 根目录保留所有必须的内容
- 所有ts的内容创建一个/ts文件夹往里放
- 所有electron的内容创建一个/electron文件夹往里放
然后完成P2

#### 完成工作

- 根目录保留必要配置、入口、文档、fixtures、GitHub Actions、package 与 tsconfig。
- 新增 `/ts` 作为 TypeScript / React / core / adapter / tests 的统一目录。
- 新增 `/electron` 作为 Electron main/preload 的统一目录。
- P2 Electron 封装完成：`npm run package:electron` 生成 unpacked app，`npm run dist:electron` 生成 `release/` 下的平台分发产物。

#### 更新的需求 ID

- `[BACK-A-009]` 完成 Electron 桌面封装与安装包发布：已勾选。

#### 验证方式

- `npm test`：通过，1 个测试文件，28 个测试通过。
- `npm run build`：通过，Vite 产物和 Electron TS 编译成功。
- `npm run package:electron`：通过，生成 `release/mac-arm64/Lingrid.app`。
- `npm run dist:electron`：通过，生成 `release/Lingrid-0.1.0-arm64.dmg`、`release/Lingrid-0.1.0-arm64-mac.zip` 及 blockmap。

#### 备注

- `electron-builder` 提示当前使用默认 Electron 图标，并因未配置 notarization 跳过 macOS notarization；正式发布前需补充应用图标、Developer ID 证书与 notarization 配置。
- npm 输出 `Unknown user config "home"` warning，未影响安装、测试、构建或打包结果。

原记录未提供完整 Agent / 模型详情及原执行会话链接，未补造。

## 20261024-071306_Agent

原记录标题：2026-10-24 07:13:06 UTC — Agent（纠正迁移命名）

根据用户确认的原语言与下划线命名规则整理本记录；类型与原 ID 保留在 properties，原始勾选、取消／延后标记及验收边界照录。 本源文档按独立目标拆为 9 份，原始 Comments 完整留在本主记录。 未核实本任务实际实施提交，省略文件名版本后缀；未执行代码、构建或用户验收，未提交或推送。

原记录未提供完整 Agent / 模型详情及原执行会话链接，未补造。

## 20261024-162234_Codex

按用户最新手写模板迁移属性和正文结构，保留任务语义、来源、原始状态及历史内容；本次未重新执行业务验收。

原版本关联记录（照录来源，不将本次文档迁移提交当作业务实施提交）：
- 实施提交：未核实（现有记录未提供可直接对应本任务的实际实施提交；来源快照、当前 HEAD 与文档迁移提交不代替任务实施版本）。

本次执行环境未提供具体模型标识，未补造 Model-Detail。

[本次文档迁移对话](codex://threads/01a157b3-610c-73b4-ae06-163c0f8490d3)
