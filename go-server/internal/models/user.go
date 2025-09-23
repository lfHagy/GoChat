package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID       primitive.ObjectID   `bson:"_id,omitempty" json:"id"`
	Username string               `bson:"username" json:"username"`
	Password string               `bson:"password,omitempty" json:"-"`
	Avatar   string               `bson:"avatar,omitempty" json:"avatar"`
	Contacts []primitive.ObjectID `bson:"contacts,omitempty" json:"contacts"`
}
