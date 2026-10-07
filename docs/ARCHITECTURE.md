# Information Architecture
五个Tab：首页输入与来源确认；TA人物、阶段、投入、时间线、周报；下一步证据、单一动作、话术、相关知识；指南短知识卡；我的需求、边界、JEVPA与备份。

# 数据 Schema
Store(version, people[], events[], selected, health[])
Person(id, name, met, via, stage, notes, needs, boundaries)
Event(id, personId, date, text, kind, actor, cost, status, type, risk, image?)
Health(date, joy, engagement, value, pressure, agency, reason)
Knowledge(id,title,source,source_url,license,category,stage,scenario,principle,evidence_level,advice,contraindications,risk,examples,tags)
AI_INFERENCE只在补充结果区临时呈现，不自动写入FACT。FACT意味着用户提供的观察记录，不等于独立核实。用户解释与未知记录不参与事实计数。

# 分层
model.ts数据类型与虚拟demo；memory.ts浏览器存储与对象隔离；knowledge.ts结构化卡与按阶段/场景/目标/风险检索；engine.ts确定性决策与阶段规则；ai.ts系统提示和独立适配接口；api/analyze服务端调用；page.tsx交互呈现。
本地规则输出可离线计算，API不携带其他TA档案。隐私数据不发往知识来源。只有点击AI分析才发送当前档案；截图不发送给模型，本版人工转录。

# 决策与局限
按事件日期看近期5条及完整历史，优先已确认拒绝/风险，其次未兑现/单向发起，最后以具体邀约获取信息。主观输入不定性他人。次数阈值为MVP可审计启发式，不是科学阈值。
阶段：认识后出现事实记录可转为接触；更高阶段由用户依据双方确认手动更新，不根据消息数、见面次数或亲密行为自动升级。
规则分析不是LLM。未配置API明确返回503并保留结果。已确认安全与拒绝决策不能被模型推进建议覆盖。模型其它内容仍需用户核对；不用于诊断。
LocalStorage非加密存储；浏览器清理会丢数据，请导出备份。本地多Tab并发与跨设备同步尚未实现。Supabase后续可实现同一Store接口并增加账号与行级安全。
