FROM node:18.0.0
ENV NODE_ENV = production

WORKDIR /app

COPY --chown=node:node ["package.json", "package-lock.json*", "./"]

RUN npm install --production
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY --chown=node:node .  .

USER node

CMD ["node", "index.js"]