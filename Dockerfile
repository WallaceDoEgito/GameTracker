FROM node:alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/game-tracker/browser usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.config
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]

