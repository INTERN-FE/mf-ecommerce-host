#
#   Copyright Intern MSIB6 @ PT Len Industri (Persero)
#
#   THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
#   TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
#   OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
#   OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
#   PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
#
#   Created Date: Tuesday, March 19th 2024, 12:39:01 pm
#   Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
#

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
RUN yarn build:prod

EXPOSE 4250
RUN apk add --no-cache bash

CMD [ "yarn", "build:start" ]