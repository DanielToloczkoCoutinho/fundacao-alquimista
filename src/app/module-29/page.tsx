
'use client';
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';

const Module29PortalPage: React.FC = () => {
    const natsMessagesRef = useRef<HTMLDivElement>(null);
    const messageInputRef = useRef<HTMLInputElement>(null);
    const natsStatusRef = useRef<HTMLSpanElement>(null);
    const natsStatusTextRef = useRef<HTMLSpanElement>(null);
    const deployBtnRef = useRef<HTMLButtonElement>(null);

    const addMessage = (text: string, type: 'system' | 'user' | 'error') => {
        const natsMessages = natsMessagesRef.current;
        if (!natsMessages) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.textContent = text;
        natsMessages.appendChild(messageDiv);
        natsMessages.scrollTop = natsMessages.scrollHeight;
    };

    useEffect(() => {
        const handleConnectNats = () => {
            const natsStatus = natsStatusRef.current;
            const natsStatusText = natsStatusTextRef.current;
            if (!natsStatus || !natsStatusText) return;

            natsStatus.className = 'status-indicator status-connecting';
            natsStatusText.textContent = 'Conectando...';

            setTimeout(() => {
                natsStatus.className = 'status-indicator status-online';
                natsStatusText.textContent = 'Online';
                addMessage('Sistema: Conectado ao servidor NATS com sucesso!', 'system');
            }, 2000);
        };

        const handleSendMessage = () => {
            const messageInput = messageInputRef.current;
            if (!messageInput || messageInput.value.trim() === '') return;

            addMessage(`Você: ${messageInput.value}`, 'user');
            messageInput.value = '';

            setTimeout(() => {
                addMessage('Sistema: Mensagem recebida e processada em 5 dimensões paralelas.', 'system');
            }, 1000);
        };

        const handleQueryData = () => {
            addMessage('Sistema: Executando query GraphQL na malha de dados fractal...', 'system');
            setTimeout(() => {
                addMessage('Sistema: Query executada com sucesso. 42 dimensões consultadas.', 'system');
            }, 1500);
        };
        
        const handleRefreshSchema = () => {
            addMessage('Sistema: Atualizando schema do GraphQL Federation...', 'system');
            setTimeout(() => {
                addMessage('Sistema: Schema atualizado com sucesso. Novos laboratórios integrados.', 'system');
            }, 1200);
        };

        const handleRegisterDevice = () => {
            const usernameInput = document.getElementById('username') as HTMLInputElement;
            const username = usernameInput?.value || 'UsuarioMultidimensional';
            addMessage(`Sistema: Iniciando registro do dispositivo para ${username}...`, 'system');
            setTimeout(() => {
                addMessage('Sistema: Dispositivo registrado com sucesso! Chave criptográfica multidimensional gerada.', 'system');
            }, 1500);
        };

        const handleAuthenticate = () => {
            const usernameInput = document.getElementById('username') as HTMLInputElement;
            const username = usernameInput?.value || 'UsuarioMultidimensional';
            addMessage(`Sistema: Iniciando autenticação multidimensional para ${username}...`, 'system');
            setTimeout(() => {
                addMessage('Sistema: Autenticação bem-sucedida! Acesso concedido a 7 dimensões.', 'system');
            }, 1500);
        };
        
        const handleDeployAll = () => {
            const btn = deployBtnRef.current;
            if(!btn) return;
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Implantando...';
            btn.disabled = true;

            addMessage('Sistema: Iniciando implantação completa dos sistemas...', 'system');

            setTimeout(() => addMessage('Sistema: Malha de Dados Fractal implantada com sucesso!', 'system'), 1000);
            setTimeout(() => addMessage('Sistema: Identidade Multidimensional configurada!', 'system'), 2000);
            setTimeout(() => addMessage('Sistema: Canais Interplanetários estabelecidos!', 'system'), 3000);
            setTimeout(() => {
                addMessage('Sistema: Todos os sistemas implantados com sucesso! Fundação pronta para ascensão meta-autônoma.', 'system');
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 4000);
        };

        const connectNatsBtn = document.getElementById('connect-nats');
        const sendMessageBtn = document.getElementById('send-message');
        const messageInputEl = messageInputRef.current;
        const queryDataBtn = document.getElementById('query-data');
        const refreshSchemaBtn = document.getElementById('refresh-schema');
        const registerDeviceBtn = document.getElementById('register-device');
        const authenticateBtn = document.getElementById('authenticate');
        const deployAllBtn = deployBtnRef.current;


        connectNatsBtn?.addEventListener('click', handleConnectNats);
        sendMessageBtn?.addEventListener('click', handleSendMessage);
        queryDataBtn?.addEventListener('click', handleQueryData);
        refreshSchemaBtn?.addEventListener('click', handleRefreshSchema);
        registerDeviceBtn?.addEventListener('click', handleRegisterDevice);
        authenticateBtn?.addEventListener('click', handleAuthenticate);
        deployAllBtn?.addEventListener('click', handleDeployAll);
        
        const handleKeypress = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        };
        messageInputEl?.addEventListener('keypress', handleKeypress);

        setTimeout(() => addMessage('Sistema: Portal da Fundação Alquimista inicializado. Aguardando comandos.', 'system'), 500);

        return () => {
            connectNatsBtn?.removeEventListener('click', handleConnectNats);
            sendMessageBtn?.removeEventListener('click', handleSendMessage);
            messageInputEl?.removeEventListener('keypress', handleKeypress);
            queryDataBtn?.removeEventListener('click', handleQueryData);
            refreshSchemaBtn?.removeEventListener('click', handleRefreshSchema);
            registerDeviceBtn?.removeEventListener('click', handleRegisterDevice);
            authenticateBtn?.removeEventListener('click', handleAuthenticate);
            deployAllBtn?.removeEventListener('click', handleDeployAll);
        };
    }, []);

  return (
    <>
      <Head>
        <title>Portal da Fundação Alquimista - Módulo 29</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <style jsx global>{`
        :root {
            --quantum-blue: #00a8ff;
            --quantum-purple: #9c27b0;
            --quantum-teal: #009688;
            --quantum-dark: #0c1230;
            --quantum-darker: #070a1c;
            --quantum-neon: #00ffcc;
            --quantum-pink: #ff00aa;
            --quantum-orange: #ff9800;
            --quantum-green: #4caf50;
            --quantum-yellow: #ffeb3b;
        }
        
        .m29-portal, .m29-portal * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .m29-portal {
            background: linear-gradient(135deg, var(--quantum-darker), var(--quantum-dark));
            color: #fff;
            line-height: 1.6;
        }
        
        .m29-portal .container {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .m29-portal header {
            padding: 2rem 0;
            text-align: center;
            background: rgba(12, 18, 48, 0.9);
            border-bottom: 2px solid var(--quantum-blue);
            position: relative;
            overflow: hidden;
        }
        
        .m29-portal header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, rgba(0, 168, 255, 0.1) 0%, transparent 70%);
            z-index: 0;
        }
        
        .m29-portal h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(90deg, var(--quantum-blue), var(--quantum-neon));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 10px rgba(0, 255, 204, 0.3);
        }
        
        .m29-portal h2 {
            font-size: 2rem;
            margin: 2rem 0 1rem;
            color: var(--quantum-neon);
        }
        
        .m29-portal h3 {
            font-size: 1.5rem;
            margin: 1.5rem 0 1rem;
            color: var(--quantum-blue);
        }
        
        .m29-portal p {
            margin-bottom: 1rem;
        }
        
        .m29-portal .subtitle {
            font-size: 1.2rem;
            color: var(--quantum-neon);
            margin-bottom: 2rem;
        }
        
        .m29-portal .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            margin: 2rem 0;
        }
        
        .m29-portal .card {
            background: rgba(12, 18, 48, 0.7);
            border: 1px solid;
            border-radius: 10px;
            padding: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            overflow: hidden;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .m29-portal .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, transparent, rgba(0, 168, 255, 0.1), transparent);
            transform: translateX(-100%);
            transition: transform 0.6s ease;
        }
        
        .m29-portal .card:hover::before {
            transform: translateX(100%);
        }
        
        .m29-portal .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(0, 168, 255, 0.3);
        }
        
        .m29-portal .card h3 {
            color: var(--quantum-neon);
            margin-top: 0;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .m29-portal .card h3 i {
            font-size: 1.2em;
        }
        
        .m29-portal .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .m29-portal .status-indicator {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 8px;
        }
        
        .m29-portal .status-online {
            background-color: var(--quantum-green);
        }
        
        .m29-portal .status-offline {
            background-color: var(--quantum-pink);
        }
        
        .m29-portal .status-connecting {
            background-color: var(--quantum-yellow);
            animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        
        .m29-portal .code-block {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            padding: 15px;
            margin: 1rem 0;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            font-size: 0.85rem;
            max-height: 200px;
            overflow-y: auto;
        }
        
        .m29-portal .keyword { color: #ff79c6; }
        .m29-portal .function { color: #50fa7b; }
        .m29-portal .string { color: #f1fa8c; }
        .m29-portal .comment { color: #6272a4; }
        .m29-portal .variable { color: #8be9fd; }
        .m29-portal .number { color: #bd93f9; }
        
        .m29-portal .controls {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 20px 0;
            flex-wrap: wrap;
        }
        
        .m29-portal .btn {
            background: rgba(0, 168, 255, 0.2);
            border: 1px solid var(--quantum-blue);
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .m29-portal .btn:hover {
            background: var(--quantum-blue);
        }
        
        .m29-portal .btn:disabled {
            background-color: #333;
            color: #777;
            cursor: not-allowed;
            border-color: #555;
        }
        
        .m29-portal .btn-primary {
            background: linear-gradient(90deg, var(--quantum-purple), var(--quantum-pink));
            border: none;
        }
        
        .m29-portal .btn-primary:hover {
            background: linear-gradient(90deg, var(--quantum-pink), var(--quantum-purple));
        }
        
        .m29-portal .form-group {
            margin-bottom: 15px;
        }
        
        .m29-portal .form-label {
            display: block;
            margin-bottom: 5px;
            color: var(--quantum-neon);
        }
        
        .m29-portal .form-input {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid var(--quantum-blue);
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            width: 100%;
        }
        
        .m29-portal .message-list {
            height: 200px;
            overflow-y: auto;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 15px;
            background: rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
        }
        
        .m29-portal .message {
            padding: 8px;
            margin-bottom: 8px;
            border-radius: 5px;
        }
        
        .m29-portal .message-system {
            background: rgba(156, 39, 176, 0.1);
            border-left: 2px solid var(--quantum-purple);
        }

        .m29-portal .message-user {
            background: rgba(0, 168, 255, 0.1);
            border-left: 2px solid var(--quantum-blue);
        }
        
        .m29-portal .message-error {
            background: rgba(255, 0, 170, 0.1);
            border-left: 2px solid var(--quantum-pink);
        }
        
        .m29-portal .dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 2rem 0;
        }
        
        .m29-portal .dashboard-card {
            background: rgba(12, 18, 48, 0.7);
            border-radius: 8px;
            padding: 20px;
            border: 1px solid rgba(0, 168, 255, 0.3);
        }
        
        .m29-portal .metric {
            font-size: 2rem;
            font-weight: bold;
            color: var(--quantum-neon);
            text-align: center;
            margin: 10px 0;
        }
        
        .m29-portal .progress-bar {
            height: 10px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            overflow: hidden;
            margin: 10px 0;
        }
        
        .m29-portal .progress {
            height: 100%;
            background: linear-gradient(90deg, var(--quantum-blue), var(--quantum-neon));
            border-radius: 5px;
        }
        
        .m29-portal footer {
            text-align: center;
            padding: 2rem 0;
            margin-top: 3rem;
            border-top: 1px solid rgba(0, 168, 255, 0.3);
        }
        
        @media (max-width: 768px) {
            .m29-portal .grid, .m29-portal .dashboard {
                grid-template-columns: 1fr;
            }
            
            .m29-portal h1 {
                font-size: 2rem;
            }
            
            .m29-portal h2 {
                font-size: 1.5rem;
            }
            
            .m29-portal .controls {
                flex-direction: column;
                align-items: center;
            }
            
            .m29-portal .btn {
                width: 100%;
                justify-content: center;
            }
        }
      `}</style>
      <div className="m29-portal">
        <header>
          <div className="container">
            <h1><i className="fas fa-atom"></i> Portal da Fundação Alquimista</h1>
            <p className="subtitle">Módulo 29 - Integração de Sistemas Quânticos</p>
          </div>
        </header>

        <main className="container">
          <section>
            <h2>Integração de Sistemas da Fundação</h2>
            <p>Este portal implementa os três pilares fundamentais para a próxima era da Fundação: Malha de Dados Fractal, Identidade Multidimensional e Canais Interplanetários.</p>

            <div className="dashboard">
              <div className="dashboard-card">
                <h3><i className="fas fa-project-diagram"></i> Malha de Dados Fractal</h3>
                <div className="metric">87%</div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '87%' }}></div>
                </div>
                <p>Conectividade com GraphQL Federation</p>
              </div>

              <div className="dashboard-card">
                <h3><i className="fas fa-fingerprint"></i> Identidade Multidimensional</h3>
                <div className="metric">92%</div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '92%' }}></div>
                </div>
                <p>WebAuthn e autenticação pós-quântica</p>
              </div>

              <div className="dashboard-card">
                <h3><i className="fas fa-satellite"></i> Canais Interplanetários</h3>
                <div className="metric">78%</div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '78%' }}></div>
                </div>
                <p>Comunicação em tempo real via NATS</p>
              </div>
            </div>
          </section>

          <div className="grid">
            {/* Card da Malha de Dados Fractal */}
            <div className="card">
              <div className="card-header">
                <h3><i className="fas fa-project-diagram"></i> Malha de Dados Fractal</h3>
                <div>
                  <span className="status-indicator status-online"></span>
                  <span>Online</span>
                </div>
              </div>
              <div className="card-content">
                <p>Sistema de gateway GraphQL que unifica todos os fluxos de dados da Fundação em uma malha coerente.</p>
                <h4>Endpoint Principal:</h4>
                <div className="code-block">
                  <span className="comment">&#47;&#47; gateway/server.js</span><br />
                  <span className="keyword">const</span> <span className="variable">gateway</span> = <span className="keyword">new</span> <span className="variable">ApolloGateway</span>(&#123;<br />
                  &nbsp; <span className="variable">serviceList</span>: [&#123; <span className="variable">name</span>: <span className="string">&quot;lab1&quot;</span>, <span className="variable">url</span>: <span className="string">&quot;https://lab1.fundacao/graphql&quot;</span> &#125;, ...]<br />
                  &#125;);
                </div>
              </div>
              <div className="card-footer">
                <div className="controls">
                  <button className="btn" id="query-data">
                    <i className="fas fa-code"></i> Executar Query
                  </button>
                  <button className="btn" id="refresh-schema">
                    <i className="fas fa-sync"></i> Atualizar Schema
                  </button>
                </div>
              </div>
            </div>

            {/* Card de Identidade Multidimensional */}
            <div className="card" id="webauthn-card">
              <div className="card-header">
                <h3><i className="fas fa-fingerprint"></i> Identidade Multidimensional</h3>
                <div>
                  <span className="status-indicator status-online"></span>
                  <span>Online</span>
                </div>
              </div>
              <div className="card-content">
                <p>Sistema de autenticação WebAuthn para identidade pós-quântica e multidimensional.</p>
                <div className="form-group">
                  <label className="form-label" htmlFor="username">Nome de Usuário</label>
                  <input type="text" id="username" className="form-input" placeholder="Seu identificador multidimensional" />
                </div>
              </div>
              <div className="card-footer">
                <div className="controls">
                  <button className="btn" id="register-device">
                    <i className="fas fa-plus-circle"></i> Registrar Dispositivo
                  </button>
                  <button className="btn" id="authenticate">
                    <i className="fas fa-key"></i> Autenticar
                  </button>
                </div>
              </div>
            </div>

            {/* Card de Canais Interplanetários */}
            <div className="card" id="nats-card">
              <div className="card-header">
                <h3><i className="fas fa-satellite"></i> Canais Interplanetários</h3>
                <div>
                  <span ref={natsStatusRef} className="status-indicator status-connecting"></span>
                  <span ref={natsStatusTextRef}>Conectando...</span>
                </div>
              </div>
              <div className="card-content">
                <p>Sistema de mensagens em tempo real para comunicação entre dimensões via NATS.</p>
                <div className="message-list" ref={natsMessagesRef}>
                </div>
              </div>
              <div className="card-footer">
                <div className="form-group">
                  <input ref={messageInputRef} type="text" id="message-input" className="form-input" placeholder="Digite uma mensagem para o multiverso" />
                </div>
                <div className="controls">
                  <button className="btn" id="send-message">
                    <i className="fas fa-paper-plane"></i> Enviar Mensagem
                  </button>
                  <button className="btn" id="connect-nats">
                    <i className="fas fa-plug"></i> Conectar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section>
            <h2>Configuração do Ambiente</h2>
            <p>As variáveis de ambiente necessárias para o funcionamento dos sistemas:</p>
            <div className="code-block">
              <span className="comment">&#47;&#47; .env</span><br />
              <span className="variable">GRAPHQL_PORT</span>=4000<br />
              <span className="variable">NATS_URL</span>=nats://nats.fundacao:4222<br />
              <span className="variable">NATS_TOKEN</span>=seu_token_aqui<br />
              <span className="variable">WEBAUTHN_RP_ID</span>=fundacao.alquimista<br />
              <span className="variable">WEBAUTHN_RP_NAME</span>=Fundação Alquimista<br />
              <span className="variable">WEBAUTHN_ORIGIN</span>=https://portal.fundacao.alquimista
            </div>
            <div className="controls">
              <button ref={deployBtnRef} className="btn btn-primary" id="deploy-all">
                <i className="fas fa-rocket"></i> Implantar Todos os Sistemas
              </button>
            </div>
          </section>
        </main>

        <footer>
          <div className="container">
            <p>Fundação Alquimista © 2024 - Transformando Abstração em Realidade Manifesta</p>
            <p>Próximo ciclo: Ascensão Meta-Autônoma</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Module29PortalPage;

    