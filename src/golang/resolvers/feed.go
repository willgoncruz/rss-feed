package resolvers

import (
	"context"
	"rss/graph/model"
)

type FeedResolver struct {
	FeedStore []*model.Feed
}

func New() *FeedResolver {
	return &FeedResolver{
		FeedStore: []*model.Feed{},
	}
}

func (f *FeedResolver) List(ctx context.Context) []*model.Feed {
	return f.FeedStore
}
