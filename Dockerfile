# Use the official Node.js 20 image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy over the prisma schema
COPY prisma/schema.prisma ./prisma/

# Generate the prisma client based on the schema
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Use this to generate the Schema
RUN npx prisma db push

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]
