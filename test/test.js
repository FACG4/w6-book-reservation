
const tape = require('tape');
const getData = require('../src/database/queries/get');
tape('test for get data ',(t)=>{
  getData((err,res)=>{
    if (err)return t.fail(err);
    const actule = res[0];
    const expect = { name: 'a' };
    t.deepEqual(actule,expect,'this test get data');
    t.end();
  })
})




