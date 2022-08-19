FROM node:alpine

LABEL maintainer = "leekhil"

WORKDIR /home/mqttcode

COPY subscriber.js /home/mqttcode/

RUN npm install mqtt

CMD ["node","subscriber.js"]