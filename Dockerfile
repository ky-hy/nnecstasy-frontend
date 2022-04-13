FROM node:16.14.2-alpine
WORKDIR /app/

COPY ./app/package.json ./app/yarn.lock /app/
RUN yarn install --frozen-lockfile
COPY ./app/ /app/

CMD [ "yarn", "build" ]
