
const handler = require('./handler.js');

const router  = (req ,res)=>{
  const {url} = req;
  if(url === '/') {
    handler.servePublic('main.html',res);
  }else if(url === '/getData'){
   handler.selectData (req,res);

 }else if (url==='/sign_up'){
   handler.postUser1(req,res);

 } else if (url === '/postData'){
    handler.post (req,res);
 }
  else{
    handler.servePublic(url, res);
  }
}

module.exports = router;
