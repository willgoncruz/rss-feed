package feed

import "rss/graph/model"

type FeedDatabase interface {
	List() []*model.Feed
	Get(ID string) *model.Feed
	CreateOrUpdate(*model.Feed)
}
