package db

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client
var Database *mongo.Database

func Connect(uri string, dbName string) {
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second) // when connecting, try for 15 seconds
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err = client.Ping(ctx, nil); err != nil {
		log.Fatal("Fatal error ocurred! ", err)
	}

	Client = client
	Database = client.Database(dbName)
	log.Println("Connected to database successfull!")
}
