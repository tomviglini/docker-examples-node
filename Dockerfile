FROM node:alpine
RUN mkdir -p /code

WORKDIR /code

ADD ./pub-sub/consumer/package.json ./pub-sub/consumer/package.json
ADD ./pub-sub/producer/package.json ./pub-sub/producer/package.json

WORKDIR /code/pub-sub/consumer
RUN yarn install

WORKDIR /code/pub-sub/producer
RUN yarn install

WORKDIR /code
ADD . .
CMD ["node", "index.js"]
