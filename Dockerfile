FROM node:latest

COPY ./Application /Application

WORKDIR /Application

RUN node main.mjs