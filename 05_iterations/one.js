// for

// for (let index = 0; index <= 10; index++) {
//     // const element = index;  
//     console.log(index);
// }

 //console.log(element);  // out of scope can't access the variable outside the for loop or function


 for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
      //console.log("5 is best number");
      
    }  
    //console.log(element);
      
 }
 

 for (let i = 0; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  
  // for(let j =0; j<=i;j++){
  //  //console.log(`Inner loop value ${j} and inner loop ${i}`);
  //  console.log(i + '*' + j + '=' + i*j);
   
  // }
 }


 let myArray =["flash" ,"batman" ,"superman"]
 //console.log(myArray.length);
 for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
        console.log(element);
 }
  
  // break , continue.


  for (let index = 1; index < 20; index++) {
        if(index == 5){
          console.log(`detected ${index}`)
         continue
        }
        console.log(`value of i is ${index}`);
  }