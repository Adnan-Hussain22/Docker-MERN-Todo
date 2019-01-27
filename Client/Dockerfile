# NOTE:- A TWO STAGE CONTAINERIZATION PROCESS.
# FIRST WE BUILD THE BUILD ARTIFACTS OF REACT APP IN CONTAINER
# SECODNLY WE COPY THAT BUILD ARTIFACTS INTO ACTUAL IMAGE
# SO THE END RESULT WILL BE AN OPTIMIZED IMAGE

#=====================Stage One==============================#

#---------------Build the app------------------

#Using alpine node as base image
FROM mhart/alpine-node as react-build

#Copy all files to 
COPY . /MERN/Client

#set the working dir
WORKDIR /MERN/Client

#install all the depencies
RUN yarn

#make a build
RUN yarn build

#-----it will first build the app in container than run another container----
#-----for the build-----

#=====================Stage Two==============================

#-----------Copy build artifacts into working dir of nginx

#Using nginx server as base image
FROM  nginx:alpine as production

#copy build artifacts into nginx public dir
COPY --from=react-build /MERN/Client/build /usr/share/nginx/html

EXPOSE 80

#entry point
ENTRYPOINT [ "nginx","-g","daemon off;" ]