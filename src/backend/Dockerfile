FROM golang:1.20

## Install Air
RUN curl -fLo install.sh https://raw.githubusercontent.com/cosmtrek/air/master/install.sh \
    && chmod +x install.sh && sh install.sh && cp ./bin/air /bin/air

WORKDIR /rss-feed

CMD air

EXPOSE 5000