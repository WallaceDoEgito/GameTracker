FROM node:alpine

WORKDIR /app

RUN npm install -g @angular/cli

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 4200

ENTRYPOINT [ "ng", "serve"]
CMD [ "--host", "0.0.0.0", "--disable-host-check" ]
