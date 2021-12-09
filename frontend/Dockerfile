# ----------------------------------
# BUILDER
# ----------------------------------
FROM node:16.13-alpine3.14 as builder

WORKDIR /usr/src/app

COPY react/package*.json ./
RUN apk update && \
    apk upgrade && \    
    apk add --no-cache --virtual .gyp \
        python3 \
        make \
        g++ \        
    && npm set-script prepare "" \
    && npm install \
    && apk del .gyp

COPY ./react .

RUN npm run build

# ----------------------------------
# FINAL
# ----------------------------------
FROM node:16.13-alpine3.14

WORKDIR /usr/src/app

RUN npm i -g serve

COPY --from=builder /usr/src/app/dist  ./dist

