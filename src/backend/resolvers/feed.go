package resolvers

import (
	"context"
	feed "rss/feed/database"
	"rss/graph/model"
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
