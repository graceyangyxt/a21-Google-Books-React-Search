import axios from "axios";

export default {
    // Gets all books
    getBook: function(booksSearch) {
      console.log()
      return axios.get("/api/googlebook/",{params:{q: booksSearch}});
    },
    // Gets the book with the given id
    getBooks: function(id) {
      return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    }
  };