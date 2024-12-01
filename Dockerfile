FROM node:18-bullseye-slim

# Set working directory
WORKDIR /app

RUN apt update -y
RUN apt install -y iputils-ping telnet

# Install PM2 globally
RUN yarn global add pm2

# Copy package.json and install dependencies
COPY package.json .
RUN yarn 

# Copy the rest of the application code
COPY . .

# Copy the production .env file
COPY .env.prod .env

RUN yarn db

# Build the application
RUN yarn build

# Expose the desired port
EXPOSE 1188

# Start the application
CMD ["yarn", "serve"]
