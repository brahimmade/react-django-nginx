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

In order to use development related pip or node module you will have to install them locally in the appropriate directory.

#### Frontend

###### Get started

1.  Navigate to `frontend/react` and run

        npm install

###### Commands

Run eslint `npm run style:lint`

Run prettier `npm run style:prettier`

Run code formatting `npm run make-pretty`

Run all style checks `npm run style:all`

#### Backend

###### Get started

1.  Navigate to `backend` and run

        python3 -m venv venv

2.  Activate the virtual environment

        source ./venv/bin/activate

3.  Install pip modules with

        pip install -r requirements.txt

### 2) Development

###### Get started

1. Setup the `.env` file at the top level of your project
2. Run `docker-compose -f docker-compose-dev.yml build` to download all base images and build your project
3. Run `docker-compose -f docker-compose-dev.yml up` to create a network and spin up the services

### 3) Staging / Production

Specify `-f docker-compose-prod.yml`

#

## Tested and developed under Ubuntu 20.04

You can find this template at https://github.com/bastiannispel/react-django-nginx
