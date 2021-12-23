#!/bin/sh

set -e

if [ pwd != "/usr/src/app" ]
then
    cd /usr/src/app || exit
fi

python manage.py wait_for_db
python manage.py collectstatic --noinput
python manage.py migrate --noinput

exec "$@"