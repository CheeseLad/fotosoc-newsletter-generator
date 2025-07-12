# Build stage
FROM node:24-alpine3.21 AS build

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Set build arguments with defaults
ARG VITE_API_URL
ARG VITE_LISTMONK_MODE

# Set environment variables
ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_LISTMONK_MODE=${VITE_LISTMONK_MODE}

# Build the application
RUN npm run build

# Production stage
FROM nginx:1.29.0-alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Copy nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy built application from build stage
COPY --from=build /app/dist /var/www/html/

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:80/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]