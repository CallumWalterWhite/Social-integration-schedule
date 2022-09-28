
FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /opt/app

COPY ["api/package.json", "api/package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]