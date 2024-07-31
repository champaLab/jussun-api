# Use the official Node.js image as a parent image
FROM node:18-bullseye-slim

# Set the working directory in the container
WORKDIR /app

RUN apt update -y
RUN apt install -y iputils-ping telnet

# Copy package.json and yarn.lock
COPY package.json  .
COPY yarn.lock .

# Install dependencies
RUN yarn 

# Install PM2 globally
RUN yarn global add pm2

# Copy the rest of the application code
COPY . .

COPY .env.dev .env

RUN yarn prisma generate

RUN rm -rf .env*

# Build the TypeScript code
RUN yarn build

# Expose the port the app runs on
EXPOSE 1144

# Command to run the application with PM2 using yarn serv
CMD ["yarn", "serv"]
