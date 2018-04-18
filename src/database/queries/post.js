const dbConnection = require('../db_connect');

const postData =(data, cb)=> {
  const sql= {
        text:'INSERT INTO reservation (book_id, user_id, start_date,end_date) VALUES ($1, $2, $3, $4)',
        values:[data.book_id, data.user_id, data.end_date , data.end_date]
        };
  dbConnection.query(
     sql, (err,res) => {
    if (err) return cb(err);
    cb(null,res);
  })
}
module.exports=postData;
