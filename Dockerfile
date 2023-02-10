# Multi Stage Dockerfile
FROM node:14 as developement

WORKDIR /app

COPY package.json .

ARG NODE_ENV

RUN npm install

# COPY index.js .
COPY . .

EXPOSE 4000

CMD ["npm" ,"run","start-dev"]


FROM node:14 as production

WORKDIR /app

COPY package.json .

ARG NODE_ENV

RUN npm install --only=production

# COPY index.js .
COPY . .

EXPOSE 4000

CMD ["npm" ,"run","start-dev"]
