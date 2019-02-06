var express=require('express');
var app=express();
app.listen(3000);
console.log('node listening to 3000');

app.get('/',(req,res)=>{
  console.log('root called');
  res.send('ji');
});
