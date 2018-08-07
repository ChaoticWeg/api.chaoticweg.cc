FROM node:alpine

EXPOSE 80
ENV PORT 80

WORKDIR /home/node/app
COPY package*.json ./
RUN npm install

COPY . .

CMD [ "node", "index.js" ]
