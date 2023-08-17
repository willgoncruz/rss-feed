package resolvers

import (
	"context"
	"rss/graph/model"
)

type FeedResolver struct{}

func (f *FeedResolver) List(ctx context.Context) []*model.Feed {
	return []*model.Feed{{
		URL: "https://www.youtube.com/feeds/videos.xml?channel_id=UCtNTsm4XIQf-TNk5nntGTOA",
	}}
}
