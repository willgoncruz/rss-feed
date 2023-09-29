package resolvers

import (
	"context"
	feed "rss/feed/database"
	"rss/graph/model"

	uuid "github.com/hashicorp/go-uuid"
)

type FeedResolver struct {
	db feed.FeedDatabase
}

func NewFeedResolver(db feed.FeedDatabase) FeedResolver {
	return FeedResolver{
		db: db,
	}
}

func (f *FeedResolver) List(ctx context.Context) []*model.Feed {
	return f.db.List()
}

func (f *FeedResolver) Add(ctx context.Context, url string, title string) (*model.Feed, error) {
	id, err := uuid.GenerateUUID()
	if err != nil {
		return nil, err
	}

	feed := &model.Feed{
		ID:    id,
		URL:   url,
		Title: title,
	}

	return feed, f.db.CreateOrUpdate(feed)
}
