# ---------- Stage 1: build the React app ----------
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies first so this layer is cached between code changes
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Build the static site into /app/dist
COPY . .
RUN npm run build

# ---------- Stage 2: serve with Nginx (non-root) ----------
FROM nginxinc/nginx-unprivileged:stable-alpine AS runtime

LABEL org.opencontainers.image.title="teknotran-website" \
      org.opencontainers.image.description="Teknotran corporate website served by Nginx" \
      org.opencontainers.image.url="https://teknotran.com"

# Nginx site config and built files
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

# The unprivileged image runs as user nginx (uid 101) and listens on 8080
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1