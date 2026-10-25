---
title: 将myLingo介绍网站接入构建预览与Pages部署
id: SITE-B-000
type: OPS
status: 进行中（原文同时包含已完成与未完成项）。
版本管理: Git。
来源: '`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / Phase 2：品牌网站与产品落地页 #P2 / SITE-B：网站构建与部署。'
原稳定 ID: '`SITE-B-000`, `SITE-B-001`, `SITE-B-002`, `SITE-B-003`, `SITE-B-004`；不改写或重编号这些既有 ID。'
原需求标题: SITE-B：网站构建与部署。
原迁移文件: '`issue/issue-SITE-B-000-OPS-website-build-deployment-versioncontrolid.md`（重命名前路径，仅用于历史追溯）。'
updated-time: '2026-10-24T16:22:34+00:00'
---

# Description

## 当前需求与范围

- [x] [SITE-B-000] 集成网站到现有构建与部署流程 #epic #P2
  - [x] [SITE-B-001] 保持现有应用构建不变：`npm run build` 仍输出应用到 `dist/`
  - [x] [SITE-B-002] 网站构建脚本
    - [x] 新增 `npm run build:site`：将 `website/` 内容处理并输出到 `dist-site/` 或合并到 `dist/`
    - [x] 网站构建流程复制必要品牌资产（favicon、图标）到输出目录
  - [x] [SITE-B-003] GitHub Actions 部署策略（二选一或组合）
    - [x] 方案 A：应用与网站共存——`dist/` 根目录放网站入口，`dist/app/` 子目录放应用；Vite 应用 base 使用 `/my-lingo/app/`，网站首页提供 "Launch App" 入口跳转
    - [ ] 方案 B：独立分支/仓库部署——网站单独部署到 `ddonlien.github.io` 根域名，应用保持 `/my-lingo/` 子路径不变
    - [x] 选定方案后更新 `.github/workflows/deploy-pages.yml` 和 `ts/vite.config.ts`
  - [x] [SITE-B-004] 本地预览网站
    - [x] 新增 `npm run dev:site`：使用轻量静态服务器（如 `npx serve website/` 或 Vite 的 `publicDir` 模式）本地预览网站

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

# Comments

## 20261023-174433_Agent

原记录标题：2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

原记录未提供完整 Agent / 模型详情及原执行会话链接，未补造。

## 20261024-071306_Agent

原记录标题：2026-10-24 07:13:06 UTC — Agent（纠正迁移命名）

根据用户确认的原语言与下划线命名规则整理本记录；类型与原 ID 保留在 properties，原始勾选、取消／延后标记及验收边界照录。 未核实本任务实际实施提交，省略文件名版本后缀；未执行代码、构建或用户验收，未提交或推送。

原记录未提供完整 Agent / 模型详情及原执行会话链接，未补造。

## 20261024-162234_Codex

按用户最新手写模板迁移属性和正文结构，保留任务语义、来源、原始状态及历史内容；本次未重新执行业务验收。

原版本关联记录（照录来源，不将本次文档迁移提交当作业务实施提交）：
- 实施提交：未核实（现有记录未提供可直接对应本任务的实际实施提交；来源快照、当前 HEAD 与文档迁移提交不代替任务实施版本）。

本次执行环境未提供具体模型标识，未补造 Model-Detail。

[本次文档迁移对话](codex://threads/01a157b3-610c-73b4-ae06-163c0f8490d3)
