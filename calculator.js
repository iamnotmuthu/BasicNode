module.exports.add=function(a,b){  //exports a function
  console.log('adding values');
    return a+b;  
};
module.exports.sub=function(a,b){
  console.log('subtracting values');
  return a-b;
}
module.exports.mul=function(a,b){
  console.log('multiplying values');
  return a*b;
}

module.exports.constant=10; //export simple value
