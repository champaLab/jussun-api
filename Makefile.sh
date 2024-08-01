#!/bin/bash

# Define container name
CONTAINER_NAME="jutsun-api"

# Check if the container is already running
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping and removing existing container $CONTAINER_NAME..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# Start the container with Docker Compose
docker-compose up -d --build
