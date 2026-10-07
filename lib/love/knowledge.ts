import {Stage} from './model';
export type Knowledge={id:string;title:string;source:string;source_url:string;license:string;category:string;stage:Stage[];scenario:string[];principle:string;evidence_level:'A'|'B'|'C'|'D'|'E';advice:string;contraindications:string; risk:string;examples:string[];tags:string[]};
const A='https://github.com/shengjidaguai-china/goutoujunshi';const B='https://github.com/kapamelia/conversation-playbook';
const rows=[
['signals','看主动、成本与持续','signal_analysis','主动 邀约 见面 喜欢 点赞','连续的现实行动比一次热情更有信息价值。','记录谁主动安排、是否兑现，再做一次可退出的具体邀约。','对方回复慢，但每次都会给替代时间并按约见面。','一次点赞不能证明好感；礼物不能购买同意。'],
['reply','回复之前，先判断','communication','聊天 回复 已读不回 冷淡','先看阶段与目标，再决定是否回复。','有明确问题就自然回应；没有新内容时不必为了维持热度补发。','对方说今天忙，你回应收到并继续自己的安排。','不要连续追问、用嫉妒或冷暴力测试对方。'],
['date','第一次邀约要具体','dating','邀约 见面 约会','具体而可拒绝的安排，能减少无效猜测。','给一个时间和公共地点，允许拒绝或提出替代安排。','周六下午有空一起看展吗？不方便也没关系。','一句改天吧不是已经敲定的约会。'],
['boundaries','边界不需要用好感交换','boundaries','边界 拒绝 控制 威胁 暴力','同意可以撤回，拒绝不是需要突破的障碍。','说明边界；明确拒绝发展时停止推进。危险情境优先安全与可信支持。','对方不想身体接触，立即停止并尊重其空间。','不把侵犯边界解释成太爱你。'],
['investment','投入账户不是账单','investment','投入 承诺 失约 兑现','比较主动、时间与兑现模式，不给人标价。','反复单向推进时停止加码，观察下一次是否共同安排。','消息少，但会安排见面并提供现实帮助。','花钱多不等于爱；不同投入形式需要协商。'],
['conflict','修复看改变，不只看道歉','conflict','冲突 吵架 道歉 修复','具体承担影响并兑现改变，比反复解释更重要。','冷静时描述一件事、感受与一个需求，观察后续行为。','约定取消见面提前告知，下次真的提前说明。','威胁暴力时不做共同沟通练习。'],
['commitment','关系确认需要双方表达','commitment','表白 确认关系 排他 在一起','频繁见面不自动等于排他关系。','直接询问是否愿意建立关系，并谈双方对排他性的理解。','我们都享受相处，你愿意正式建立关系吗？','不要把亲密行为当作默认承诺。'],
['anxiety','上头时先降低行动成本','risk','上头 焦虑 不回 等待','强烈感受是真实的，脑中的解释仍要验证。','暂停高成本行动24小时，照顾睡眠与生活，再看新行为。','想发长篇质问时先写在草稿里，第二天再决定。','暂停不是惩罚对方或制造依赖。'],
['breakup','结束与复合都看现实条件','breakup','分手 复合 前任 结束','想念不能替代分手原因得到处理的证据。','列明原因、可观察的改变与停止条件；拒绝联系时不再联系。','失信反复出现，结束关系可以是保护自己的选择。','不合适不代表对方是坏人。'],
['long','长期关系需要可协商的生活','long_term_relationship','家庭 金钱 婚姻 未来 异地 同居','现实安排要被讨论，而不是靠猜。','分别谈金钱、家务、距离、家庭与未来，记录共识和待定项。','异地双方共同安排下次见面与结束异地的条件。','不要用刚认识的热情代替长期一致性。']];
export const knowledge:Knowledge[]=rows.map((r,i)=>({id:r[0],title:r[1],source:i%2?'Conversation Playbook':'Goutoujunshi',source_url:i%2?B:A,license:'MIT',category:r[2],stage:i===6?['约会','稳定关系']:i===9?['稳定关系','长期关系']:['认识','接触','暧昧','约会','稳定关系','长期关系'],scenario:r[3].split(' '),principle:r[4],evidence_level:'D',advice:r[5],contraindications:r[7],risk:i===3?'优先安全':'避免读心与操控',examples:[r[6]],tags:r[3].split(' ')}));
knowledge.push({id:'science',title:'研究能帮助提问，不能预言一个人',source:'Joel et al. (2020)',source_url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC7431040/',license:'引用摘要与链接，未复制论文',category:'relationship_science',stage:['稳定关系','长期关系'],scenario:['满意度','承诺','冲突'],principle:'43组伴侣纵向数据研究发现，关系层面的自我报告与当前质量相关，但质量变化仍难以预测。',evidence_level:'B',advice:'关注承诺感、欣赏与冲突等过程，同时保留对未来的未知。',contraindications:'不能推导某个对象的喜欢概率或个人退出阈值。',risk:'相关不是因果；长期伴侣样本不直接适用初次接触',examples:['觉得被欣赏是值得讨论的体验，不是预测未来的分数。'],tags:['满意度','长期','科学']});
export function retrieve(stage:Stage,text:string,goal:string,risk:string){const ranked=knowledge.map(k=>({k,s:(k.stage.includes(stage)?2:-10)+k.tags.filter(t=>(text+goal).includes(t)).length*3+(risk!=='无'&&k.id==='boundaries'?20:0)})).filter(x=>x.s>2).sort((a,b)=>b.s-a.s).slice(0,3).map(x=>x.k);return ranked.length?ranked:knowledge.filter(k=>['signals','date'].includes(k.id));}
