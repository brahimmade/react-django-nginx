# React-Django-Nginx

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bastiannispel/react-django-nginx/CI%20Frontend?label=CI%20Frontend)
![GitHub last commit](https://img.shields.io/github/last-commit/bastiannispel/react-django-nginx)
![GitHub issues](https://img.shields.io/github/issues/bastiannispel/react-django-nginx)
![GitHub repo size](https://img.shields.io/github/repo-size/bastiannispel/react-django-nginx)

This is a barebone project template for a fullstack web application with a [Typescript](https://www.typescriptlang.org/) [React](https://reactjs.org/) frontend using [Vite](https://vitejs.dev/) as build tool and the [airbnb configuration for eslint](https://www.npmjs.com/package/eslint-config-airbnb) as well as [prettier](https://prettier.io/) for code formatting and [husky](https://github.com/typicode/husky) to setup git hooks. The backend technology is provided by [Django](https://www.djangoproject.com/). It comes with a basic github workflow that runs eslint and checks the formatting of the code. It is setup with [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) to make the deployment easier and quicker.

# A) Installation

### Prerequisites

- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Database

If you want to use the local setup for django you have to install [postgresql](https://www.postgresql.org/) on your machine and setup a database to host loacally.

- [PostgreSQL](https://www.postgresql.org/download/linux/ubuntu/)
- [pgAdmin](https://www.pgadmin.org/download/pgadmin-4-apt/)

### Extensions

If you're using VSCode consider to use the following extensions for this project:

- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Django](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Get started

1. Use this template to create a repository `"Use this template"`
2. Clone your repository to your development environment `git clone ...`
3. Create a `.env` file at the top level of your project (see `.env.sample`)
4. Follow a workflow to setup the project environment :smile:

# B) Workflow

### 1) Local

If you want to omit the use of docker and docker-compose during your development you can setup the environment locally and follow the steps below.

#### Frontend

###### Get started

1.  Navigate to `frontend/react` and run

        npm install

2.  Start Frontend at `localhost:3000` with:

        npm run dev

###### Commands

Run development server at _localhost:3000_ `npm run dev`

Run production build `npm run build`

Serve build at _localhost:5000_ `npm run serve`

Run eslint `npm run style:lint`

Run prettier `npm run style:prettier`

Run code formatting `npm run make-pretty`

Run all style checks `npm run style:all`

#### Backend

###### Get started

1.  Setup your local postgresql database
2.  Make sure the settings in your `.env` match those of your db
3.  Navigate to `backend` and run

        ./start.sh

###### Commands

    start.sh

This script is useful for two situations:

1.  When you want to _create a virtual environment_, _install requirements.txt_, make migrations and migrate them
2.  When your local environment is setup and you want to _start the django server_ at `localhost:8000`

<!-- end of the list -->

    loadenv.sh

**Important:** This command will load the top level `.env` variables and should be used in combination with any `manage.py` script and command e.g. if you want to create a new django app navigate to `backend/djangoapp/` and run:

    source ./loadenv.sh && python manage.py startapp api

#### Proxy

This project uses [Vite](https://vitejs.dev/) as a build tool for the frontend and also for the configuration of a local proxy server to enable the connection between frontend and backend. If you want to add any new endpoints you have to also setup those at `frintend/react/vite.config.ts`

### 2) Staging / Production

###### Get started

1. Setup the `.env` file at the top level of your project
2. Run `docker-compose build` to download all base images and build your project
3. Run `docker-compose run` to start the project on your local machine in a production similar fashion

###### Commands

`Build` docker container with docker-compose

    docker-compose build

`Start` container network with docker-compose

    docker-compose up

Run a one-time `command` against a service e.g.

    docker-compose run --rm django sh -c "python manage.py startapp core"

`Stop` container network

    docker-compose down

`Clear` volumes

    docker-compose down --volumes

#

## Tested and developed under Ubuntu 20.04

You can find this template at https://github.com/bastiannispel/react-django-nginx
