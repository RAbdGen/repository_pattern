FROM node:latest

COPY ./Application /Application

WORKDIR /Application

CMD node main.mjs