# React-Django-Nginx

![GitHub package.json version](https://img.shields.io/github/package-json/v/bastiannispel/react-django-nginx)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bastiannispel/react-django-nginx/ci-frontend?label=CI%20Frontend)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bastiannispel/react-django-nginx/ci-backend?label=CI%20Backend)
![GitHub last commit](https://img.shields.io/github/last-commit/bastiannispel/react-django-nginx)
![GitHub issues](https://img.shields.io/github/issues/bastiannispel/react-django-nginx)
![GitHub repo size](https://img.shields.io/github/repo-size/bastiannispel/react-django-nginx)

This is a barebone project template for [React](https://reactjs.org/) apps using [Vite](https://vitejs.dev/) as a build tool and the [airbnb configuration for eslint](https://www.npmjs.com/package/eslint-config-airbnb) as well as [prettier](https://prettier.io/) for code formatting and [husky](https://github.com/typicode/husky) to setup git hooks. It comes with a basic github workflow that runs eslint and checks the formatting of the code.


# A) Installation
1. Use this template to create a repository `"Use this template"`
2. Clone your repository to your local machine `git clone ...`


# B) React

### Get started
1. Navigate to your project folders top level and run `npm install`
2. Run `npm run prepare` to setup husky git hooks
3. Run `npm run dev` to start the frontend at `localhost:3000`

### Badges
If you want to use the badges shown above for your project you have to adapt the repository owner and name in the urls to your corresponding ones.

### Extensions
If you're using VSCode consider to use the following extensions for this project:

- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


### Scripts

Run Linter

    npm run style:lint

Run Prettier

    npm run style:prettier

Run Code Formatting

    npm run make-pretty

Run All Style Checks

    npm run style:all


# C) Django
### Prerequisites
- Python >=3.6
- python3-pip

### Get started
1. Rename the directories `./backend/djangoapp/djangoapp` to `./backend/*newname*/*newname*`
2. Search `djangoapp` and replace it with `*newname*` in all files within all subdirectories of `backend` 
3. Navigate to the directory `backend` and run `./start` to start the intallation and spin up the django server


### Extensions
If you're using VSCode consider to use the following extensions for this project:

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Django](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django)
- [SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)


### Scripts
Setup .env, install dependencies and start django server
    
    cd backend
    ./start.sh


#
#
You can find this template at https://github.com/bastiannispel/react-django-nginx
