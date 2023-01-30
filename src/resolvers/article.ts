import { Article } from "../types/article";

export const fromRequestData = (data: any): Article => {
  return data.map((article: any) => ({
    title: article.title,
  }))
}