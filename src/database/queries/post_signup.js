const dbConnection = require('../db_connect');

const postUser =(data, cb)=> {
  const sql= {
        text:'INSERT INTO users (email, user_name, password) VALUES ($1, $2, $3) returning user_name, email,password',
        values:[data.email, data.user_name, data.password]
        };
  dbConnection.query(
     sql, (err,res) => {
    if (err) return cb(err);
    cb(null,res);
  })
}
module.exports=postUser;
