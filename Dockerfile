FROM node:latest

WORKDIR /root/demo

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]