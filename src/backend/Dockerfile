FROM golang:1.20

RUN apt-get -y update && apt-get install -y fswatch

WORKDIR /rss-feed

ENTRYPOINT (go build -o rss-feed-bff ./ && chmod +x rss-feed-bff && ./rss-feed-bff)

EXPOSE 5000