package article

import (
	"rss/graph/model"
)

type UnparsedArticleEntry = map[string]interface{}

type ArticleType string

const (
	YoutubeArticleType = "youtube"
)

type ArticleBuilder interface {
	Build(UnparsedArticleEntry) *model.Article
	Reset()
}
