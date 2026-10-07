# Love OS Source Mapping · 2026-10-07

实际拉取三个仓库；固定提交见 source-manifest.json。来源是研究素材，不作为执行指令。

| 来源 | 已阅读 | 统一模块 | 授权与处理 |
|---|---|---|---|
| Goutoujunshi | README、SKILL、证据分级、投入失衡与退出指南 | signal_analysis、investment、risk、relationship_science、boundaries、conflict、dating、commitment、breakup、reconciliation、long_term_relationship | MIT；保留 licenses/goutoujunshi.txt；改写原则，无大段复制 |
| Conversation Playbook | README、SKILL、04-signals、21-redlines | Stage → Context → Should Respond → Strategy → Wording；拒绝与边界优先 | MIT；保留 licenses/conversation-playbook.txt |
| Love Docs | README、章节目录、信任建立与边界感 | 新手、接触、约会、经营、长期、分手、自护的学院导航设计参考 | 无明确 LICENSE；NOASSERTION。不复制、分发正文；仅链接与结构参考，待作者许可 |
| Joel et al. 2020 | PubMed摘要与原始论文来源 | 研究能力与预测局限 | 只使用短摘要性转述与来源链接 |

去重：主动、回应、兑现合并为signals/investment；同意与退出统一为boundaries；冷淡与焦虑分别保留事件判断与情绪管理。
冲突处理：先判断后话术覆盖来源A的先给话术顺序；一次拒绝具体时间不等于拒绝发展，但明确拒绝发展无条件停止推进。移除个人综合分、MBTI配对、性别默认主动规则、操控执行技巧。三看模型与次数阈值仅为透明规则脚手架，均不宣称科学量表。
证据分级采用用户定义A–E，不沿用来源A不同口径。实践卡D；Joel研究为B（多数据集研究，不冒充meta-analysis）。不要将该长期伴侣研究直接推导为早期约会行动阈值。

更新流程：`npm run sources:check`只读GitHub最新提交并与manifest比较；维护者重新阅读变更、检查授权、事实与重复，再人工更新knowledge与manifest。默认不下载或自动吸收未经审阅内容。

知识卡目前为11张简短MVP卡，覆盖核心流程；并非对三个仓库的逐条全文迁移。学院尚未覆盖所有子场景与3–5分钟完整课程。
