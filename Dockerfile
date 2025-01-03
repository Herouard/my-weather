# Use the official Node.js image from the Docker Hub
FROM node:lts

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the container image.
COPY . .

# If .env does not exist, copy .env.default to .env
RUN if [ ! -f .env ]; then cp .env.default .env; fi

# Expose the port the app runs on
EXPOSE 3000

# Run the web service on container startup.
CMD ["node", "server.js"]