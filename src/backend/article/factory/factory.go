package factory

import (
	"rss/article/director"
	"rss/graph/model"
)

type ArticleFactory struct{}

var factory *ArticleFactory

func init() {
	factory = &ArticleFactory{}
}

func Factory() *ArticleFactory {
	return factory
}

func (*ArticleFactory) Build(data map[string]interface{}) []*model.Article {
	articleDirector := director.GetArticleDirector()
	articleDirector.Decide(data)

	var entries = articleDirector.List(data)

	var result = []*model.Article{}
	for _, entryObj := range entries {
		entry := entryObj.(map[string]interface{})

		article := articleDirector.Build(entry)

		result = append(result, article)
	}

	return result
}
