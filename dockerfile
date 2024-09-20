FROM node:20.12.0-alpine3.19

WORKDIR /app

ARG DATABASE_URL
ARG JWT_SECRET
ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL

RUN echo "DATABASE_URL=${DATABASE_URL}" && \
    echo "NEXTAUTH_URL=${NEXTAUTH_URL}" && \
    echo "JWT_SECRET=${JWT_SECRET}" && \
    echo "NEXTAUTH_SECRET=${NEXTAUTH_SECRET}"


COPY package* . 
COPY tsconfig.json .
COPY ./prisma .

RUN npm install
RUN DATABASE_URL=$DATABASE_URL npx prisma generate

COPY . . 

RUN DATABASE_URL=$DATABASE_URL npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
