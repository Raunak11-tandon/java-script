// two types of datatype on the basis of how we enter the data in the memory and how we access it 
 

//primitive-CALL BY VALUE  
 // 7 types- String , number , BigInt , undefined , null , boolean,symbol          

const score=100
const scoreValue=100.3
 
const isLoggedIn=false 
const outsideTEmperature=null
let user;
 
const id=Symbol('123')
const anotherId=Symbol('123') 
console.log(id==anotherId);


const bigNumber=5555444412334213525584634235243321435425341414314143145n


  //reference(non primitive)
  //we can get address from a memory 
  // arrays,objects,functions  

   
const heros=["shaktiman","doga","superman"] // reference type 
 // object in key and value pair 
let myobj={  
  name:"raunak",
  age:20,
} 

const myfunction=function(){
  console.log("hello world");  // functions are object too
  
} 
 console.log(typeof outsideTEmperature );
 console.log(typeof isLoggedIn);
 console.log(typeof heros);
 console.log(typeof myfunction);
 console.log(typeof myobj);
 console.log(typeof id);
 console.log(typeof bigNumber);
 console.log(typeof scoreValue); 
 console.log(typeof score);
 