const promiseOne = new Promise(function(resolve,reject){
  // do an async task
  //DB calls, cryptography, network 
  setTimeout(function(){
    console.log('Aysnc task is complete');
    resolve()
    
  },1000)

})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})


new Promise(function(resolve,reject){
  setTimeout(function(){
      console.log("Async task 2");
      resolve()
  },1000)

})

.then(function(){
  console.log("Async 2 is resolved");
  
})


const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
      resolve({username:"chai",email: "chai@example.com"})

  },1000)

})

promiseThree.then(function(user){
  console.log(user);
  

})


const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
        let error = false
        if(!error){
          resolve({username: "shreyesh", password : "123"})
        } else {
          reject('ERROR:something went wrong')
        }
  },1000)

})

  promiseFour.then((user) =>{
  console.log(user);
  return user.username
}).then((username) => {
  console.log(username)
  

}).catch(function(error){
  console.log(error);
  
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolved,reject){
  setTimeout(function(){
    let error = false
    if(!error){
      resolve({username: "javascript" , password: "123"})
    } else {
      reject('ERROR: Something went wrong')
    }
},1000)

});

async function consumepromiseFive(){
  try{
    const response = await promiseFive
    console.log(resoonse);
  } catch (error) {
        console.log(error);
        
  }
    
  }


consumepromiseFive()