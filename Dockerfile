FROM node AS builder

WORKDIR /docker-app

COPY . .

RUN npm install

RUN npm run build

FROM nginx

COPY --from=builder /docker-app/dist /usr/share/nginx/html

EXPOSE 3000