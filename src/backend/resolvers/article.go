package resolvers

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"
	"rss/graph/model"

	article "rss/article"

	xj "github.com/basgys/goxml2json"
)

type ArticleResolver struct{}

func (f *ArticleResolver) List(ctx context.Context, url *string) []*model.Article {
	data, err := f.request(*url)
	if err != nil {
		return []*model.Article{}
	}

	return article.Factory().Build(data)
}

func (f *ArticleResolver) request(url string) (map[string]interface{}, error) {
	var data map[string]interface{}

	response, err := http.Get(url)
	if err != nil {
		return data, err
	}

	if response.StatusCode != http.StatusOK {
		return data, errors.New("[Article Request] Not OK Status Code")
	}

	bytes, err := xj.Convert(response.Body)
	if err != nil {
		return data, errors.New("[GoXML2JSON] Error converting XML")
	}

	err = json.Unmarshal(bytes.Bytes(), &data)
	if err != nil {
		return data, errors.New("[JSON Unmarshal] Error converting to object")
	}

	return data, nil
}
