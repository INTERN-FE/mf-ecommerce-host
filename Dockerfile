FROM node:alpine as builder

# Environtment Setup
ARG BASE_HOST_URL
ARG MF_LIST_PRODUCT_HOST_URL
ARG MF_PAYMENT_CART_HOST_URL

ENV BASE_HOST_URL=$BASE_HOST_URL
ENV MF_LIST_PRODUCT_HOST_URL=$MF_LIST_PRODUCT_HOST_URL
ENV MF_PAYMENT_CART_HOST_URL=$MF_PAYMENT_CART_HOST_URL

# Build the App
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build

EXPOSE 4250
RUN apk add --no-cache bash

CMD [ "yarn", "build:start" ]