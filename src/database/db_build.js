const dbcon = require('./db_connect.js');
const fs = require('fs');
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const dbConnect = (cb) => {
dbcon.query(sql, (err,res)=>{
  if(err) return new Error(err);
   console.log('book_res database has been initialized');
})
}

module.exports = dbConnect;
