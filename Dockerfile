# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=18.19.0
ARG PNPM_VERSION=10.5.2

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

# Install pnpm.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

WORKDIR /usr/src/app

# **Copy only package.json and pnpm-lock.yaml first (to use Docker caching)**
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.local/share/pnpm/store to speed up subsequent builds.
# Leverage a bind mounts to package.json and pnpm-lock.yaml to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts

# Copy the rest of the source files into the image.
COPY . .

# Install backend and frontend dependencies.
USER root
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm -r install --frozen-lockfile --ignore-scripts

# Change the working directory to the 'node' user
USER node

# Expose the port that the application listens on.
EXPOSE 3000
EXPOSE 3001

# Run the application. Will get overridden by docker-compose.
CMD pnpm backend:start && pnpm frontend:start
