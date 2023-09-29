package feed

import (
	"rss/database"
	"rss/graph/model"
)

type FeedMemoryDatabase struct{}

func NewFeedDatabase() *FeedMemoryDatabase {
	return &FeedMemoryDatabase{}
}

func (db *FeedMemoryDatabase) Init() {
	// *** Ugly Init Code, Remove Later
	db.CreateOrUpdate(&model.Feed{
		ID:    "1",
		Title: "Verac",
		URL:   "https://www.youtube.com/feeds/videos.xml?channel_id=UCtNTsm4XIQf-TNk5nntGTOA",
	})
	// *** //
}

func (db *FeedMemoryDatabase) Get(ID string) *model.Feed {
	txn := database.GetMemoryDatabase().Txn(false)

	found, err := txn.First("feed", "id", ID)
	if err != nil {
		return nil
	}

	if feed, ok := found.(*model.Feed); ok {
		return feed
	}

	return nil
}

func (db *FeedMemoryDatabase) List() []*model.Feed {
	txn := database.GetMemoryDatabase().Txn(false)

	it, err := txn.Get("feed", "id")
	if err != nil {
		return nil
	}

	results := []*model.Feed{}

	for obj := it.Next(); obj != nil; obj = it.Next() {
		feed := obj.(*model.Feed)
		results = append(results, feed)
	}

	return results
}

func (db *FeedMemoryDatabase) CreateOrUpdate(feed *model.Feed) error {
	txn := database.GetMemoryDatabase().Txn(true)

	err := txn.Insert("feed", feed)

	if err == nil {
		txn.Commit()
	} else {
		txn.Abort()
	}

	return err
}
