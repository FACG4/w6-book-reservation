const dbcon = require('./db_connect.js');
const fs = require('fs');
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

dbcon.query(sql, (err,res)=>{
  if(err) throw new Error(err);
   console.log('book_res database has been initialized with: ', res[8].rows);
})
