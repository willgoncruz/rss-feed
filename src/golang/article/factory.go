package article

import (
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
	var entries = data["feed"].(map[string]interface{})["entry"].([]interface{})

	var result = []*model.Article{}
	for _, entryObj := range entries {
		entry := entryObj.(map[string]interface{})

		article := Builder().
			Basic(entry).
			Video(entry).
			Media(entry).
			Author(entry).
			Build()

		result = append(result, article)
	}

	return result
}
