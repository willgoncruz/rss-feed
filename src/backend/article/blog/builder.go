package blog

import (
	"rss/article"
	"rss/graph/model"
)

type BlogArticleBuilder struct {
	article *model.Article
}

func NewBlogArticleBuilder() article.ArticleBuilder {
	return &BlogArticleBuilder{
		article: &model.Article{},
	}
}

func (a *BlogArticleBuilder) Reset() {
	a.article = &model.Article{}
}

func (a *BlogArticleBuilder) List(data article.UnparsedFeed) article.ArticleEntryList {
	return data["rss"].(map[string]interface{})["channel"].(map[string]interface{})["item"].([]interface{})
}

func (a *BlogArticleBuilder) Build(entry article.UnparsedArticleEntry) *model.Article {
	a.Basic(entry).
		Media(entry).
		Author(entry).
		Type()

	return a.article
}

func (a *BlogArticleBuilder) Type() *BlogArticleBuilder {
	a.article.Type = article.BlogArticleType

	return a
}

func (a *BlogArticleBuilder) Basic(entry article.UnparsedArticleEntry) *BlogArticleBuilder {
	a.article.ID = entry["guid"].(map[string]interface{})["#content"].(string)
	a.article.Title = entry["title"].(string)
	a.article.Updated = entry["pubDate"].(string)
	a.article.Published = entry["pubDate"].(string)

	a.article.Link = entry["link"].(string)

	return a
}

func (a *BlogArticleBuilder) Author(entry article.UnparsedArticleEntry) *BlogArticleBuilder {
	// author := entry["author"].(map[string]interface{})

	a.article.Author = &model.Author{
		URI:  "uri",
		Name: "Name",
	}

	return a
}

func (a *BlogArticleBuilder) Media(entry article.UnparsedArticleEntry) *BlogArticleBuilder {
	a.article.Media = &model.Media{
		Content:     &model.Content{},
		Description: entry["encoded"].(string),
		Thumbnail: &model.Thumbnail{
			URL: entry["content"].(map[string]interface{})["-url"].(string),
		},
	}

	return a
}
