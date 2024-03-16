FROM alpine/git as builder

WORKDIR /git
RUN git clone https://github.com/Poohma/pentaclock.git /pentaclock/

FROM nginx

COPY . /usr/share/nginx/html/

EXPOSE 80
