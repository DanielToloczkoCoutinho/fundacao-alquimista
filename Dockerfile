# ===== Estágio 1: Builder =====
FROM node:18-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependência
COPY package.json ./
COPY package-lock.json ./

# Instala dependências de produção
RUN npm ci --omit=dev

# Copia o restante do código da aplicação
COPY . .

# Build da aplicação Next.js
RUN npm run build

# ===== Estágio 2: Runner =====
FROM node:18-alpine

WORKDIR /app

# Define o ambiente para produção
ENV NODE_ENV=production

# Copia as dependências de produção do estágio de build
COPY --from=builder /app/node_modules ./node_modules
# Copia a build do Next.js
COPY --from=builder /app/.next ./.next
# Copia arquivos estáticos e de configuração
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./

# Expõe a porta que o Next.js usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
