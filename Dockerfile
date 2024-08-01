# Use the official Node.js image as a parent image
FROM node:18-bullseye-slim

# Set the working directory in the container
WORKDIR /app

# Install necessary packages
RUN apt update -y && \
    apt install -y iputils-ping telnet && \
    rm -rf /var/lib/apt/lists/*

# Copy package.json and yarn.lock
COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN yarn install  
# RUN yarn install --frozen-lockfile

# Install PM2 globally
RUN yarn global add pm2

# Copy the rest of the application code
COPY . .

# Copy environment file
COPY .env.prod .env

# Generate Prisma client
RUN yarn db

# Remove environment files
# RUN rm -rf .env*

# Build the TypeScript code
RUN yarn build

# Expose the port the app runs on
EXPOSE 1101

# Command to run the application with PM2 using yarn serv
CMD ["yarn", "serve"]
