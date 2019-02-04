const request = require('request');
request({
  url:'https://restcountries.eu/rest/v2/name/india',
json:true}
,(error,resp,body)=>{
  console.log(body);
});
