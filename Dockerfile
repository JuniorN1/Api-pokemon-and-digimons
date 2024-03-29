FROM node:14.17.3

WORKDIR /usr/app
COPY package.json yarn.lock ./

RUN yarn 

COPY . .

EXPOSE 3333

RUN chmod 777 ./init.sh

# this codes run migrate if database is in oter container
# RUN sed -i -e 's/\r$//' init.sh

# ENTRYPOINT ["./init.sh"]