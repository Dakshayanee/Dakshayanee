FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
cmd node server.js
EXPOSE 7000