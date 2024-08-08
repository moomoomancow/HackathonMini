FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm install -g nodemon && \
#     npm install

EXPOSE 8080

CMD ["npm", "run", "start"]