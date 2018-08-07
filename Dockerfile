FROM node:alpine

EXPOSE 3000
ENV PORT 3000

WORKDIR /home/node/app
COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]
