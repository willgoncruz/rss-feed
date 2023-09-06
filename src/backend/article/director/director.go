package director

import (
	"rss/article"
	"rss/article/youtube"
	"rss/graph/model"
)

type ArticleDirector struct {
	builder article.ArticleBuilder
}

func GetArticleDirector() *ArticleDirector {
	return &ArticleDirector{}
}

func (d *ArticleDirector) Decide() {
	d.builder = youtube.NewYoutubeArticleBuilder()
}

func (d *ArticleDirector) Build(entry article.UnparsedArticleEntry) *model.Article {
	d.builder.Reset()
	return d.builder.Build(entry)
}
