FROM node:latest

WORKDIR /usr/local/app

COPY package.*json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]