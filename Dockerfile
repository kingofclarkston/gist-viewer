FROM node:14-alpine3.11 as builder

WORKDIR /app

COPY ./app/package*.json ./

RUN npm ci

COPY app ./

RUN ./node_modules/typescript/bin/tsc -p tsconfig.build.json

EXPOSE 4000

CMD ["npm", "start"]

FROM node:14-alpine3.11

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env* ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json

CMD ["npm", "start"]
