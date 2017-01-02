FROM ubuntu:trusty
MAINTAINER treylitefm

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y python python-pip libpq-dev python-dev

RUN pip install --upgrade pip

WORKDIR /var/wkhfund

RUN pip install psycopg2 gunicorn django==1.10.4

#node dependencies. keep?
RUN apt-get install -y npm git curl
RUN npm install -g n bower
RUN n stable

EXPOSE 8000

COPY ./docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh", "wkhfund"]
