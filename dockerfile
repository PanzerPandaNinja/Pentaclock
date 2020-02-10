FROM nginx:alpine

# Clone our private GitHub Repository
RUN git clone -b docker https://github.com/Poohma/pentaclock.git /myapp/
RUN cp -R /myapp/* /home/app/
RUN chown app:app -R /home/app/


# Setup Nginx
ENV HOME /root
RUN rm -f /etc/service/nginx/down
ADD myapp /etc/nginx/sites-enabled/
RUN rm /etc/nginx/sites-enabled/default

EXPOSE 80 443

