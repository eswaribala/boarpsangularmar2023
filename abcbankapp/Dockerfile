# stage 1
FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --force
COPY . .
EXPOSE 4200
CMD npm run build --prod

# Stage 2
COPY --from=node
/usr/app/dist/abcbankapp
/usr/share/nginx/html

