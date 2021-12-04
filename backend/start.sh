#!/bin/bash
if [ ! -d ".env" ]
then
  python3 -m venv .env
  source .env/bin/activate
  pip install -r requirements.txt
  echo "makemigrations"
  cd ./djangoapp || exit
  python manage.py makemigrations
  python manage.py migrate
  cd .. || exit
  deactivate
fi

source .env/bin/activate
cd ./djangoapp || exit
python manage.py runserver