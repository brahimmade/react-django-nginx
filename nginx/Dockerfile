FROM nginxinc/nginx-unprivileged:1-alpine

USER root

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

USER nginx

WORKDIR /usr/src/app