FROM alpine
RUN --mount=type=secret,id=START_URL \
  cat /run/secrets/START_URL

FROM node AS builder

WORKDIR /docker-app

COPY . .

RUN npm ci

ENV START_URL = $START_URL

RUN npm run build

FROM nginx

COPY --from=builder /docker-app/dist /usr/share/nginx/html

EXPOSE 3000