# Use an official Node runtime based on Alpine as a parent image
FROM node:alpine

# Install 'pnpm'
RUN npm install -g pnpm

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package*.json files to the working directory
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install any needed packages specified in package.json
RUN pnpm install

# Bundle app source
COPY . .

# Define the command to run your app
CMD [ "pnpm", "run", "dev" ]
