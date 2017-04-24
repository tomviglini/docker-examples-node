FROM node:alpine

RUN apk add --no-cache libc6-compat

RUN mkdir -p /code

WORKDIR /code

ADD ./pub-sub/consumer/package.json ./pub-sub/consumer/package.json
ADD ./pub-sub/producer/package.json ./pub-sub/producer/package.json

WORKDIR /code/pub-sub/consumer
RUN yarn install --production

WORKDIR /code/pub-sub/producer
RUN yarn install --production

WORKDIR /code
ADD . .
CMD ["node", "index.js"]
