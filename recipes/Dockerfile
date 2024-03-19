FROM node:20

# this is for inside the image, not the local working dir
WORKDIR /usr/src/app

# copy package*.json from the current directory (local directory where i'm building my docker) into ./ directory inside my image
COPY package*.json ./

# RUN is something you want to run as part of building your docker image
RUN npm install

# copy files
COPY src/ ./src
COPY public/ ./public
COPY server/ ./server

# RUN npm run build 
EXPOSE 3002

# CMD is different than RUN 
# CMD executes when docker container starts  
CMD ["npm", "start"]