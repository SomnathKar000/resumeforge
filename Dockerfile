FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN apk add --no-cache chromium noto-sans
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps ./apps
COPY package*.json ./
EXPOSE 3000
CMD ["npm", "start", "--workspace=apps/server"]