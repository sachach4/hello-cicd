FROM node:latest

WORKDIR /client
ADD . /client/
COPY package.json /client/
RUN npm install
RUN npm install node-sass
RUN npm rebuild node-sass
EXPOSE 3000
CMD ["npm", "start"]