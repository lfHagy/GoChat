package router

import (
	"go-server/internal/handlers"

	"github.com/gorilla/mux"
)

func New() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/ping", handlers.Ping).Methods("GET")
	router.HandleFunc("/users/register", handlers.RegisterUser).Methods("POST")
	// TODO: login, logout
	return router
}
