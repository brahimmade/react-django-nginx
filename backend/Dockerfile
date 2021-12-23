FROM python:3.9-alpine3.13 as base

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src
RUN mkdir -p /usr/src/app

COPY ./requirements.txt .
RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apk add --update --no-cache postgresql-client && \
    apk add --update --no-cache --virtual .tmp-deps \
        build-base postgresql-dev musl-dev && \
    /py/bin/pip install -r ./requirements.txt && \    
    apk del .tmp-deps

ENV PATH="/py/bin:$PATH"

COPY ./entrypoint.sh /usr/src
RUN chmod +x /usr/src/entrypoint.sh
ENTRYPOINT ["/usr/src/entrypoint.sh"]

FROM base as prod
WORKDIR /usr/src/app
COPY ./djangoapp .

