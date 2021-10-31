FROM node:16.13.0-alpine3.14

RUN mkdir /home/node/web && chown node:node /home/node/web 
USER node

WORKDIR /home/node/web

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .

EXPOSE 3000
CMD ["npm", "start"]
