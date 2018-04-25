const dbConnection = require('../db_connect');

const postData1 =(data, cb)=> {
  const sql= {
        text:'INSERT INTO reservation (book_id, user_id, start_date,end_date) VALUES ($1, $2, $3, $4) returning book_id',
        values:[data.bookId, data.userId, data.startDate , data.endDate]
        };
  dbConnection.query(
     sql, (err,res) => {
    if (err) return cb(err);
    cb(null,res);
  })
}

const postUser =(data, cb)=> {
  const sql= {
        text:'INSERT INTO users (name, email,password) VALUES ($1, $2, $3) returning name',
        values:[data.user, data.email, data.password]
        };
  dbConnection.query(
     sql, (err,res) => {
    if (err) {
      console.log(err,'database error');
      
      return cb(err);}
    cb(null,res);
  })
}
module.exports={postData1 , postUser};
