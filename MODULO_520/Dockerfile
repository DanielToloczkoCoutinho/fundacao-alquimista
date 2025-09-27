FROM node:18-alpine
WORKDIR /usr/src/app
COPY apollo_server/package*.json ./
RUN npm install
COPY apollo_server/index.js .
COPY graphql/schema.graphql ./graphql/
EXPOSE 4521
CMD [ "node", "index.js" ]
