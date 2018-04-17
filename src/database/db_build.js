const dbcon = require('./db_connect.js');
const fs = require('fs');
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
// console.log(sql);
dbcon.query(sql, (err,res)=>{
  if(err) throw new Erorr(err);
   console.log('book_res database has been initialized with: ', res[7].rows);
})
