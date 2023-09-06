package article

import (
	"rss/graph/model"
)

type UnparsedArticleEntry = map[string]interface{}

type ArticleBuilder interface {
	Build(UnparsedArticleEntry) *model.Article
	Reset()
}
