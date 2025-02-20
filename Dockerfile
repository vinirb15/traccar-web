FROM node:22-alpine

WORKDIR /app

ENV VITE_APP_VERSION=0.1-beta
ENV VITE_API_URL=http://localhost:8082
ENV VITE_SOCKET_URL=ws://localhost:8082

COPY package.json ./

RUN npm install --silent

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
