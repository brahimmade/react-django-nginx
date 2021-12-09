#!/bin/bash

env_file=$(dirname $(dirname $(dirname $(realpath "$0"))))/.env

# RUN OPTIONS
for arg in "$@"; do
  case $arg in
  -h | --help)
    echo "COMMAND LINE FLAGS "
    echo "-e | --env     Path to the .env file to load"
    exit 0
    ;;
  -e=* | --env=*)
    echo "${arg#*=}"
    env_file="${arg#*=}"    
    shift
    ;;
  esac
done

set -a
source $env_file
set +a