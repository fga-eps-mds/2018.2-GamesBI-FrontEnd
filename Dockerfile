FROM node:8.12

ENV REACT_APP_CROSSDATA_URL=$REACT_APP_CROSSDATA_URL

RUN npm install -g serve

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -qy
COPY . ./
RUN npm run build
CMD serve -p $PORT -s build
