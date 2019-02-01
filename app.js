const os=require('os');  //core module  ; var os will contain all contents of os module
const calc=require('./calculator.js'); //user defined module
const _=require('lodash'); //third party module
console.log(os.userInfo()); //callig userInfo method with os variable.
console.log(`sum of values are ${calc.add(1,2)}`);
console.log(calc.constant);
console.log(_.isString('as'));
console.log(_.isString(true));
