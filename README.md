# React-Django-Nginx

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bastiannispel/react-django-nginx/CI%20Frontend?label=CI%20Frontend)
![GitHub last commit](https://img.shields.io/github/last-commit/bastiannispel/react-django-nginx)
![GitHub issues](https://img.shields.io/github/issues/bastiannispel/react-django-nginx)
![GitHub repo size](https://img.shields.io/github/repo-size/bastiannispel/react-django-nginx)

This is a barebone project template for [React](https://reactjs.org/) apps using [Vite](https://vitejs.dev/) as a build tool and the [airbnb configuration for eslint](https://www.npmjs.com/package/eslint-config-airbnb) as well as [prettier](https://prettier.io/) for code formatting and [husky](https://github.com/typicode/husky) to setup git hooks. It comes with a basic github workflow that runs eslint and checks the formatting of the code.

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
4. Navigate to your projects top level folder and run `docker-compose build`
5. After the build has finished run `docker-compose up` to start the container network
6. Visit `http://localhost:8000/` in your browser to see the development build of the project

# B) Workflow

### Prerequisites

1. Basic understanding of docker container and docker-compose
2. Know how to manage volumes and images

### 1) Local

This Method is meant for frontend or backend only development purposes where no connection between the server and client is required.

#### Frontend

1.  Navigate to `frontend` and run `npm install`
2.  Run `npm husky install` to setup husky git hooks
3.  Start Frontend at `localhost:3000` with:

        npm run dev

#### Backend

1.  Navigate to `backend`
2.  Start your local postgresql database
3.  Make sure the settings in your `.env` match those of your db
4.  Start Backend at `localhost:8000` with:

        ./start.sh

This command will do several things to setup a local environment.

1. Creates a virutal python environment
2. Pip installs the local requirements
3. Makes migrations and migrate
4. Exports the information given in the .env
5. Finally starts the server

### 2) Development

Build all services that need to be built:

    docker-compose -f docker-compose.yml build

Start all services with a container network at

_django:_ `http://localhost:8000/` _react_`http://localhost:3000/`:

    docker-compose -f docker-compose.yml up

### 3) Staging / Production

Build all services that need to be built:

    docker-compose -f docker-compose-deploy.yml build

Start all services with a container network at `127.0.0.1`

    docker-compose -f docker-compose-deploy.yml up

# C) Commands

### Docker Compose

Specify the docker-compose file for each command with `-f docker-compose-file.yml`

`Build` docker container with docker-compose

    docker-compose -f docker-compose-file.yml build

`Start` container network with docker-compose

    docker-compose -f docker-compose-file.yml up

Run a one-time `command` against a service e.g.

    docker-compose -f docker-compose-file.yml  run --rm django sh -c "python manage.py startapp core"

`Stop` container network

    docker-compose -f docker-compose-file.yml down

`Clear` volumes

    docker-compose -f docker-compose-deploy.yml down --volumes

### React

Run Eslint

    npm run style:lint

Run Prettier

    npm run style:prettier

Run Code Formatting

    npm run make-pretty

Run All Style Checks

    npm run style:all

#

#

You can find this template at https://github.com/bastiannispel/react-django-nginx
