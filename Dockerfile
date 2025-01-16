# 1. Use the official Node.js image as the base
FROM node:18

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json files to install dependencies
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the project files
COPY . .

# 6. Build the application for production (optional if the container is used for serving production)
RUN npm run build

# 7. Expose the port the application runs on
EXPOSE 5173

# 8. Default command to run the application in development mode
CMD ["npm", "start"]
