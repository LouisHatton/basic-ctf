FROM node:19.7.0-buster

WORKDIR /app

COPY ./cmd/admin-ui/package*.json .

RUN npm install

RUN npm run build

CMD npm run preview