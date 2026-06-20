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
//  console.log(typeof outsideTEmperature );
//  console.log(typeof isLoggedIn);
//  console.log(typeof heros);
//  console.log(typeof myfunction);
//  console.log(typeof myobj);
//  console.log(typeof id);
//  console.log(typeof bigNumber);
//  console.log(typeof scoreValue); 
//  console.log(typeof score); 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory - stack(primitive type) ,   heap()

let MyYoutube="raunak tandon dot com"// primitive they will go in stack 
let anothername= MyYoutube 
anothername="chai aur code" 
console.log(anothername) 
console.log(MyYoutube)  
// object are non-primitve so they will go in heap 
// in heap refernce is given
let userone={
  email:"1gmail.com",
  age:20,
} 
let usertwo=userone     // user two access the reference of userone
usertwo.email="raunak@gmail.com" // inside ibject we access using .(dot)
 console.log(usertwo.email);
 console.log(userone.email);    // now userone email is also same because of reference 
   // in reference we change in the original value while in primitive we get a copy 
 
       