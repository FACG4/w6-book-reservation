const fs = require('fs');
const path = require('path');
const getData =require('./database/queries/get')
const postData = require('./database/queries/post.js');
const postUser = require('./database/queries/post_signup.js');
const { parse } = require('cookie');
const { sign, verify } = require('jsonwebtoken');
const queryString= require('querystring');
const bcrypt = require("bcryptjs");

const hashPassword = (password, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      callback(err);
    } else {
      bcrypt.hash(password, salt, callback);
    }
  });
};

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
};

const selectData = (req,res)=>{
  let data = '';
  req.on("data",(chunck)=>{
    data += chunck
  });
  req.on('end',()=>{
    data=JSON.parse(data);

    getData(data.value , (err,result)=>{
      if(err) throw new Error(err);
      if(!result[0]){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({ name: 'There are no avaliable books that fit your search'}))

      } else {
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(result[0]))
      }
    })
  })

}

const post = (req, response) => {
  let data = '';
  req.on('data', (chunk) => {
    data +=chunk;
  });
  req.on('end', ()=>{
    data = JSON.parse(data);
    postData.postData1(data.value, (err, res)=> {
      if (err) throw new Error(err);
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(JSON.stringify(res));
    });
  })
}
const signup = (req,res) => {
  let data = '';
  req.on('data', (chunk) => {
    data +=chunk;
    console.log(data);

  });

  req.on('end', ()=>  {
      data=JSON.parse(data);
      hashPassword(data.password, (errhash, reshash)=>{
      if(errhash) throw new Error(errhash)
      data.password=reshash;
      postData.postUser(data,(err,result)=>{
      if(err){
        res.writeHead(500,{'Content-Type': 'application/json'});
        res.end()
         }
      else{
          var userDetails = result.rows[0];
          const SECRET = 'abc';
          const cookie = sign(JSON.stringify(userDetails), SECRET);
          res.writeHead(200,
          {'Content-Type': 'application/json','Set-Cookie': `user_session=${cookie}; HttpOnly`});
          res.end();
         }
       })
    });
});
    };


module.exports= {servePublic,selectData, post,signup};
