FROM node:10.10

RUN npm install -g serve

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -qy
COPY . ./
RUN npm run build
CMD serve -p $PORT -s build
