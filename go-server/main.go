package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func pingHandler(w http.ResponseWriter, r *http.Request) {
	response := map[string]string{"message": "pong"}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/ping", pingHandler).Methods("GET")

	http.ListenAndServe(":8080", router)
}
