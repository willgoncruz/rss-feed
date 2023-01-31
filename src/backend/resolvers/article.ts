import { Article } from "@types";

export const fromRequestData = (data: any): Article => {
  return data.map((article: any) => ({
    title: article.title,
    author: article.author,
  }))
}