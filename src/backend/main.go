package main

import (
	"log"
	"net/http"
	"os"
	feed "rss/feed/database"
	"rss/graph"
	"rss/portifolio"
	"rss/resolvers"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	"github.com/rs/cors"
)

const defaultPort = "4000"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	router := chi.NewRouter()

	// Add CORS middleware around every request
	// See https://github.com/rs/cors for full option listing
	router.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5000"},
		AllowCredentials: true,
		Debug:            true,
	}).Handler)

	db := feed.NewFeedDatabase()
	db.Init()

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{Feed: resolvers.NewFeedResolver(db)}}))

	router.Handle("/playground", playground.Handler("GraphQL playground", "/"))
	router.Handle("/", srv)

	router.HandleFunc("/portifolio", portifolio.HandlePortifolio())

	log.Printf("connect to http://localhost:%s/playground for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
