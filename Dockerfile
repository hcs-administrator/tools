FROM node:16.16.0-alpine3.16
RUN mkdir /app
WORKDIR /app
COPY ./package.json .
RUN npm i --silent
COPY ./package.json .
EXPOSE 80
ENV NODE_ENV="production"
CMD ["npm","start"]