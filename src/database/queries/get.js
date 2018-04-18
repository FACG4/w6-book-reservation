const connection = require('../db_connect');

const getData = (search_value,cb)=>{
const sql ={
  text :"SELECT * FROM books WHERE name ilike $1",
  values: [search_value]
} ;
connection.query(sql,(err,res)=>{
  if(err){
   return cb(err)
}
    cb(null,res.rows);

});
}

module.exports=getData;
