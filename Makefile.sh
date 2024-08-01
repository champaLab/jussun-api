#!/bin/bash

# Function to handle errors
handle_error() {
  echo "An error occurred. Exiting."
  exit 1
}

# Define container name
CONTAINER_NAME="jutsun-api"
PORT=1144

# Step 1: Stop and remove existing containers (including orphans)
echo "Stopping and removing existing containers..."
docker compose down --remove-orphans || handle_error

# Check if the container is still running and stop/remove if needed
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping and removing existing container $CONTAINER_NAME..."
    docker stop $CONTAINER_NAME || handle_error
    docker rm $CONTAINER_NAME || handle_error
fi

# Optional: Check if the port is in use and print a message
echo "Checking if port $PORT is in use..."
if sudo lsof -i :$PORT; then
  echo "Port $PORT is in use. Please check for conflicts."
else
  echo "Port $PORT is not in use."
fi

# Step 2: Rebuild and start containers
echo "Rebuilding and starting containers..."
docker compose up -d --build || handle_error

echo "Containers have been restarted."
