# Estágio 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Estágio 2: Runner
FROM node:18-alpine
WORKDIR /app

# Copiar dependências de produção
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copiar build da aplicação Next.js
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expor a porta e iniciar a aplicação
EXPOSE 3000
CMD ["npm", "start"]
