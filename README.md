# React-Django-Nginx

![GitHub package.json version](https://img.shields.io/github/package-json/v/bastiannispel/react-django-nginx)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bastiannispel/react-django-nginx/CI%20Frontend?label=CI%20Frontend)
![GitHub last commit](https://img.shields.io/github/last-commit/bastiannispel/react-django-nginx)
![GitHub issues](https://img.shields.io/github/issues/bastiannispel/react-django-nginx)
![GitHub repo size](https://img.shields.io/github/repo-size/bastiannispel/react-django-nginx)

This is a barebone project template for [React](https://reactjs.org/) apps using [Vite](https://vitejs.dev/) as a build tool and the [airbnb configuration for eslint](https://www.npmjs.com/package/eslint-config-airbnb) as well as [prettier](https://prettier.io/) for code formatting and [husky](https://github.com/typicode/husky) to setup git hooks. It comes with a basic github workflow that runs eslint and checks the formatting of the code.

# A) Installation

### Prerequisites

- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

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
3. Navigate to your projects top level folder and run `docker-compose build`
4. After the build has finished run `docker-compose up` to start the container network
5. Visit `http://localhost:8000/` in your browser to see the development build of the project

# B) Workflow

### Local

This Method is only for frontend development purposes where no backend connection is necessary.
Because the backend is wired with a postgresql database and I wanted to avoid installation overheads there is no local setup for django.
Please consider to follow the development workflow descibred below to ensure the maximal compability.

#### Get started

1. Navigate to your project folders top level and run `npm install`
2. Run `npm run prepare` to setup husky git hooks

Start Frontend at `localhost:3000`:

    npm run dev

Start Backend:

    ----

### Development

Build all services that need to be built:

    docker-compose -f docker-compose.yml build

Start all services with a container network at

_django:_ `http://localhost:8000/` _react_`http://localhost:3000/`:

    docker-compose -f docker-compose.yml up

### Staging / Production

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
