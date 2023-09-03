FROM node:18.17.1-alpine
RUN npm install -g http-server
RUN mkdir /app
WORKDIR /app
# COPY dls_vue-components-application/package*.json ./
COPY package*.json ./
RUN npm install
# COPY dls_vue-components-application .
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ]