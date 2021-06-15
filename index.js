const express = require("express");
const app = express();
const port = 3000;

require('dotenv').config();
const db = require("./db")
const {addNewBook , getAllBook , updateBook , deleteBook } = require("./test")

// a middleware that enables us to read the received JSON data
app.use(express.json());


app.post("/books" ,addNewBook )
app.get("/books" ,getAllBook )
app.put("/books/:book_id" , updateBook)
app.delete("/books/:book_id" , deleteBook)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});