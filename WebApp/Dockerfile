FROM mhart/alpine-node:11 AS builder
WORKDIR /usr/src/app/client
COPY . .
RUN npm install react-scripts -g --silent
RUN yarn install
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /usr/src/app/client/build .
CMD ["serve", "-p", "80", "-s", "."]doc





# # pull official base image
# FROM node:13.12.0-alpine

# # set working directory
# WORKDIR /usr/src/app/client

# # add `/app/node_modules/.bin` to $PATH
# #ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# # add app
# COPY . ./

# # start app
# CMD ["npm", "start"]