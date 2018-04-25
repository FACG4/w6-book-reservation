const fs = require('fs');
const path = require('path');
const getData =require('./database/queries/get')
const postData = require('./database/queries/post.js');
const postUser = require('./database/queries/post_signup.js');

const contentType = {
  html : 'text/html' ,
  css : 'text/css' ,
  jpg : 'images/jpg',
  ico : 'images/ico',
  js  : 'text/javascript'
}

const signup = (req,res)=>{
  let body = ''
   req.on('data', (chunk) => {
     // console.log(chunk);
     body += chunk;

   })
   req.on('end', () => {
     bodyData = JSON.parse(body);
     console.log(bodyData);
    postUser(bodyData,(err, result)=> {
      if (err) throw new Error(err);
      // res.writeHead(200, {'Content-Type': 'application/json'});
      res.writeHead(
        302,
        {
          'Location': '/back'
          // 'Set-Cookie': `jwt=${cookie}; HttpOnly`
        }
      );
      res.end();
    });
   });


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
    postData(data.value, (err, res)=> {
      if (err) throw new Error(err);
      response.writeHead(200, {'Content-Type': 'application/json'});
      console.log(res.rows[0]);
      response.end(JSON.stringify(res));
    });
  })
}

// const postUser1 = (req, response) => {
//   let data = '';
//   req.on('data', (chunk) => {
//     data +=chunk;
//   });
//   req.on('end', ()=>{
//     data = JSON.parse(data);
//     postUser(data, (err, res)=> {
//       if (err) throw new Error(err);
//       response.writeHead(200, {'Content-Type': 'application/json'});
//       // console.log(res.rows[0]);
//       response.end(JSON.stringify(res));
//     });
//   })
// }

module.exports= {servePublic,selectData, post, signup};
