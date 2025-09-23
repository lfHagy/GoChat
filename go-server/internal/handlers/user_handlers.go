package handlers

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"go-server/internal/db"
	"go-server/internal/models"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
)

type RegisterRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Avatar   string `json:"avatar,omitempty"`
}

// registering a new user

func RegisterUser(w http.ResponseWriter, r *http.Request) {
	var req RegisterRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	if len(req.Username) <= 0 || len(req.Username) > 20 {
		http.Error(w, "Username length invalid (must be 1–20 characters)", http.StatusBadRequest)
		return
	}
	if len(req.Password) <= 0 || len(req.Password) > 20 {
		http.Error(w, "Password length invalid (must be 1–20 characters)", http.StatusBadRequest)
		return
	}
	// if the data's valid, hash the password
	hashed, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, "Failed to hash password", http.StatusInternalServerError)
		return
	}

	user := models.User{
		ID:       primitive.NewObjectID(),
		Username: req.Username,
		Password: string(hashed),
		Avatar:   req.Avatar,
		Contacts: []primitive.ObjectID{},
	}

	// try inserting into db
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	collection := db.Database.Collection("users")
	_, err = collection.InsertOne(ctx, user)
	if err != nil {
		http.Error(w, "Failed to create user", http.StatusInternalServerError)
		return
	}

	// make sure we don't send the password back
	user.Password = ""
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(user)
}
