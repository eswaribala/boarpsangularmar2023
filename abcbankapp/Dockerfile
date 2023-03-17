# stage 1
FROM node:alpine
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install --force
COPY . /app
EXPOSE 4200
CMD npm run build --prod

