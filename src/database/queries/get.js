const connection = require('../db_connect');


const getData = (cb)=>{
const sql ="SELECT name FROM books" ;
connection.query(sql,(err,res)=>{
  if(err){
   return cb(err)
}
    cb(null,res.rows);

});
}

module.exports=getData;