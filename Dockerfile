# Base image
FROM node:18-alpine

# Working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Build app for production
RUN npm run build

# Expose the Next.js port
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]