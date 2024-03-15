FROM node:20-alpine

ARG CACHE_BUST

RUN apk update && apk upgrade

WORKDIR /srv

# Copy stuff - refine this later on
COPY ./app /srv

RUN chmod 777 /srv

# Install npm dependencies
RUN npm i -g @nestjs/cli
