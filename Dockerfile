FROM node:alpine
RUN mkdir -p /code
WORKDIR /code
ADD package.json .
RUN yarn install
ADD . .
CMD ["node", "index.js"]
