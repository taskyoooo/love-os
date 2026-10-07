# Love OS｜恋爱小白操作系统
少猜心理，多看行为；少学套路，多做验证。

## 本地使用
需要 Node 22.13+。
```
npm ci
npm run dev
```
打开启动时显示的本地地址（默认 http://127.0.0.1:5173）。首次带虚拟小林：认识12天、10条聊天、5个现实事件、2次见面。创建TA并记录互动；保存后自动运行规则分析、更新时间线与证据。新增拒绝发展或失约证据会重新计算建议。

这是Next.js App Router / TypeScript / Tailwind应用，使用Vinext兼容运行。数据为浏览器LocalStorage，未来可替换持久化适配器。

## AI（可选）
复制.env.example为.env，配置服务端环境变量并重启。API使用兼容Chat Completions服务。没有密钥仍可使用完整规则分析闭环；实际LLM调用必须使用有效配置，当前未验证真实模型凭据。图片本版需用户转录，不自动OCR。
```
LOVE_OS_API_KEY=...
LOVE_OS_API_BASE=https://api.openai.com/v1
LOVE_OS_MODEL=gpt-4.1-mini
```
不要把密钥放进浏览器或版本库。API请求只传当前TA有限记录与检索卡。默认服务需用户自行配置账户。

## 验证与维护
```
npx tsc --noEmit
npm run build
npm run test:engine
npm run sources:check
```
见docs/SOURCE_MAPPING.md、docs/ARCHITECTURE.md、docs/TEST_REPORT.md。来源MIT声明在licenses/。

## 当前交付范围
MVP五Tab与核心闭环，投入、体检、急救、即时周报与备份。11张基础卡，不是全课程。高级RAG向量检索、跨关系归因、自动人物识别、自动截图结构化、自动阶段推断与云同步不在当前实现内。分析前必须由用户确认记录性质与风险。规则建议为透明启发式，不是读心或诊断。

## 开源许可与贡献
本项目采用 [MIT License](LICENSE)。来源与依赖保留各自声明，详见 [第三方声明](THIRD_PARTY_NOTICES.md)。Love Docs 正文未复制或分发。欢迎按 [贡献指南](CONTRIBUTING.md) 提交改进。隐私与本地使用边界见 [SECURITY.md](SECURITY.md)。
