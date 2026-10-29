# Happy Global Service 生产发布记录

发布时间：2026年10月29日 17:31（Asia/Shanghai）。

用户已明确要求将当前整改版发布官网生产环境。本次从Git精确提交创建Vercel production部署，没有合并main。

- 发布提交：412ffb1633d75851eca5c7e85fff84486dc831fc（dev）
- Vercel项目：services，prj_gyM1ofkpVTPWyQ9AccQR0qsHe8LD
- 生产部署：dpl_GuVyMknXyCuwvYpbWRcPywBfFfPg
- 官网：https://happyglobalservice.com/
- 部署状态：READY，aliasError为空，正式域名已绑定本部署。
- 回滚候选：dpl_AmxnBDp2ADzVkWEVc3X6xptsAXkb，对应原提交d97d527606753d2fcb06f5396b377014908b45eb。
- 原本地.vercel项目指向旧项目happy_global_brand，已在忽略的本地配置中修正为services；未提交凭据。
- 修复www入口：原www.happyglobalservice.com存在证书错误，现已加入同一项目并验证，通过308跳转至主域名，HTTPS检查通过。

本次使用现有生产环境配置构建；未读取或打印环境变量的秘密值，未发送真实测试邮件。完整法律文书、中国跨境单独同意、Support邮箱运维、业务证据和资质等待补项不会因发布自动完成。

注意：main仍保留旧代码。若以后从main自动部署，需先将相应整改提交合入或选取正确版本，避免覆盖本次发布。旧版状态文档和Word清单属于发布前快照；本记录更新其中关于尚未上线的状态。

发布后验证：首页、Contact、Team、Talent Advisory、Privacy Policy、Terms of Service六页HTTP 200；旧Logo墙、旧邮箱及500+/95%宣传未出现；Contact存在必选勾选框；两份法律页显示本轮Revision ID。浏览器未发现页面脚本错误和外部资源请求。TDM文件可访问；www HTTPS返回308并跳转主域名。
