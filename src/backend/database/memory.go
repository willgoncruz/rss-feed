package database

import (
	"sync"

	"github.com/hashicorp/go-memdb"
)

var once sync.Once
var db *memdb.MemDB

func init() {
	// Create the DB schema
	schema := &memdb.DBSchema{
		Tables: map[string]*memdb.TableSchema{
			"feed": {
				Name: "feed",
				Indexes: map[string]*memdb.IndexSchema{
					"id": {
						Name:    "id",
						Unique:  true,
						Indexer: &memdb.StringFieldIndex{Field: "ID"},
					},
				},
			},
		},
	}

	once.Do(func() {
		instance, err := memdb.NewMemDB(schema)
		if err != nil {
			panic(err)
		}

		db = instance
	})
}

func GetMemoryDatabase() *memdb.MemDB {
	return db
}
