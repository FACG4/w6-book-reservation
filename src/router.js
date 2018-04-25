
const handler = require('./handler.js');
const { sign, verify } = require('jsonwebtoken');
const SECRET = 'poiugyfguhijokpkoihugyfyguhijo';
const userDetails = { userId: 5, role: 'admin' };
const router  = (req ,res)=>{
  const {url} = req;
  if(url === '/') {
    handler.servePublic('main.html',res);
  }else if(url === '/getData'){
   handler.selectData (req,res);
 } else if (url === '/postData'){
    handler.post (req,res);
 }else if(url === '/form' && req.method === 'POST'){
  handler.signup(req,res);
}else if(url === '/back') {
  handler.servePublic('index.html',res);
}
  else{
    handler.servePublic(url, res);
  }
}

module.exports = router;
