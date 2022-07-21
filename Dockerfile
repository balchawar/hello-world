FROM  node:14.17.1-alpine3.11

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon && npm install

COPY . .

EXPOSE 18081

CMD [ "nodemon", "app.js" ]