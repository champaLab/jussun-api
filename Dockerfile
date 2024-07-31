# Use the official Node.js image as the base image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Compile TypeScript code
RUN yarn build

# Use a smaller Node.js image for production
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy the compiled code and dependencies from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/yarn.lock ./yarn.lock

# Expose port 1144
EXPOSE 1144

# Start the application
CMD ["node", "dist/index.js"]
