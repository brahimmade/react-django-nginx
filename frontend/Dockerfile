FROM node:16.13-alpine3.14 as base
WORKDIR /usr/src

COPY react/package*.json ./
RUN npm install && npm cache clean --force
ENV PATH /usr/src/node_modules/.bin:$PATH


FROM base as builder
WORKDIR /usr/src/app
RUN apk update && \
    apk upgrade && \    
    apk add --no-cache --virtual .gyp \
        python3 \
        make \
        g++ \        
    && apk del .gyp

COPY ./react .
RUN npm run build


FROM node:16.13-alpine3.14 as prod
WORKDIR /usr/src/app
RUN npm i -g serve
COPY --from=builder /usr/src/app/dist ./dist