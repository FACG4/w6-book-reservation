const fs = require('fs');
const path = require('path');
const request = require('request');
const postData = require('./database/queries/post.js');

const contentType = {
  html : 'text/html' ,
  css : 'text/css' ,
  jpg : 'images/jpg',
  ico : 'images/ico',
  js  : 'text/javascript'
}

const servePublic = (endpoint, res) => {
 const filePath =path.join(__dirname,'..','public',endpoint);
 const fileExtention = endpoint.split('.')[1];
 res.writeHead(200,{'Content-Type':`${contentType[fileExtention]}`});
 fs.readFile(filePath , (error,file) => {
   if(error){
      return error;
   }
   else{
     res.end(file);
   }
 })
}

const data={
  book_id:1,
  user_id:2,
  start_date:'24/3/1999',
  end_date:'3/4/1356'
};
postData(data, (err, res) => {
  if(err) return console.log(err);
  console.log(res);
});
