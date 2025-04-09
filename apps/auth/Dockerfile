FROM node:latest

WORKDIR /app

RUN npm i -g @nestjs/cli

COPY . .

RUN npm install --save-dev

RUN npm install --save


RUN npx prisma generate


# RUN npm run build

EXPOSE 3001

CMD ["npm", "run","start:dev"]