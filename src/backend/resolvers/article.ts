import { Article } from "@types";

export const fromRequestData = (data: any): Article[] => {
  return data.map((article: any): Article => ({
    id : article.id,
    link: article.link.href,
    title: article.title,
    media: {
      title: article['media:group']['media:title'],
      description: article['media:group']['media:description'],
      content: {
        url: article['media:group']['media:content']['$'].url,
        type: article['media:group']['media:content']['$'].type,
        width: article['media:group']['media:content']['$'].width,
        height: article['media:group']['media:content']['$'].height,
      },
      thumbnail: {
        url: article['media:group']['media:thumbnail'].url,
        width: article['media:group']['media:thumbnail'].width,
        height: article['media:group']['media:thumbnail'].height,
      },
    },
    author: article.author,
    updated: article.updated,
    videoId: article['yt:videoId'],
    channelId: article['yt:channelId'],
    published: article.published,
  }));
}