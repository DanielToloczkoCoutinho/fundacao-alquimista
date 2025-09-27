import os

def integrar_docker():
    print("🐳 Integrando Docker à Fundação...")

    # .dockerignore
    dockerignore_content = '''node_modules
npm-debug.log
Dockerfile*
.dockerignore
'''
    with open(".dockerignore", "w", encoding="utf-8") as f:
        f.write(dockerignore_content)
    print("  -> .dockerignore criado na raiz do projeto.")

    # Dockerfile para os módulos de serviço (0-1000)
    for i in range(1001):
        module_path = f"MODULO_{i}"
        dockerfile_content = f'''FROM node:18-alpine
WORKDIR /usr/src/app
COPY apollo_server/package*.json ./
RUN npm install
COPY apollo_server/index.js .
COPY graphql/schema.graphql ./graphql/
EXPOSE {4001 + i}
CMD [ "node", "index.js" ]
'''
        os.makedirs(module_path, exist_ok=True)
        with open(os.path.join(module_path, "Dockerfile"), "w", encoding="utf-8") as f:
            f.write(dockerfile_content)
    print("  -> Dockerfiles criados para os 1001 Módulos de Serviço.")

    # Dockerfile para o Gateway (Módulo Ômega)
    gateway_dockerfile_content = '''FROM node:18-alpine
WORKDIR /usr/src/app
COPY gateway/package*.json ./
RUN npm install
COPY gateway/index.js .
EXPOSE 4000
CMD [ "node", "index.js" ]
'''
    with open("MODULO_OMEGA/Dockerfile", "w", encoding="utf-8") as f:
        f.write(gateway_dockerfile_content)
    print("  -> Dockerfile criado para o Módulo Ômega (Gateway).")

    # docker-compose.yml
    services_block = ""
    depends_on_block = ""
    for i in range(1001):
        services_block += f'''
  modulo_{i}:
    build: ./MODULO_{i}
    ports:
      - "{4001 + i}:{4001 + i}"'''
        depends_on_block += f"      - modulo_{i}\n"

    docker_compose_content = f'''version: '3.8'
services:
  gateway:
    build: ./MODULO_OMEGA
    ports:
      - "4000:4000"
    depends_on:
{depends_on_block}
{services_block}
'''
    with open("docker-compose.yml", "w", encoding="utf-8") as f:
        f.write(docker_compose_content)
    print("  -> docker-compose.yml criado na raiz do projeto.")

    print("✅ Integração do Docker concluída.")

if __name__ == "__main__":
    integrar_docker()
