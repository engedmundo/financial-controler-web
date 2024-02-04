# Use the official Node.js image as base
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json /app

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

RUN npm run build

# Expose the port that Vite will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "preview"]
