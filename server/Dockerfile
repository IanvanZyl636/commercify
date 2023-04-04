# Stage 1: run dev
FROM node:lts AS dev
WORKDIR /app
CMD ["npm", "run", "debug"]

# Stage 2: run build
# FROM node:lts AS build
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build

## Stage 3: run prod build
#FROM node:lts-alpine AS prod-build
#COPY package.json package-lock.json ./
#RUN npm install --production
#
## Stage 4: run prod
#FROM node:lts-alpine AS prod
#ENV NODE_ENV production
#WORKDIR /app
##RUN addgroup --system --gid 1001 nodejs
##RUN adduser --system --uid 1001 nextjs
#COPY --from=build ./dist .
#COPY --from=prod-build ./node_modules ./node_modules
#EXPOSE 5000
##ENV PORT 3000
#CMD ["node", "app.js"]
