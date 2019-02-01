var add=function(a,b){  //exports a function
  console.log('adding values');
    return a+b;
};
var sub=function(a,b){
  console.log('subtracting values');
  return a-b;
};
var mul=function(a,b){
  console.log('multiplying values');
  return a*b;
};

constant=10; //export simple value

module.exports={add,sub,mul,constant};
