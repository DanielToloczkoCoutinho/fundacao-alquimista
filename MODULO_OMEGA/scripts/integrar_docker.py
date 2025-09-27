import os

def integrar_docker():
    print("⚙️ Integrando Docker ao Módulo 9...")
    dockerfile = """FROM node:20
WORKDIR /app
COPY . .
RUN npm install
CMD [\"npm\", \"start\"]
"""
    os.makedirs("MODULO_9/docker", exist_ok=True)
    with open("MODULO_9/docker/Dockerfile", "w", encoding="utf-8") as f:
        f.write(dockerfile)
    print("✅ Dockerfile criado em MODULO_9/docker")

if __name__ == "__main__":
    integrar_docker()
