FROM node:alpine as build

WORKDIR /app

RUN npm install @angular/cli

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 4200

ENTRYPOINT [ "ng", "serve" ]
