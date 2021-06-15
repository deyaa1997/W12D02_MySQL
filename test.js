const db = require("./db");

// query without placeholders
const getAllBook = (req,res) => {
  const query = `SELECT * FROM books `;
  // use the query method to execute a query
  db.query(query, (err, result) => {
    if (err) throw err;
    // result are the data returned by mysql server
    res.json(result)
    // fields are extra meta data about result
  });
};

// query with placeholders
// it is recommended to use placeholders when dealing with user input variables to protect against
// sql injection attacks done by the users
const updateBook = (req,res) => {
  const query = `update books set title = ? , author = ? , published_at = ? , price = ? where id=?`;
  const data = [req.body.title , req.body.author , req.body.published_at , req.body.price , req.params.book_id];
  console.log(data)
  db.query(query, data, (err, results) => {
    if(err)throw err ;
    res.json("Updated complete");
  });
};


const addNewBook = (req,res) => {
  const query = `INSERT INTO books (title, author, published_at, price) VALUES (?, ?, ?, ?)`;
  const data = [req.body.title , req.body.author , req.body.published_at , req.body.price];
  console.log("data from body " , data)
  db.query(query, data, (err, results) => {
    if(err)throw err ;
    res.json("added complete")
  });
};

const deleteBook = (req,res) => {
    const query = `delete from books where id=?`;
    const data = [ req.params.book_id];
    console.log(data)
    db.query(query, data, (err, results) => {
      if(err)throw err ;
      res.json("Deleted complete");
    });
  };


const orderBy =()=>{
    const query = `select * from books order by id desc`

    db.query(query , (err,result)=>{
        if(err)throw err ;
        console.log(result)
    })
}

const isNull =()=>{
    const query = `select * from books where price is not null`

    db.query(query , (err,result)=>{
        if(err)throw err ;
        console.log(result)
    })
}

isNull();



module.exports = {addNewBook , getAllBook , updateBook , deleteBook}
