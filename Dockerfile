FROM node:20.11.1

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3020

CMD ["node", "app.js"]