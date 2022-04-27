FROM node:18.0.0-alpine
ENV NODE_ENV = production

WORKDIR /app

COPY  package*.json ./
RUN  npm install -- production
RUN  mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY --chown=node:node . .
USER node
CMD ["npm" ,"start"]
