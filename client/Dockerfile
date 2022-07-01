# Stage 1: build dev and prod
FROM node:lts-alpine AS build
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json .
RUN npm i
COPY . .
RUN npm run build

# Stage 2: run dev
FROM node:lts-alpine AS dev
WORKDIR /app
COPY --from=build /app/. .
CMD ["npm", "run", "dev"]

# Stage 3: run prod
FROM node:lts-alpine AS prod
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]