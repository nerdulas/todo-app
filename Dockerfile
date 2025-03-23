# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the app files
COPY . .

# Expose the port
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
