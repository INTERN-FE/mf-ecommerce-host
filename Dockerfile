FROM node:alpine as builder

# Build the App
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build

EXPOSE 4250
RUN apk add --no-cache bash

CMD [ "yarn", "build:start" ]