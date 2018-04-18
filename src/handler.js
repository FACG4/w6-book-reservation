const fs = require('fs');
const path = require('path');
const getData =require('./database/queries/get')
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
      res.writeHead(200,{"Content-Type":"application/json"});

      res.end(JSON.stringify(result[0]))
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
    postData(data.value, (err, res)=> {
      //console.log(res);
      if (err) throw new Error(err);
      response.writeHead(200, {'Content-Type': 'application/json'});
      console.log(res.rows[0]);
      response.end(JSON.stringify(res));
    });
  })
}

module.exports= {servePublic,selectData, post};
