# Use the official Node.js image as the base image
FROM node:23-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install 
#--frozen-lockfile

# Copy the entire application source code
COPY . .

# Build the application
CMD ["npm", "run", "dev"]
