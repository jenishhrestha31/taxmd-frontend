# ========================
# 1️⃣ Base build stage
# ========================
FROM node:20-alpine AS builder

# Root Directory of project
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# This copies everything in your project directory
COPY . .

# Build the Next.js app
RUN yarn build

# =========================
# 2️⃣ Final runtime stage
# =========================
FROM node:20-alpine AS runner

WORKDIR /app

# Only copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

# Install production deps only
RUN yarn install --frozen-lockfile --production

# Port Next.js listens on
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
