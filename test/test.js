
const tape = require('tape');
const getData = require('../src/database/queries/get');
const postData = require('../src/database/queries/post');
const runDbBuild = require('../src/database/db_build');


tape('test for get data ',(t)=>{
  runDbBuild((err, res)=>{
  getData('Lord', (err,res)=>{
    if (err)return t.fail(err);
    const actual = res[0].name;
    const expected = 'The Lord of the Rings';
    t.equal(actual,expected,'this test get data');
    t.end();
  })
});
})


tape('test for posting data', (t)=>{
  runDbBuild((err, res)=>{
  const data={
    book_id:1,
    user_id:2,
    start_date:'24/3/1999',
    end_date:'3/4/1356'
  };
  postData(data,(err,res)=>{
    if(err) return t.fail(err);
    const actual = res.command;
    const expected = 'INSERT';
    t.deepEqual(actual,expected,'command must be insert')
    t.end();
  })
});
})


tape('test for posting data', (t)=>{
  runDbBuild((err, res)=>{

  const data={
    book_id:1,
    user_id:2,
    start_date:'24/3/1999',
    end_date:'3/4/1356'
  };
  postData(data,(err,res)=>{
    if(err) return t.fail(err);
    const actual = res.rowCount;
    const expected = 1;
    t.deepEqual(actual,expected,'rowCount must equal 1')
    t.end();
  })
});
})
