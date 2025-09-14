'use server';

import { App } from '@slack/bolt';

// Inicialização do App Bolt com as credenciais do ambiente
export const chatBot = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

/**
 * Comando /m29 status
 * Responde com o status atual do sistema.
 */
chatBot.command('/m29', async ({ ack, say, command }) => {
  await ack();
  if (command.text === 'status') {
    try {
      // Em um ambiente real, esta URL seria a do serviço de backend.
      const healthCheckUrl = process.env.HEALTH_CHECK_URL || 'http://localhost:4000/health';
      const response = await fetch(healthCheckUrl);
      if (!response.ok) {
        throw new Error(`Health check falhou com status: ${response.status}`);
      }
      const data = await response.json();
      await say(`ℹ️ *Status da Fundação Alquimista*:\n• *Estado:* \`${data.status}\`\n• *Selo Temporal:* \`${data.timestamp}\``);
    } catch (error: any) {
      await say(`❌ Erro ao consultar o status da Fundação: ${error.message}`);
    }
  } else {
    await say(`Comando \`${command.text}\` não reconhecido. Tente \`/m29 status\`.`);
  }
});

/**
 * Função para iniciar o bot.
 * Deve ser chamada no ponto de entrada do servidor.
 */
export async function startChatBot() {
  const port = process.env.SLACK_PORT ? parseInt(process.env.SLACK_PORT) : 3001;
  try {
    await chatBot.start(port);
    console.log(`🤖 ChatOps Fractal rodando na porta ${port}`);
  } catch (error) {
    console.error('❌ Erro ao iniciar o ChatOps Fractal:', error);
  }
}
