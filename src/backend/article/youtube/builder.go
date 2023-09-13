package youtube

import (
	"rss/article"
	"rss/graph/model"
	"strconv"
)

type YoutubeArticleBuilder struct {
	article *model.Article
}

func NewYoutubeArticleBuilder() article.ArticleBuilder {
	return &YoutubeArticleBuilder{
		article: &model.Article{},
	}
}

func (a *YoutubeArticleBuilder) Reset() {
	a.article = &model.Article{}
}

func (a *YoutubeArticleBuilder) Build(entry article.UnparsedArticleEntry) *model.Article {
	a.Basic(entry).
		Video(entry).
		Media(entry).
		Author(entry).
		Type()

	return a.article
}

func (a *YoutubeArticleBuilder) Type() *YoutubeArticleBuilder {
	a.article.Type = article.YoutubeArticleType

	return a
}

func (a *YoutubeArticleBuilder) Basic(entry map[string]interface{}) *YoutubeArticleBuilder {
	a.article.ID = entry["id"].(string)
	a.article.Title = entry["title"].(string)
	a.article.Updated = entry["updated"].(string)
	a.article.Published = entry["published"].(string)

	a.article.Link = entry["link"].(map[string]interface{})["-href"].(string)

	return a
}

func (a *YoutubeArticleBuilder) Video(entry map[string]interface{}) *YoutubeArticleBuilder {
	a.article.VideoID = entry["videoId"].(string)
	a.article.ChannelID = entry["channelId"].(string)

	return a
}

func (a *YoutubeArticleBuilder) Author(entry map[string]interface{}) *YoutubeArticleBuilder {
	author := entry["author"].(map[string]interface{})

	a.article.Author = &model.Author{
		URI:  author["uri"].(string),
		Name: author["name"].(string),
	}

	return a
}

func (a *YoutubeArticleBuilder) Media(entry map[string]interface{}) *YoutubeArticleBuilder {
	group := entry["group"].(map[string]interface{})
	content := group["content"].(map[string]interface{})

	width, _ := strconv.Atoi(content["-width"].(string))
	height, _ := strconv.Atoi(content["-height"].(string))

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
