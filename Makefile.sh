#!/bin/bash

# Define container name and port
CONTAINER_NAME="jutsun-api"
PORT=1101

# Function to handle errors
handle_error() {
  echo "An error occurred. Exiting."
  exit 1
}

# Step 1: Check if there are uncommitted changes and commit if necessary
echo "Checking for uncommitted changes..."
if git diff --quiet && git diff --cached --quiet; then
  echo "No changes detected."
else
  echo "Uncommitted changes detected. Adding and committing changes..."
  git add .
  git commit -m 'Auto commit before restarting containers'
  if [ $? -ne 0 ]; then
    echo "Failed to commit changes. Exiting."
    exit 1
  fi
fi

# Step 2: Stop and remove existing containers (including orphans)
echo "Stopping and removing existing containers..."
docker-compose down --remove-orphans || handle_error

# Optional: Check if the port is in use and print a message
echo "Checking if port $PORT is in use..."
if sudo lsof -i :$PORT; then
  echo "Port $PORT is in use. Please check for conflicts."
  # Optionally stop processes using the port
  sudo lsof -ti :$PORT | xargs sudo kill -9
else
  echo "Port $PORT is not in use."
fi

# Step 3: Rebuild and start containers
echo "Rebuilding and starting containers..."
docker-compose up -d --build || handle_error

echo "Containers have been restarted."
