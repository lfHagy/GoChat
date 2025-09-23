package main

import (
	"log"
	"net/http"

	"go-server/internal/db"
	"go-server/internal/router"
)

func main() {
	db.Connect("mongodb://localhost:27017", "goChat") // connect to the db
	router := router.New()

	log.Println("Server listening on :8080")
	if err := http.ListenAndServe(":8080", router); err != nil {
		log.Fatal(err)
	}
}
