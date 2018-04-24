
const handler = require('./handler.js');

const router  = (req ,res)=>{
  const {url} = req;
  if(url === '/') {
    handler.servePublic('index.html',res);
  }else if(url === '/getData'){
   handler.selectData (req,res);

 } else if (url === '/postData'){
    handler.post (req,res);
 }else if(url === '/form'){
  handler.signup(req,res);
}
  else{
    handler.servePublic(url, res);
  }
}

module.exports = router;
