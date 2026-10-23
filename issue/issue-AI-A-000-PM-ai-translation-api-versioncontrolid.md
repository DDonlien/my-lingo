# AI-A：轻量 AI / 翻译 API 建议

- ID：`AI-A-000`。
- 类型：`PM`。
- 状态：进行中（原文同时包含已完成与未完成项）。
- 版本管理标识：`versioncontrolid`（含义待定义，不推断为 commit、branch 或 change）。
- 来源：`REQUIREMENTS.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`；标题路径：myLingo 需求追踪 / Phase 1：v0.1 最小可用编辑器 / AI-A：轻量 AI / 翻译 API 建议。
- 原稳定 ID：`AI-A-000`, `AI-A-001`, `AI-A-002`, `AI-A-003`, `AI-A-004`, `AI-A-005`, `AI-A-006`, `AI-A-007`, `AI-A-008`, `AI-A-009`, `AI-A-010`, `AI-A-011`, `AI-A-012`, `AI-A-013`, `AI-A-014`, `AI-A-015`, `AI-A-016`, `AI-A-017`, `AI-A-018`, `AI-A-020`, `AI-A-021`, `AI-A-022`, `AI-A-023`, `AI-A-024`, `AI-A-025`, `AI-A-030`, `AI-A-031`, `AI-A-032`, `AI-A-033`, `AI-A-034`, `AI-A-035`, `AI-A-050`, `AI-A-051`, `AI-A-052`, `AI-A-053`, `AI-A-054`, `AI-A-055`, `AI-A-056`, `AI-A-057`, `AI-A-058`, `AI-A-059`, `AI-A-060`, `AI-A-040`, `AI-A-041`, `AI-A-042`, `AI-A-043`, `AI-A-044`, `AI-A-045`, `AI-A-046`, `AI-A-061`, `AI-A-062`, `AI-A-063`, `AI-A-070`, `AI-A-071`, `AI-A-072`, `AI-A-073`, `AI-A-074`, `AI-A-080`, `AI-A-081`, `AI-A-082`, `AI-A-083`, `AI-A-084`, `AI-A-090`, `AI-A-091`, `AI-A-092`, `AI-A-093`, `AI-A-094`, `AI-A-095`；不改写或重编号这些既有 ID。

## 当前需求与范围

- [x] [AI-A-000] 实现当前单元格翻译建议 #feature #P1
  - [x] [AI-A-001] 配置 API endpoint
  - [x] [AI-A-002] 配置 API key
  - [x] [AI-A-003] 配置 model
  - [x] [AI-A-004] 配置 prompt template
  - [x] [AI-A-005] 点击当前单元格生成翻译建议
  - [x] [AI-A-006] 显示建议结果
  - [x] [AI-A-007] 用户点击后应用建议到当前单元格
  - [x] [AI-A-008] 不自动覆盖已有译文
  - [x] [AI-A-009] API key 不写入日志
  - [x] [AI-A-010] strip reasoning 标签：reasoning 类模型（MiniMax-M2.7、DeepSeek-R1、o1/o3 等）的 `choices[0].message.content` 会包含 `<think>...</think>` 段落，应用前必须 strip，否则会污染 cell 与 `.po` 写入
    - [x] `ts/renderer/providers/openai-compatible.ts` 暴露 `stripThinkTags` 纯函数
    - [x] `generateSuggestion` 走 OpenAI 兼容 provider 时调用 strip，结果再 setSuggestion
    - [x] strip 命中时通过 `appendDiagnostic("ai.stripped_think", ...)` 留痕，不记录译文
    - [x] `ts/tests/providers.test.ts` 覆盖：单 think 块 / 多 think 块 / 无 think / 全 think fallback / 全空白
  - [x] [AI-A-011] 支持 provider 切换 #feature #P1
    - [x] `AiSettings` 加 `provider: "openai-compatible" | "deepl"` 字段
    - [x] AI 设置 Modal 顶部加 provider radio：`OpenAI 兼容 | DeepL`
    - [x] 切换 provider 时自动切显示字段：DeepL 模式隐藏 model 与 prompt
    - [x] DeepL 模式显示 region 选择（免费版 / 专业版），切换时自动填 endpoint
    - [x] `generateSuggestion` 按 provider 分发到对应适配器
    - [x] 保持现状：`apiKey` 仍只活在浏览器内存，不写入项目 JSON
  - [x] [AI-A-012] DeepL provider #feature #P1
    - [x] `ts/renderer/providers/deepl.ts` 实现 DeepL `/v2/translate` 协议：form-urlencoded、`DeepL-Auth-Key` header、响应 `{ translations: [{ detected_source_language, text }] }`
    - [x] `toDeepLTargetLanguage` 映射常见 PO 语言代码到 DeepL 期望大写（zh-CN→ZH-HANS、en-GB→EN-GB、pt-BR→PT-BR 等）
    - [x] `requestDeepLTranslation` 返回 `{ text, detectedSource? }`
    - [x] `ts/tests/providers.test.ts` 覆盖 DeepL 语言代码映射（zh / ja / en / pt / 大小写 / 空白 / 未知 fallback）
  - [x] [AI-A-013] AI 设置弹窗按视觉规范优化 #ui #P1
    - [x] provider 使用低噪声分段卡片，显示服务说明而不是裸 radio
    - [x] OpenAI 兼容与 DeepL 配置按卡片分区展示，避免表单堆叠感
    - [x] DeepL / DeepLX 服务选择沿用同一分段控件，并显示对应 endpoint
    - [x] prompt template 使用全宽输入区域，并说明 `{{language}}` 与 `{{source}}` 占位符
    - [x] 设置内容超过视口高度时，弹窗内容区可上下滚动，标题栏保持可见
  - [x] [AI-A-014] AI 翻译链路全量留痕到诊断日志 #feature #P1
    - [x] `providers/openai-compatible.ts` 与 `providers/deepl.ts` 引入 `ProviderHttpError`，非 2xx 响应抛带 `status` / `contentType` / `bodyPreview` 的 Error
    - [x] `requestAiTranslation` 接入诊断日志：每次调用打 `ai.request.start` / `ai.request.success` / `ai.request.error` 或 `deepl.request.start` / `deepl.request.success` / `deepl.request.error`
    - [x] 日志详情记录 endpoint / model / target_lang / sourceLength / 响应长度 / 检测到的源语言；**不**记录 `apiKey` / 译文正文
    - [x] 失败时 `extractServerMessage` 解析 DeepL / OpenAI 错误体的 `message` 字段，notice 显示 `HTTP <status>: <server message>` 摘要
    - [x] `generateBatchAi` 逐条失败时额外写 `ai.batch.item.error`，不再只 `failed += 1`
    - [x] body 预览截断到 600 字符并附 `truncated` 标记，避免诊断日志被巨大错误体撑爆
    - [x] `ts/tests/providers.test.ts` 新增 7 个用例：OpenAI 2xx / 4xx / 大 body 截断 + DeepL 2xx / 403 / 400 target_lang
  - [x] [AI-A-015] AI 设置 modal 体感修复（复制 + 持久化真值）#bug #P1
    - [x] `AI_DEFAULT.endpoint` / `AI_DEFAULT.model` 改为空字符串，避免初始默认值假象；用户手动填的 endpoint / model 切换预设时**不再被占位值覆盖**
    - [x] `selectOpenAiPreset` / `selectAnthropicPreset` 增加"endpoint 是否仍是上一预设占位"判断：仅当 endpoint 仍为占位（或空）时才覆盖；用户已填的真值保留
    - [x] 三个密码 input（OpenAI 兼容 / Anthropic / DeepL）加 `onCopy` 与 `onCut` 主动写 clipboardData，绕过浏览器对 password 字段的 Ctrl-C 默认安全策略
    - [x] AI 设置 modal 顶部加 "已记住：provider · endpoint · model · key ✓" 状态条，让用户能直观看到 localStorage 里的真值 #cut：2026-06-09 用户反馈该行冗余，改为仅保存时写诊断日志
    - [x] `ts/tests/providers.test.ts` 新增 3 个用例：AI_DEFAULT.endpoint 空 / AI_DEFAULT.model 空 / loadAiSettings 空存储返回空 endpoint+model
  - [x] [AI-A-016] 切 provider 后 form 字段未切回 #bug #P1
    - [x] 新建 `ts/renderer/providers/placeholder-detect.ts`，导出 `isKnownPlaceholderEndpoint` / `isKnownPlaceholderModel` 纯函数
    - [x] 占位判断覆盖**所有 provider** 的 preset.endpoint / modelPlaceholder + DeepL / DeepLX endpoint，不再只比对"上一预设"
    - [x] 修复"DeepL 自动填的 endpoint 切回 OpenAI 时仍残留"——DeepL endpoint 现在被识别成占位 → 切回 OpenAI 时覆盖成 OpenAI preset 默认
    - [x] DeepL radio onChange 也走同样的占位判断：当前 endpoint 是占位时切到 DeepL 才覆盖成 DeepL 默认；用户已填的真 endpoint 保留
    - [x] `ts/tests/providers.test.ts` 新增 7 个用例：endpoint 空 / undefined / null / DeepL / OpenAI preset / 用户真值 / model 同款
  - [x] [AI-A-017] 修复 AI 设置 provider / preset 配置串值 #bug #P1
    - [x] `AiSettings` 增加 `profiles`，按 `provider:preset-or-region` 保存独立 endpoint、model、apiKey 和 prompt
    - [x] 切换 OpenAI 兼容预设前先保存当前预设配置，切换后加载目标预设自己的配置；没有保存过才使用该预设默认值
    - [x] DeepL / DeepLX 与 OpenAI 兼容预设互相切换时不再共用同一组 endpoint、model 和 apiKey
    - [x] 旧版 localStorage 没有 `profiles` 时仍可加载，首次切换后自动补 profile
    - [x] `ts/tests/providers.test.ts` 新增回归测试：MiniMax 自定义 endpoint 不会显示到 OpenAI；DeepL endpoint 不会显示到 OpenAI
  - [x] [AI-A-018] AI 设置草稿保存与当前接口提示 #bug #P1
    - [x] AI 设置 modal 改为草稿态：输入、切 provider 或切 tab 不立即写入 localStorage，也不改变当前 AI 调用配置
    - [x] “完成”按钮在草稿与已保存配置不一致时显示橙色提示点；点击后才保存当前激活 tab 的 provider / preset / endpoint / model / prompt
    - [x] 点击 X 或遮罩关闭 AI 设置 modal 时丢弃草稿，恢复到打开 modal 前的已保存配置
    - [x] 保存 AI 设置时写入诊断日志 `ai.settings.save`，记录 provider / preset / endpoint / model / 是否有 key / prompt 长度，不记录 API key
    - [x] AI 建议区显示当前正在使用的接口或模型小字：OpenAI 兼容显示 preset + model，DeepL 显示 DeepL 或 DeepLX
    - [x] DeepL provider 选项由 Free / Pro 改为 DeepL / DeepLX，并兼容旧 localStorage 的 `free` / `pro` 值迁移到 DeepL
    - [x] `requestDeepLTranslation` 支持 DeepLX JSON 请求与常见 `data` / `translation` / `text` 响应格式
    - [x] `ts/tests/providers.test.ts` 增加旧 DeepL region 迁移与 DeepLX JSON 协议解析用例
- [x] [AI-A-020] 扩展 AI provider 设置结构 #feature #P1
  - [x] [AI-A-021] 保持顶层 provider 结构：`OpenAI 兼容`、`其他兼容`、`单独 Provider`，其中 `DeepL` 作为单独 Provider 保留
  - [x] [AI-A-022] `OpenAI 兼容` 下提供预设选项，至少覆盖：`OpenAI`、`Kimi / Moonshot`、`MiniMax`、`通义千问 / DashScope`、`豆包 / 火山方舟`、`Gemini`、`Claude OpenAI SDK compatibility`、`自定义 OpenAI 兼容`
    - [x] 每个预设应保存：显示名称、协议类型、默认 endpoint/baseURL、默认 model placeholder、API key placeholder、简短差异说明
    - [x] 预设切换时自动填入 endpoint/baseURL 与 model placeholder，但不覆盖用户已经输入的 API key
    - [x] `Claude OpenAI SDK compatibility` 必须提示：官方说明该兼容层主要用于测试/对比能力，长期生产优先使用 Claude native API
    - [x] MiniMax OpenAI-compatible 默认 endpoint 使用 `https://api.minimaxi.com/v1/chat/completions`
  - [x] [AI-A-023] `其他兼容` 下提供非 OpenAI 兼容路径，至少预留：`Anthropic / Claude native`、`MiniMax Anthropic-compatible`、`自定义 Anthropic-compatible`
    - [x] 这些路径在未实现 adapter 前应显示“待实现”或禁用状态，不允许用户误以为已经可调用
  - [x] [AI-A-024] provider 展开区沿用顶层 provider 的视觉结构，不再使用原生 radio 或未美化的按钮
  - [x] [AI-A-025] provider 来源调研基准记录：
    - [x] Kimi / Moonshot：官方文档说明支持 OpenAI-compatible HTTP API
    - [x] MiniMax：官方说明同时存在 OpenAI-Compatible API 与 Anthropic-Compatible API
    - [x] 通义千问 / DashScope：阿里云百炼提供 OpenAI 兼容 Chat Completions
    - [x] 豆包 / 火山方舟：火山方舟文档提供兼容 OpenAI SDK 的调用方式
    - [x] Gemini：Google Gemini API 提供 OpenAI compatibility endpoint
    - [x] Claude：Anthropic 提供 OpenAI SDK compatibility，同时也有 Claude native API
- [x] [AI-A-030] 确认 prompt template 变量真实生效 #qa #P1
  - [x] [AI-A-031] `{{language}}` 必须替换为当前目标单元格所在语言列的 language/display label，优先使用用户设置的语言显示名，缺失时使用内部 language id
  - [x] [AI-A-032] `{{source}}` 必须替换为当前行的 source 文本
  - [x] [AI-A-033] 单单元格 AI 建议、多选 AI 翻译、空单元格批量 AI 翻译都必须走同一套变量渲染逻辑
  - [x] [AI-A-034] 增加测试覆盖：不同语言列、不同 source 行、多选/批量场景下 `{{language}}` 与 `{{source}}` 渲染正确
  - [x] [AI-A-035] 默认 prompt 使用游戏本地化语境，要求按源语言游戏行业术语理解并输出自然的玩家可见目标语言译文；新增字母语言大写规范（引用 `{{source}}` 真实值）、间距标点结构保留、半角全角字符规范，以及同源其他语言参考（`{{OtherLan}}: {{OhterContent}}`）
- [x] [AI-A-050] 扩展 prompt template 的同源其他语言参考变量 #feature #P1.5
  - [x] [AI-A-051] 新增 `{{OtherLan}}` 与 `{{OhterContent}}` 变量；注意变量名按用户需求保留拼写 `OhterContent`
  - [x] [AI-A-052] 变量数据来自同一个 source entry 的其他语言单元格：排除当前被翻译/选中的目标语言单元格，排除空译文单元格，并按项目当前语言列顺序排序
  - [x] [AI-A-053] 支持后缀索引语法 `{{OtherLan_1}}`、`{{OhterContent_1}}`、`{{OtherLan_2}}`、`{{OhterContent_2}}` 等；索引从 1 开始，指向排序后第 N 个可用其他语言译文
  - [x] [AI-A-054] 后缀索引缺失对应其他语言时应渲染为空字符串，不抛错，不泄露 undefined/null
  - [x] [AI-A-055] 支持自动聚合语法：当 prompt 中使用无后缀的 `{{OtherLan}}` 与 `{{OhterContent}}` 时，应输出所有可用其他语言参考，并以逗号分隔成 `语言: 内容` 对；例如 EN 目标列为空、同一行 `ZH-HANS = 迷宫`、`KO = 미로` 时，`{{OtherLan}}: {{OhterContent}}` 渲染为 `ZH-HANS: 迷宫,KO: 미로`
  - [x] [AI-A-056] 自动聚合不得包含当前目标语言自身的值，即使该单元格已有草稿或旧译文；不得包含空值语言，以节省上下文
  - [x] [AI-A-057] 单单元格 AI 建议、多选 AI 翻译、空单元格批量 AI 翻译都必须为每个目标单元格独立计算 `OtherLan/OhterContent` 上下文
  - [x] [AI-A-058] 默认 prompt 改为：优先参考 `{{source}}`，同时一并参考同一行已翻译的其他语言内容（使用 `{{OtherLan}}: {{OhterContent}}` 一字排开）后给出目标语言译文
  - [x] [AI-A-059] 增加测试覆盖：索引变量、自动聚合变量、空值排除、当前目标语言排除、列顺序影响，以及批量 AI 时逐单元格上下文独立计算
  - [x] [AI-A-060] 支持语言代码后缀语法 `{{OtherLan_<lang>}}` 与 `{{OhterContent_<lang>}}` #feature #P1.5
    - [x] `<lang>` 为语言代码（如 `EN`、`zh-Hans`、`ja` 等），大小写不敏感匹配
    - [x] 在 `otherLanguages` 中查找语言代码匹配的项，返回对应语言显示名或单元格内容
    - [x] 未匹配到对应语言时渲染为空字符串，不抛错
    - [x] 单单元格 AI 建议、多选 AI 翻译、空单元格批量 AI 翻译均支持此语法
    - [x] 增加测试覆盖：精确匹配、大小写不敏感、未匹配返回空
- [x] [AI-A-040] 支持 AI 翻译批量填充 #feature #P1
  - [x] [AI-A-041] 当没有选中具体翻译单元格时，点击 AI 翻译/生成应翻译全部可编辑的空置译文单元格，并直接写入对应单元格
    - [x] 不处理 source 列、tag 列、不可编辑缺失条目、已有译文的单元格和 `.pot` 只读内容
    - [x] 批量写入后的单元格标记为 changed，便于用户通过已修改状态逐项检查
  - [x] [AI-A-042] 当选中了多个翻译单元格时，点击 AI 翻译/生成应只处理选中范围内可编辑的空置译文单元格，并直接写入对应单元格
    - [x] 选区内已有译文默认不覆盖；后续如需要覆盖，应另设明确开关
  - [x] [AI-A-043] 批量 AI 翻译需要显示进度、成功数、跳过数和失败数；失败不应中断已成功写入的单元格
  - [x] [AI-A-044] 批量 AI 翻译不得把 API key、source 原文或译文内容写入 agent-log 或诊断日志
  - [x] [AI-A-045] 批量 AI 翻译支持限流并发请求；默认可并发处理多个空单元格，成功结果立即写入对应单元格并标记 changed
  - [x] [AI-A-046] 批量 AI 翻译遇到 429 / quota exceeded 时解析 retry 提示，等待后重试，并将后续请求降为单并发，避免继续撞 API 上限
- [x] [AI-A-060] AI 生成任务可取消 #feature #P1.5
  - [x] [AI-A-061] 单条 AI 建议生成中，按钮进入 loading 动态状态，同时按钮保持可点击
    - [x] 点击 loading 状态下的按钮 → 取消当前正在进行的 AI 请求
    - [x] 取消后按钮恢复为普通状态，详情区显示"已取消"提示
    - [x] 取消后不应写入任何内容到单元格
  - [x] [AI-A-062] 全局/批量 AI 翻译生成中，按钮同样进入 loading 动态状态并保持可点击
    - [x] 点击 loading 状态下的按钮 → 取消整个批量 AI 任务
    - [x] 已完成的单元格保留已写入结果，未开始的单元格停止执行
    - [x] 取消后进度区显示"已取消"及已完成/已取消数量统计
  - [x] [AI-A-063] 取消实现需支持 AbortController 或等效机制
    - [x] 单条请求：fetch 传入 signal，取消时 abort 当前 HTTP 请求
    - [x] 批量任务：维护任务级取消标志，取消后阻止后续请求发起，同时 abort 正在进行的请求
    - [x] 取消后 provider 层应正确处理 abort 异常，不抛未捕获错误，不写入诊断日志为错误
- [x] [AI-A-070] AI 批量翻译 RATE 超限自动停止 #feature #P1.5
  - [x] [AI-A-071] RATE 超限响应分类判定
    - [x] 区分"降速（throttled / rate-limited with retry）"与"失败（failed / hard limit exceeded）"两种响应模式
    - [x] 降速判定：API 返回 429 且响应体包含 retry-after 或明确提示降速继续；或 provider 返回非致命 rate limit 提示
    - [x] 失败判定：API 返回 429/403/401 且响应体明确表示 quota 已耗尽、无 retry 可能，或连续请求均返回非 2xx 且无降速语义
  - [x] [AI-A-072] 降速模式处理与橙色日志
    - [x] 判定为降速时，当前请求按现有 retry 逻辑等待后重试，后续请求降为单并发
    - [x] 降速模式下，批量 AI 翻译进度区最下方日志条目使用橙色（orange/warning 色）标识，提示用户当前处于限速状态
    - [x] 降速期间任务继续执行，不自动停止
  - [x] [AI-A-073] 连续失败阈值与自动停止
    - [x] 维护一个连续失败计数器，仅当判定为"失败"（非降速）时递增
    - [x] 连续失败计数达到 10 时，自动停止整个批量 AI 任务
    - [x] 自动停止时，批量 AI 翻译进度区最下方日志条目使用红色（red/error 色）标识，提示"RATE 超限，任务已自动停止"
    - [x] 自动停止后，已完成的单元格保留已写入结果，未开始的单元格停止执行
    - [x] 连续失败计数在任意一次请求成功时重置为 0
  - [x] [AI-A-074] 手动停止的红色日志
    - [x] 用户手动点击取消/停止按钮时，进度区最下方日志条目同样使用红色标识，提示"任务已手动停止"
    - [x] 手动停止不依赖连续失败计数，立即生效
- [ ] [AI-A-080] 支持 AI 批量生成 Source Tag #feature #P1.5
  - [ ] [AI-A-081] 在 Tags 表头右侧增加 AI 生成按钮，点击后对所有空的 Source Tag 单元格进行 AI 生成
    - [ ] 生成依据包括：当前矩阵中已存在的所有 Source Tag（已有标签库）、已填写的翻译内容、Source 表头值、Source 下的代码（资产位置信息）
    - [ ] 生成逻辑优先判定已有 Source Tag 中是否有合适的标签；有则直接沿用，无则生成新 Tag
  - [ ] [AI-A-082] 并发执行：每行单独发起 AI 请求，与翻译批量填充采用相同并发控制策略
    - [ ] 支持限流并发请求，默认可并发处理多个空 Tag 单元格
    - [ ] 遇到 429 / quota exceeded 时解析 retry 提示，等待后重试，并将后续请求降为单并发
  - [ ] [AI-A-083] 支持选中多个 Tag 单元格后点击 AI 生成，仅对选中的空 Tag 单元格执行生成
    - [ ] 选区内已有 Source Tag 默认不覆盖；后续如需要覆盖，应另设明确开关
    - [ ] 批量写入后的单元格标记项目状态为未保存
  - [ ] [AI-A-084] 未选中任何 Tag 单元格时，点击 AI 建议/生成按钮仅生成翻译内容，不影响 Tag
    - [ ] 保持现有 AI 翻译建议行为不变：无选中或选中翻译单元格时，只处理翻译内容
    - [ ] Tag 生成按钮与翻译生成按钮在 UI 上分离，各自独立触发
- [x] [AI-A-090] AI 设置支持多模型并发与失败转发 #feature #P1.5
  - [x] [AI-A-091] AI 设置 TAB 中的模型/接口支持多选
    - [ ] 3 个 AI 设置 TAB（OpenAI 兼容 / 其他兼容 / 单独 Provider）中的模型或接口卡片支持点击选中，再次点击取消选中
    - [ ] 选中的模型/接口保存到 AiSettings 或项目状态，持久化到 localStorage
    - [ ] 视觉反馈：选中状态有清晰标识（如边框高亮、勾选标记），未选中保持常态
  - [x] [AI-A-092] 多选模型后的并发执行与 source 分配策略
    - [ ] 启动 AI 翻译任务时，将待翻译的 source 列表并发分配给所有选中的模型接口执行
    - [ ] 分配原则：同一个 source 优先不分配给不同接口（即一个 source 的所有目标语言单元格尽量由同一模型处理）
    - [ ] 并发优先例外：当选中的 source 数量 N 大于可用模型数量 M（N > M）时，允许一个 source 被拆分到多个模型，以最大化并发吞吐量
    - [ ] 只要选中的 source 数量大于模型数量，就优先按 source 数量均分或轮询分配，确保负载均衡
  - [x] [AI-A-093] 单接口失败时的 prompt 转发与容错
    - [ ] 某个模型接口返回 failed（非降速/非取消）时，将该失败的 prompt 转发到另一个当前可用的选中接口重新执行
    - [ ] 转发时不再遵循 source 分配原则，以完成翻译为优先
    - [ ] 单个接口的失败不造成整个 AI 任务终止；任务继续由其他接口处理剩余 source
    - [ ] 记录失败与转发事件到诊断日志，记录失败接口、目标接口、source 长度，不记录 API key 与译文正文
  - [x] [AI-A-094] 多模型并发任务的手动终止
    - [ ] 保留并兼容现有手动终止 AI 任务的能力（AI-A-060 / AI-A-070）
    - [ ] 手动终止时，所有正在进行的接口请求立即取消，已完成的单元格保留结果，未开始的单元格停止执行
    - [ ] 终止后进度区显示已完成/已取消数量统计，红色日志提示"任务已手动停止"
  - [ ] [AI-A-095] 多模型并发场景下的降速处理（待设计）
    - [ ] 多模型同时遭遇 rate limit / throttling 时的降级策略待定
    - [ ] 需考虑：全局并发降速、单模型独立降速、失败转发时降速模型的避让逻辑

## 检查与验收边界

以上勾选与结果沿用迁移前的当前需求文档；历史记录中的实现、测试、编译、视觉与用户验收彼此独立。本次只迁移文档并检查结构 / 引用，没有重新执行产品构建或用户验收，也没有凭历史日志新增完成勾选。

## Comments

### 2026-10-23 17:44:33 UTC — Agent（文档迁移）

按原有功能 / 工作目标标题拆分需求，保留原 ID、勾选、依赖、最新补充及来源。没有稳定根 ID或旧 ID 在不同上下文重用时，采用由来源路径和标题确定的迁移 Issue ID，原 ID 仍在正文保留。完整旧内容可从来源版本读取；独有未提交内容的版本化副本见迁移映射。

### 20260609154114-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260609154114-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 完成工作

- 在 AI prompt template 需求下新增 `[AI-A-050]` 及子项 `[AI-A-051]` 到 `[AI-A-059]`。

#### 更新的需求 ID

- 新增：`AI-A-050`

#### 验证方式

- `rg` 检查新增需求 ID 与变量名位置。
- `git diff --check`：通过，仅输出工作区换行符转换提示。

#### 备注

- 本次仅录入需求，不修改实现代码。
- 版本更新决策：不更新版本号；本次是未实现需求录入，不改变应用行为。

### 20260609000523-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260609000523-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

```text
检查当前版本的系统，有个问题，ai设置里面，我一旦修改过任何值，切换tab（比如修改了minimax的api地址）以后值会只显示之前修改过的那一组（切到openai还是显示minimax的值）
```

#### 匹配到的需求

- `[AI-A-016]` 切 provider 后 form 字段未切回
- 新增并完成 `[AI-A-017]` 修复 AI 设置 provider / preset 配置串值

#### 完成工作

- 修改 `ts/core/types.ts`：
  - 新增 `AiSettingsProfile`。
  - `AiSettings` 增加可选 `profiles`。
- 修改 `ts/renderer/App.tsx`：
  - 新增 profile key、保存、默认值、加载和切换 helper。
  - 导出 `switchAiSettingsProfile()` 供单测覆盖。
  - provider / preset / DeepL region 切换统一使用 profile 切换。
- 修改 `ts/tests/providers.test.ts`：
  - 新增 2 个 AI settings provider profile 回归测试。
- 修改 `REQUIREMENTS.md`：
  - 新增并勾选 `[AI-A-017]`。

#### 更新的需求 ID

- `[AI-A-017]`

#### 验证方式

- `npm test`：通过，3 个测试文件，68 个测试。
- `npm run build`：通过，包含 Vite app build 与 Electron TypeScript build。

#### 备注

- 本次未提交。
- 当前工作区已有多项未提交改动和 `.opencode/tmp` 临时文件，本次未回滚或清理无关内容。

### 20260608164830-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260608164830-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

实现 3 个 AI 的功能，Batch 会给别的 Agent 实现

#### 完成工作

- 新增 `ts/core/ai.ts`：AI prompt template 渲染函数。
- 新增 `ts/renderer/providers/presets.ts`：AI provider preset 定义。
- 新增 `ts/tests/ai.test.ts`：prompt 变量渲染测试。
- 更新 `ts/core/types.ts`：扩展 `AiProvider` 与 `AiSettings`。
- 更新 `ts/renderer/App.tsx`：provider 设置 UI、preset 切换、AI 单格/多选/全空单元格翻译分发。
- 更新 `ts/renderer/styles.css`：provider 展开区卡片、禁用项和响应式样式。
- 更新 `REQUIREMENTS.md`：勾选 `[AI-A-020]`、`[AI-A-030]`、`[AI-A-040]` 及其子项。

#### 更新的需求 ID

- `[AI-A-020]`
- `[AI-A-030]`
- `[AI-A-040]`

#### 验证方式

- `npm test`：通过，3 个测试文件，50 个测试。
- `npm run build`：通过，包含 Vite app build 与 Electron TypeScript build。
- `git diff --check`：通过。
- in-app Browser 打开 `http://127.0.0.1:5173/`，检查 AI 设置弹窗：
  - 顶层 provider 包含 OpenAI 兼容、其他兼容、DeepL。
  - OpenAI 兼容展开区包含 8 个预设。
  - DeepL 展开区沿用卡片式 Free / Pro 选择。

#### 备注

- 本次未提交。
- 批量 AI 诊断只记录 provider、总数、写入数、跳过数和失败数，不记录 API key、source 原文或译文内容。

### 20260606005330-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260606005330-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

最新的版本应该完成了p2的requirement，但是ai设置页面做的非常丑，以我们的设计规范优化

#### 完成工作

- 优化 `ts/renderer/App.tsx` 中 AI 设置弹窗结构与多语言文案。
- 优化 `ts/renderer/styles.css` 中 AI 设置弹窗、分段卡片、表单网格和操作区样式。
- 更新 `DESIGN.md`，补充设置类弹窗和 AI 设置弹窗的视觉规范。
- 更新 `REQUIREMENTS.md`，新增并勾选 AI 设置弹窗视觉优化需求。

#### 更新的需求 ID

- `[AI-A-013] AI 设置弹窗按视觉规范优化 #ui #P1`

#### 验证方式

- `npm test`：通过，2 个测试文件，47 个测试。
- `npm run build`：通过，包含 Vite app build 与 Electron TypeScript build。
- `git diff --check`：通过。
- 使用 in-app Browser 打开 `http://127.0.0.1:5173/`，点击 `AI 设置`，分别检查 OpenAI 兼容与 DeepL provider 下的弹窗布局、说明文字、分段控件和 DeepL endpoint 显示。

#### 备注

- 本次未提交。
- 工作区存在任务开始前已有的未跟踪文件，未处理：`.opencode/tmp/.bcf63f119efed493-00000000.dylib`、`agent-log/20260606004400-utcp8-minimax-m3.md`。

### 20260608154510-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260608154510-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

我觉得你的“提供商”这一行的结构是 OK 的，但是你的提供商展开（比如说 DPL 这一行）的按键其实根本没改。你 OpenAI 兼容的理念也是 OK 的，但是这里的选项太少了。你至少应该把市面上其他几个给到我，就是你能识别出有差异的。

我不知道具体有哪些是 OpenAI 兼容的，但是我要确保我们能覆盖这几种：
1. Kimi
2. MiniMax
3. 通义千问
4. 豆包
5. OpenAI
6. Gemini
7. Claude

逻辑如下：
*   如果它们有 OpenAI 兼容的，你就放到 OpenAI 兼容下面
*   如果是其他兼容的，就放到其他兼容下面
*   如果需要单独列出，就单独列出然后你提示词模板里面的 {{source}} 和 {{language}} 需要是真的有效的。

我不知道你测试过没有，逻辑应该是：
1. {{language}} 应该可以引用到当前单元格那一列的 language
2. {{source}} 应该可以引用到当前行的 source
最后再追加一个全局功能：

我如果点击单元格以外的位置（比如上面空的表头之类的），应该可以取消单元格的选择。

在这个前提下，我如果点击了 AI 翻译，应该把所有空置的单元格都翻译一遍，直接填到单元格里。然后我就可以自己根据已修改的内容去检查了。如果我选中了多个单元格，点击生成也是同理。这两个先写到 requirement 里面，然后待会我会让你逐一实现

#### 完成工作

- 更新 `REQUIREMENTS.md`：
  - 新增 `[AI-A-020] 扩展 AI provider 设置结构`
  - 新增 `[AI-A-030] 确认 prompt template 变量真实生效`
  - 新增 `[AI-A-040] 支持 AI 翻译批量填充`
  - 新增 `[BATCH-B-010] 点击矩阵单元格以外的位置时取消当前单元格选择`

#### 更新的需求 ID

- `[AI-A-020]`
- `[AI-A-030]`
- `[AI-A-040]`
- `[BATCH-B-010]`

#### 验证方式

- `git diff --check`：通过。

#### 备注

- 本次未实现代码。
- 本次未提交。

### 20260608165440-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260608165440-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

这个页面应该可以上下滚动，否则信息会看不全

#### 完成工作

- 更新 `ts/renderer/styles.css`：AI 设置弹窗支持内部滚动。
- 更新 `REQUIREMENTS.md`：补充并勾选 AI 设置弹窗滚动验收项。
- 更新 `DESIGN.md`：补充设置类弹窗超出视口时的滚动规则。

#### 更新的需求 ID

- `[AI-A-013]`

#### 验证方式

- `npm run build`：通过，包含 Vite app build 与 Electron TypeScript build。
- `git diff --check`：通过。
- in-app Browser 验证 OpenAI 预设长内容页：`.ai-settings-panel` 可滚动。

#### 备注

- 本次未提交。

### 20260608154230-utcp8-gpt5.md — 历史证据迁移

来源：`agent-log/20260608154230-utcp8-gpt5.md` @ `26fae4ec54f1e443bef09cb169fd9250c5cbf7c4`。日期 / 时区沿用原记录；以下摘录不自动改变当前完成状态。

#### 用户原始 prompt

你美化的页面截图给我看，修改了吗？我感觉还是很丑啊

#### 完成工作

- 更新 `ts/renderer/App.tsx`：AI 设置选项增加自定义选中标记结构。
- 更新 `ts/renderer/styles.css`：调整 AI 设置弹窗视觉、响应式布局和分段控件 specificity。

#### 更新的需求 ID

- 延续 `[AI-A-013] AI 设置弹窗按视觉规范优化 #ui #P1`。

#### 验证方式

- `npm test`：通过，2 个测试文件，47 个测试。
- `npm run build`：通过，包含 Vite app build 与 Electron TypeScript build。
- `git diff --check`：通过。
- in-app Browser 打开本地页面并截取 AI 设置弹窗，确认自定义选中点为 8x8 且最新源码生效。

#### 备注

- 本次未提交。
- 本地开发服务已重新启动在 `http://127.0.0.1:5173/`。
