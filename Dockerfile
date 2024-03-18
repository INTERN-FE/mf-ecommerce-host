FROM node:21.7.1-alpine
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN apk add --no-cache git
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . ./

CMD ["npm", "start"]