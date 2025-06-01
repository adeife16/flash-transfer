# Create build
FROM node:alpine as build
WORKDIR /server
COPY package*.json ./
COPY tsconfig.json ./
RUN npm i -g typescript ts-node
RUN npm ci
COPY . .
RUN npm run build

# Run Build
FROM node:alpine as prod
WORKDIR /server

# Add Environment Variable
ENV NODE_ENV=development
ENV PORT=8000
ENV HOST=localhost
ENV SECRET=%&*(0&5)*(^)
ENV ADMIN_SECRET=%&*(0&5)*(^)
ENV ADMIN_JWT_TOKEN_EXPIRATION=7d
ENV USER_JWT_TOKEN_EXPIRATON=90d
ENV SALT=10
ENV DEV_DB=mongodb+srv://octify:octify@cluster0.xu1md.mongodb.net/kalabale?retryWrites=true&w=majority

COPY --from=build /server/package*.json ./
COPY --from=build /server/build ./
RUN npm ci --only=production
EXPOSE 8000
CMD [ "npm", "run", "prod" ]
