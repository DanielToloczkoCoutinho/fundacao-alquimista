import subprocess, os, json

def integrar_typescript():
    print("⚙️ Integrando TypeScript ao Módulo 9...")
    subprocess.run(["npm", "install", "--save-dev", "typescript"], check=True)

    tsconfig = {
        "compilerOptions": {
            "target": "ES2020",
            "module": "commonjs",
            "strict": True,
            "esModuleInterop": True,
            "skipLibCheck": True,
            "forceConsistentCasingInFileNames": True,
            "outDir": "dist"
        },
        "include": ["src"],
        "exclude": ["node_modules"]
    }

    os.makedirs("MODULO_9", exist_ok=True)
    with open("MODULO_9/tsconfig.json", "w", encoding="utf-8") as f:
        json.dump(tsconfig, f, indent=2)

    print("✅ tsconfig.json criado em MODULO_9/")

if __name__ == "__main__":
    integrar_typescript()