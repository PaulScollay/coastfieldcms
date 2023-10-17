FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN yarn install
RUN yarn build

FROM base as runtime

ENV PAYLOAD_SECRET=9d3d268ffc50528a62f8bcb4
ENV DATABASE_URI=mongodb+srv://doadmin:UdV819Khp72365nv@db-mongodb-lon1-55401-fcb10dfc.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=db-mongodb-lon1-55401
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./

RUN yarn install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
