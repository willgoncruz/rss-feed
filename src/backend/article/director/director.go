package director

import (
	"rss/article"
	"rss/article/blog"
	"rss/article/youtube"
	"rss/graph/model"
)

type ArticleDirector struct {
	builder article.ArticleBuilder
}

func GetArticleDirector() *ArticleDirector {
	return &ArticleDirector{}
}

func (d *ArticleDirector) Decide(data article.UnparsedFeed) {
	var builder article.ArticleBuilder

	if data["feed"] != nil {
		builder = youtube.NewYoutubeArticleBuilder()
	} else {
		builder = blog.NewBlogArticleBuilder()
	}

	d.builder = builder
}

func (d *ArticleDirector) List(feed article.UnparsedFeed) article.ArticleEntryList {
	return d.builder.List(feed)
}

func (d *ArticleDirector) Build(entry article.UnparsedArticleEntry) *model.Article {
	d.builder.Reset()
	return d.builder.Build(entry)
}
