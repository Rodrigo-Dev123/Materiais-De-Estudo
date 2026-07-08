package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	args := os.Args[1:]
	if len(args) > 0 {
		fmt.Printf("Server started on port :%s", args[0])
		http.ListenAndServe(":"+args[0], nil)
	}

	fmt.Println("Start server on port :8080")
	http.ListenAndServe(":8080", nil)
}
