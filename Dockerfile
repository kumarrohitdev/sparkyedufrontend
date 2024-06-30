# Dockerfile
FROM node:20

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (or the port your application runs on)
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]
