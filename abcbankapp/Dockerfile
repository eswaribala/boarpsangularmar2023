FROM node:16.13.1-alpine3.13 as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx as runtime
COPY --from=build /app/dist/MyAngularApp /usr/share/nginx/html
