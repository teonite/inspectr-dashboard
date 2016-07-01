FROM node:6
MAINTAINER Jacek Chmielewski "jchmielewski@teonite.com"

# https://github.com/npm/npm/issues/9863
RUN cd $(npm root -g)/npm \
 && npm install fs-extra \
 && sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js

ADD . /app
RUN cd /app/ && npm install && npm run build

ADD docker/.hz/ /app/.hz/

EXPOSE 80
EXPOSE 443

WORKDIR /app/
CMD ["node_modules/.bin/hz", "serve", "--dev", "--debug", "--allow-unauthenticated", "--permissions", "no"]
