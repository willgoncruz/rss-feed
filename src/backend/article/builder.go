package article

import (
	"rss/graph/model"
)

type ArticleEntryList = []interface{}

type UnparsedFeed = map[string]interface{}

type UnparsedArticleEntry = map[string]interface{}

type ArticleType string

const (
	BlogArticleType    = "blog"
	YoutubeArticleType = "youtube"
)

type ArticleBuilder interface {
	List(UnparsedArticleEntry) ArticleEntryList
	Build(UnparsedArticleEntry) *model.Article
	Reset()
}
