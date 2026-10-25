---
title: 统一myLingo品牌命名并兼容旧Lingrid项目与偏好
id: FOUND-A-005
type: DOC
status: 已完成（仅沿用本任务原始勾选；本轮未重新执行产品验收）。
版本管理: Git。
来源: '`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / 阶段 0：项目协作与产品定义 / FOUND-A：产品边界。'
原稳定 ID: '`FOUND-A-000`, `FOUND-A-001`, `FOUND-A-002`, `FOUND-A-003`, `FOUND-A-004`, `FOUND-A-005`；不改写或重编号这些既有 ID。'
来源汇总状态: 已完成（沿用原需求记录；本轮未重新执行产品验收）。
原迁移记录 ID: '`FOUND-A-000`。'
本文件原任务 ID: '`FOUND-A-005`。'
原需求标题: FOUND-A：产品边界。
原迁移文件: '`issue/issue-FOUND-A-000-DOC-product-versioncontrolid.md`（重命名前路径，仅用于历史追溯）。'
同源任务: '[定义myLingo本地化编辑器定位与首版范围](issue_%E5%AE%9A%E4%B9%89myLingo%E6%9C%AC%E5%9C%B0%E5%8C%96%E7%BC%96%E8%BE%91%E5%99%A8%E5%AE%9A%E4%BD%8D%E4%B8%8E%E9%A6%96%E7%89%88%E8%8C%83%E5%9B%B4.md)。'
共同约束与完整历史: '[定义myLingo本地化编辑器定位与首版范围](issue_%E5%AE%9A%E4%B9%89myLingo%E6%9C%AC%E5%9C%B0%E5%8C%96%E7%BC%96%E8%BE%91%E5%99%A8%E5%AE%9A%E4%BD%8D%E4%B8%8E%E9%A6%96%E7%89%88%E8%8C%83%E5%9B%B4.md)（共享说明与源 Comments 保留在该主记录）。'
updated-time: '2026-10-24T16:22:34+00:00'
---

# Description

## 当前需求与范围
  - [x] [FOUND-A-005] 将项目与产品统一到 `my` 系列命名 #brand #P0
    - [x] 仓库、目录、npm package 与 GitHub Pages slug 使用 `my-lingo`
    - [x] 应用、安装包、网页、PWA、文档与诊断信息使用产品名 `myLingo`
    - [x] Electron app ID 使用 `com.ddonlien.my-lingo`
    - [x] TypeScript 项目类型与 Electron preload bridge 使用 `MyLingoProject` / `window.myLingo`
    - [x] 版本由 `0.1.1` 升级为 `0.1.2`，并同步 package 与 UI 展示
    - [x] 保留原 Lingrid 本地偏好、最近项目与 `.lingrid.json` 项目文件的兼容迁移

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

# Comments

## 20261024-071306_Agent

原记录标题：2026-10-24 07:13:06 UTC — Agent（纠正迁移命名）

根据用户确认的原语言与下划线命名规则整理本记录；类型与原 ID 保留在 properties，原始勾选、取消／延后标记及验收边界照录。 本源文档按独立目标拆为 2 份，原始 Comments 与共同说明见上方主记录链接。 未核实本任务实际实施提交，省略文件名版本后缀；未执行代码、构建或用户验收，未提交或推送。

原记录未提供完整 Agent / 模型详情及原执行会话链接，未补造。

## 20261024-162234_Codex

按用户最新手写模板迁移属性和正文结构，保留任务语义、来源、原始状态及历史内容；本次未重新执行业务验收。

原版本关联记录（照录来源，不将本次文档迁移提交当作业务实施提交）：
- 实施提交：未核实（现有记录未提供可直接对应本任务的实际实施提交；来源快照、当前 HEAD 与文档迁移提交不代替任务实施版本）。

本次执行环境未提供具体模型标识，未补造 Model-Detail。

[本次文档迁移对话](codex://threads/01a157b3-610c-73b4-ae06-163c0f8490d3)
