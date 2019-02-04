console.log('regular return function');
var getuser=()=>{
  userdt={
    "name":"muthu",
    "age":20
  };
  return userdt;
}

//callback style
var getasuser=(callback)=>{
  user2={
    "name":"asynmuthu",
    "age":20
  };
  callback(user2);
}

getasuser(user2=>{
  console.log(`callbk user received ${JSON.stringify(user2)}`);
});

var user=getuser();
console.log(`reg user is ${JSON.stringify(user)}`);

module.exports={getuser,getasuser};
