const os=require('os');  //core module  ; var os will contain all contents of os module
const calc=require('./calculator.js'); //user defined module
const _=require('lodash'); //third party module
console.log(os.userInfo()); //callig userInfo method with os variable.
console.log(`sum of values are ${calc.add(1,2)}`);
console.log(calc.constant);
console.log(_.isString('as'));
console.log(_.isString(true));

//process is inbuilt keyword
var arg=process.argv[2]; //argv is used to get command line args
var val1=process.argv[3];
var val2=process.argv[4];
if(arg==='add'){
  console.log(calc.add(val1,val2)); //treated as string, need to convert to int
}else if(arg==='sub'){
  console.log(calc.sub(val1,val2));
}else if(arg==='mul'){
  console.log(calc.mul(val1,val2));
}else {
  console.log('unknown command- try again');
}
