# IMPORTANT----------------------------------
# : BASED ON THIS FILE YOU WILL BE ABLE TO ONLY CONTAINERIZED THE EXPRESS SERVER
# SO YOU HAVE TO EXPLICITLY LINK THE DB CONTAINER WITH SERVER CONTAINER, 
# EITHER USING LINK OR NETWORK
# OR USE COMPOSE FILE TO RUN SERVER WITH DB

#using alpine as base image
FROM alpine

#maintainer
LABEL maintainer="adnanrajput42@gmail.com"

#install node and npm
RUN apk add --update nodejs nodejs-npm

#Working directory
WORKDIR /MERN/Node/Src

#copy package.json
COPY package.json  /MERN/Node/Src

#Install all the dependencies
RUN npm install

#Copy all files to 
COPY . /MERN/Node/Src

#port mapping
EXPOSE 5001

#Entrypoint
ENTRYPOINT [ "npm","start" ]