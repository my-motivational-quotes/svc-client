FROM node:22 AS build

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --force
COPY . .
RUN npm run build

FROM node:22

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --omit=dev --force
COPY --from=build /app/next.config.mjs .
COPY --from=build /app/postcss.config.mjs .
COPY --from=build /app/jsconfig.json .
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next

CMD ["npm", "start"]