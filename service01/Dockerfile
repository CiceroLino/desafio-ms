# DEVELOPMENT ENVIRONMENT

FROM node:18-alpine AS development

WORKDIR /usr/src/app

COPY ./package*.json .

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start:prod"]
