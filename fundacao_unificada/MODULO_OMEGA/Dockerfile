FROM node:18-alpine
WORKDIR /usr/src/app
COPY gateway/package*.json ./
RUN npm install
COPY gateway/index.js .
EXPOSE 4000
CMD [ "node", "index.js" ]
