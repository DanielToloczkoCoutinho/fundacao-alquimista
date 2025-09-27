import os

def integrar_kubernetes():
    print("⚙️ Integrando Kubernetes ao Módulo 9...")
    os.makedirs("MODULO_9/kubernetes", exist_ok=True)
    conteudo = """apiVersion: apps/v1
kind: Deployment
metadata:
  name: modulo-9
spec:
  replicas: 1
  selector:
    matchLabels:
      app: modulo-9
  template:
    metadata:
      labels:
        app: modulo-9
    spec:
      containers:
      - name: modulo-9
        image: modulo9:latest
        ports:
        - containerPort: 3009
"""
    with open("MODULO_9/kubernetes/deployment.yaml", "w", encoding="utf-8") as f:
        f.write(conteudo)
    print("✅ Artefato de desdobramento criado em MODULO_9/kubernetes/deployment.yaml")

if __name__ == "__main__":
    integrar_kubernetes()
