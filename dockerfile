FROM alpine/git as builder

WORKDIR /git
RUN git clone https://github.com/Poohma/pentaclock.git /pentaclock/

FROM nginx

COPY --from=builder /pentaclock/ /usr/share/nginx/html/

# Setup Nginx
#ENV HOME /root
#RUN rm -f /etc/service/nginx/down
#ADD pentaclock /etc/nginx/sites-enabled/
#RUN rm /etc/nginx/sites-enabled/default

EXPOSE 80 443
