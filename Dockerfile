FROM node:lts-alpine AS builder

WORKDIR /app

COPY package.json /app

RUN npm install -g @angular-cli
RUN ng new app
RUN cd app

# Installing all dependencies
RUN npm install @ngx-translate/core @ngx-translate/http-loader ngx-language-selector

# Copying application code
COPY . /app

FROM node AS runner

EXPOSE 4200
WORKDIR /app

# Adding production dependencies to image
COPY --from=builder /tmp/node_modules /app/node_modules

# Copying application code
COPY . /app

CMD npm run start
