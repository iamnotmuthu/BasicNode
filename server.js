var express=require('express');
var app=express();
app.listen(3000);
console.log('node listening to 3000');
var staticPath=__dirname+'/public';
console.log(`static path is ${staticPath}`);
app.use(express.static(__dirname +'/public'));//REquired this line, so that we can access static file directly from browser

app.get('/',(req,res)=>{
  console.log('root called');
  res.sendFile(`${staticPath}/help.html`);//send file takes absolute path for static files. internal redirection, so need abs path.
});
