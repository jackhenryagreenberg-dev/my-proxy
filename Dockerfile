# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json into the container
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose port 8080
EXPOSE 8080

# Command to run your app
CMD ["npm", "start"]
