const fs=require('fs');

//delete any old data if present in the file.
fs.truncate('student.txt',0,function(){
  console.log('deleted all content');
});


var student={    //json object
  "name":"Muthu",
  "course":"node",
  "level":"basic"
};

console.log(student.level); //printing a property

/*fs.appendFile('student.txt',student,function(err){
  if(err){
    console.log('error while storing data');
    return;
  }
  console.log('stored data'); //data stored would be [object object];
});*/
//to store it as string, we need to convert the object to string, then store it

var dataString=JSON.stringify(student); //converts json obj to string
fs.appendFile('student.txt',dataString,function(err){
  if(err){
    console.log('error while storing data');
    return;
  }
  console.log('stored data'); //data stored would be [object object];
  });
/*
fs.readFile('student.txt',function(err,data){
  if(err){
    console.log('exception while reading data from file');
  }else{
    console.log( `read data is ${data}`); //prints data as string as stored
    console.log(`name is ${data.name}`); //name is undefined, data is not object,
  }
});*/
fs.readFile('student.txt',function(err,data){
  if(err){
    console.log('exception while reading data from file');
  }else{
    console.log( `read data is ${data}`); //prints data as string as stored
    var dataObj=JSON.parse(data); //converts string to json object
    console.log(`name is ${dataObj.name}`); //name is undefined, data is not object,
  }
});
