FROM node:18-bullseye-slim

# Set working directory
WORKDIR /app

RUN apt update -y
RUN apt install -y iputils-ping telnet

# Install pnpm
RUN npm install -g pnpm

# Install PM2 globally
RUN pnpm global add pm2

# Copy package.json and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm 

# Copy the rest of the application code
COPY . .

# Copy the production .env file
COPY .env.prod .env

RUN pnpm db

# Build the application
RUN pnpm build

# Expose the desired port
EXPOSE 1177

# Start the application
CMD ["pnpm", "serve"]
