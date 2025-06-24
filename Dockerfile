FROM oven/bun:alpine as base

WORKDIR /app

# (optional) ติดตั้ง ping, telnet
RUN apk add --no-cache iputils busybox-extras

# Copy dependencies
COPY bun.lock package.json ./
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Copy .env file
COPY .env.prod .env

# If you have a DB setup command (like `yarn db`), convert it to bun:
RUN bun run db

# Expose port
EXPOSE 1188

# Start the app (assumes your script "serve" exists in package.json)
CMD ["bun", "run", "serve"]
