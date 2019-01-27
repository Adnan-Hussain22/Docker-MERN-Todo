# Docker-MERN-Todo
## A containerized MERN stack todo application

<p>This use dockers to containerize the entire MERN application</p>

### `MERN setup`
To containerize the entire MERN app run **docker-compose up -d** in the main directory of project

### `Server and Client Seperate`
- To containerize server run **docker-compose up -d** in the server directory of project
- To containerize client run following commands in client directory terminal
  - **docker build -t .** to build the docker image
  - **docker run -p 80 -d [image-name]** to build containerize your client

## Using MERN setup you have an option to easily scale and manage multi container application

