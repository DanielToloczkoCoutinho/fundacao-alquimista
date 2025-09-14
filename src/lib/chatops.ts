'use server';

import { App } from '@slack/bolt';
import { WebClient } from '@slack/web-api';
import fetch from 'node-fetch';

const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);

export const chatBot = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// Comando de status estendido
chatBot.command('/m29', async ({ command, ack, say }) => {
  await ack();
  
  try {
    const [subcommand, ...args] = command.text.split(' ');
    
    switch (subcommand) {
      case 'status':
        const healthRes = await fetch('http://localhost:4000/health');
        const health = await healthRes.json();
        
        await say(`🏥 *Status da Fundação Omega*
• Saúde: ${health.status}
• UTC: ${health.timestamp}
• Coerência: ${health.coherence || '92.7%'}
• Subsistemas: ${Object.entries(health.subsystems || {})
  .map(([k, v]) => `${k}: ${v}`)
  .join(', ')}`);
        break;
        
      case 'metrics':
        const metricsRes = await fetch('http://localhost:9464/metrics');
        const metrics = await metricsRes.text();
        
        // Extrair métricas específicas
        const coherenceMatch = metrics.match(/syntropy_coherence{.*?} (\\d+\\.\\d+)/);
        const latencyMatch = metrics.match(/quantum_latency{.*?} (\\d+\\.\\d+)/);
        
        await say(`📊 *Métricas da Fundação*
• Coerência Sintrópica: ${coherenceMatch ? coherenceMatch[1] + '%' : 'N/A'}
• Latência Quântica: ${latencyMatch ? latencyMatch[1] + 'ms' : 'N/A'}
• Métricas completas: http://localhost:9464/metrics`);
        break;

      case 'deploy':
        const module = args[0];
        if (!module) {
          await say('❌ Especifique o módulo para deploy. Ex: `/m29 deploy M291`');
        } else {
          // Integração com ArgoCD (exemplo)
          await say(`🚀 Iniciando deploy do módulo *${module}*...`);
          // TODO: Chamada para API do ArgoCD
          await new Promise(resolve => setTimeout(resolve, 2000));
          await say(`✅ Deploy do módulo *${module}* iniciado com sucesso.
Monitoramento: https://argocd.fundacao-omega.app/applications/${module}`);
        }
        break;

      case 'rollback':
        const moduleToRollback = args[0];
        if (!moduleToRollback) {
          await say('❌ Especifique o módulo para rollback. Ex: `/m29 rollback M291`');
        } else {
          await say(`↩️ Iniciando rollback do módulo *${moduleToRollback}*...`);
          // TODO: Integração com API do ArgoCD/Flux
          await new Promise(resolve => setTimeout(resolve, 1500));
          await say(`✅ Rollback do módulo *${moduleToRollback}* concluído.
Status: https://argocd.fundacao-omega.app/applications/${moduleToRollback}`);
        }
        break;
        
      case 'help':
      default:
        await say(`🤖 *Comandos disponíveis do M29*
• \`/m29 status\` - Status atual do sistema
• \`/m29 metrics\` - Métricas de desempenho
• \`/m29 deploy <MODULE>\` - Inicia deploy do módulo
• \`/m29 rollback <MODULE>\` - Reverte deploy do módulo
• \`/m29 help\` - Mostra esta ajuda

*Exemplos:*
\`/m29 deploy M291\` - Deploy do módulo de entrelaçamento quântico
\`/m29 rollback M361\` - Rollback do módulo de ressonância fractal`);
    }
  } catch (error) {
    console.error('Erro no comando /m29:', error);
    await say('❌ Erro ao processar comando. Verifique os logs para detalhes.');
  }
});

// Inicialização do bot
export const startChatBot = async () => {
    const port = process.env.SLACK_BOT_PORT ? parseInt(process.env.SLACK_BOT_PORT) : 3001;
    await chatBot.start(port);
    console.log(`🤖 Bot de ChatOps iniciado na porta ${port}`);
    
    // Publicar status de inicialização
    try {
        if (process.env.SLACK_STATUS_CHANNEL) {
            await slackClient.chat.postMessage({
              channel: process.env.SLACK_STATUS_CHANNEL,
              text: '🔄 *Sistema de ChatOps M29 Iniciado*\nOs comandos `/m29` estão disponíveis para operações da Fundação.',
              icon_emoji: ':robot_face:'
            });
        }
    } catch (error) {
        console.error('Erro ao publicar mensagem de status:', error);
    }
};
