# pull official base image
FROM node:14.15.3-alpine

# set working directory
WORKDIR /usr/src/swiftmeal-frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/swiftmeal-frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

EXPOSE 3000
# start app
CMD ["npm", "start"]