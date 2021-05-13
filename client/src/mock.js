import Mock from 'mockjs';

Mock.mock('/login', {
  "boolean|1-2": true,

});
Mock.mock('/list', {
  'name': '@name',
  'age|10-20': 10
});

Mock.mock('/post', function(options){
  console.log(11111,options);
  return {
    'name': '@name',
    'age|10-20': 10
  }
});
