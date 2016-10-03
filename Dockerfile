FROM node:6
MAINTAINER Jacek Chmielewski "jchmielewski@teonite.com"

ADD package.json /app
RUN cd /app/ && npm install
ADD . /app
RUN cd /app/ && npm run build

ADD docker/.hz/ /app/.hz/

EXPOSE 80
EXPOSE 443

WORKDIR /app/
CMD ["node_modules/.bin/hz", "serve", "--dev", "--debug", "--allow-unauthenticated", "--permissions", "no"]
