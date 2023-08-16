package article

import (
	"rss/graph/model"
	"strconv"
)

type ArticleBuilder struct {
	article *model.Article
}

func Builder() *ArticleBuilder {
	return &ArticleBuilder{
		article: &model.Article{},
	}
}

func (a *ArticleBuilder) Build() *model.Article {
	return a.article
}

func (a *ArticleBuilder) Basic(entry map[string]interface{}) *ArticleBuilder {
	a.article.ID = entry["id"].(string)
	a.article.Title = entry["title"].(string)
	a.article.Updated = entry["updated"].(string)
	a.article.Published = entry["published"].(string)

	a.article.Link = entry["link"].(map[string]interface{})["-href"].(string)

	return a
}

func (a *ArticleBuilder) Video(entry map[string]interface{}) *ArticleBuilder {
	a.article.VideoID = entry["videoId"].(string)
	a.article.ChannelID = entry["channelId"].(string)

	return a
}

func (a *ArticleBuilder) Author(entry map[string]interface{}) *ArticleBuilder {
	author := entry["author"].(map[string]interface{})

	a.article.Author = &model.Author{
		URI:  author["uri"].(string),
		Name: author["name"].(string),
	}

	return a
}

func (a *ArticleBuilder) Media(entry map[string]interface{}) *ArticleBuilder {
	group := entry["group"].(map[string]interface{})
	content := group["content"].(map[string]interface{})

	width, _ := strconv.Atoi(content["-width"].(string))
	height, _ := strconv.Atoi(content["-width"].(string))

	a.article.Media = &model.Media{
		Title:       group["title"].(string),
		Description: group["description"].(string),
		Content: &model.Content{
			URL:    content["-url"].(string),
			Type:   content["-type"].(string),
			Width:  width,
			Height: height,
		},
	}

	return a
}
