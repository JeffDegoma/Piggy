FROM node:lts-alpine3.9

WORKDIR /usr/local/app

COPY package.*json ./

RUN npm i

COPY . ./

EXPOSE 9000

CMD ["npm", "run", "dev"]