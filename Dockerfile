FROM mhart/alpine-node:6
MAINTAINER Jacek Chmielewski "jchmielewski@teonite.com"

RUN apk update && apk add git

ADD docker/package.json /app/package.json
RUN cd /app/ && npm install

ADD build/ /app/dist
ADD docker/.hz/ /app/.hz/

EXPOSE 80
EXPOSE 443

WORKDIR /app/
CMD ["node_modules/.bin/hz", "serve", "--dev", "--debug", "--allow-unauthenticated", "--permissions", "no"]
