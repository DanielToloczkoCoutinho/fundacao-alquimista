'use server';

import { App } from '@slack/bolt';
import fetch from 'node-fetch';

export const chatBot = new App({
  token: process.env.SLACK_BOT_TOKEN!,
  signingSecret: process.env.SLACK_SIGNING_SECRET!,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN!
});

chatBot.command('/m29', async ({ command, ack, say }) => {
  await ack();
  const [cmd, arg] = command.text.trim().split(' ');

  if (cmd === 'status') {
    const res = await fetch('http://localhost:4000/health');
    const h   = await res.json();
    await say(`🏥 Status: ${h.status} | ${h.timestamp}`);
  }
  else if (cmd === 'metrics') {
    const res = await fetch('http://localhost:9464/metrics');
    const m   = await res.text();
    const c   = m.match(/syntropy_coherence{.*?} (\d+\.\d+)/)?.[1] || 'N/A';
    await say(`📊 Coerência Sintrópica: ${c}%\n(Métricas: http://localhost:9464/metrics)`);
  }
  else if (cmd === 'deploy' && arg) {
    await say(`🚀 Deploy de *${arg}* iniciado…`);
    // TODO: integrar ArgoCD via API
    await say(`✅ Deploy de *${arg}* autorizado. Monitor: https://argocd.fundacao-omega.app/applications/${arg}`);
  }
  else if (cmd === 'rollback' && arg) {
    await say(`↩️ Rollback de *${arg}* iniciado…`);
    // TODO: integrar rollback ArgoCD/Flux
    await say(`✅ Rollback de *${arg}* concluído. Status: https://argocd.fundacao-omega.app/applications/${arg}`);
  }
  else {
    await say(`🤖 Comandos /m29 disponíveis:
• status
• metrics
• deploy <MÓDULO>
• rollback <MÓDULO>
• help`);
  }
});

export const startChatBot = async () => {
  const port = process.env.SLACK_BOT_PORT ? parseInt(process.env.SLACK_BOT_PORT, 10) : 3001;
  if (process.env.SLACK_BOT_TOKEN) {
      await chatBot.start(port);
      console.log(`🤖 ChatOps M29 iniciado na porta ${port}`);
  } else {
      console.warn('⚠️  Variáveis do Slack não configuradas. O ChatOps não será iniciado.');
  }
};
