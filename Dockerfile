# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR .

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app will run on
EXPOSE 4444

# Command to run the app
CMD ["npm", "run","dev"]

