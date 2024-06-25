package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var collection *mongo.Collection

// Voter represents voter data
type Voter struct {
	ID      primitive.ObjectID `bson:"_id,omitempty"`
	Name    string             `bson:"name"`
	VoterID string             `bson:"voter_id"`
}

func main() {
	// Set up MongoDB client
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(context.Background())

	// Access the voters collection
	collection = client.Database("voting_system").Collection("voters")

	r := mux.NewRouter()
	r.HandleFunc("/login", LoginHandler).Methods("POST")

	fmt.Println("Server listening on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", r))
}

// LoginHandler handles user login requests
func LoginHandler(w http.ResponseWriter, r *http.Request) {
	// Parse the request body to extract user credentials
	var credentials Voter
	err := json.NewDecoder(r.Body).Decode(&credentials)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// Query the database to check if the provided credentials are valid
	if verifyVoterByNameAndID(credentials.Name, credentials.VoterID) {
		// Credentials are valid, send a success response
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Credentials verified successfully"))
	} else {
		// Credentials are invalid, send an error response
		http.Error(w, "Invalid voter details", http.StatusUnauthorized)
	}
}

// Function to verify voter credentials against the database
func verifyVoterByNameAndID(name, voterID string) bool {
	var voter Voter
	filter := bson.M{"name": name, "voter_id": voterID}
	err := collection.FindOne(context.Background(), filter).Decode(&voter)
	if err != nil {
		fmt.Println("Error fetching voter:", err)
		return false
	}
	return true
}
