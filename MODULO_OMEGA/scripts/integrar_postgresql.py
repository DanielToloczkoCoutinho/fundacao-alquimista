import os
import json

def integrar_postgresql():
    print("🐘 Integrando PostgreSQL à Fundação...")

    # Recriar docker-compose.yml com serviços de banco de dados
    gateway_depends_on_block = ""
    for i in range(1001):
        gateway_depends_on_block += f"      - modulo_{i}\n"

    services_block = ""
    for i in range(1001):
        services_block += f'''
  modulo_{i}:
    build: ./MODULO_{i}
    ports:
      - "{4001 + i}:{4001 + i}"
    depends_on:
      - db_{i}
'''

    db_services_block = ""
    for i in range(1001):
        db_services_block += f'''
  db_{i}:
    image: postgres:14-alpine
    environment:
      POSTGRES_DB: db_modulo_{i}
      POSTGRES_USER: user_{i}
      POSTGRES_PASSWORD: pass_{i}
    volumes:
      - postgres_data_{i}:/var/lib/postgresql/data
    ports:
      - "{5432 + i}:5432"
'''

    volumes_block = "volumes:\n"
    for i in range(1001):
        volumes_block += f"  postgres_data_{i}:\n"

    docker_compose_content = f'''version: '3.8'
services:
  gateway:
    build: ./MODULO_OMEGA
    ports:
      - "4000:4000"
    depends_on:
{gateway_depends_on_block}
{services_block}
{db_services_block}
{volumes_block}
'''
    with open("docker-compose.yml", "w", encoding="utf-8") as f:
        f.write(docker_compose_content)
    print("  -> docker-compose.yml reescrito com os serviços de banco de dados PostgreSQL.")

    # Adicionar configuração do banco de dados ao package.json de cada módulo
    for i in range(1001):
        package_path = f"MODULO_{i}/apollo_server/package.json"
        with open(package_path, "r+", encoding="utf-8") as f:
            package_data = json.load(f)
            package_data["database"] = {
                "type": "postgres",
                "host": f"db_{i}",
                "port": 5432,
                "username": f"user_{i}",
                "password": f"pass_{i}",
                "database": f"db_modulo_{i}"
            }
            f.seek(0)
            json.dump(package_data, f, indent=2)
            f.truncate()
    print("  -> Configuração do banco de dados adicionada aos package.json dos módulos.")

    print("✅ Integração do PostgreSQL concluída.")

if __name__ == "__main__":
    integrar_postgresql()
