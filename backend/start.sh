#!/bin/bash
export $(grep -v '^#' ../.env | xargs)

if [ ! -d ".env" ]
then
  python3 -m venv .env
  source .env/bin/activate

  pip install -r requirements.txt
  
  cd ./djangoapp || exit
  python manage.py makemigrations
  python manage.py makemigrations core
  cd .. || exit
  deactivate
fi

source .env/bin/activate
cd ./djangoapp || exit
python manage.py migrate
python manage.py runserver