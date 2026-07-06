// SINGLETON 
 
// objects can be declared by two ways 
//  constructor -> Object.create
// object literals and constructor 
 
const mysym=Symbol("key1") 
 

const Jsuser={ 
    name:"raunak",  
    "fullname" : "raunak tandon", 
    [mysym] :"mykey1",
    age:20, 
    location:"lucknow",
    email :"ai@gmail.com",
    isLoggedIn: false,
    lastlogedIN: ["monday","saturday"] 
 }  

//  console.log(Jsuser.email); 
//  console.log(Jsuser["email"]); 

//  console.log(Jsuser["fullname"]);  
//  console.log(Jsuser[mysym]);   
  
 Jsuser.email="raunak@gmail.com"
//  Object.freeze(Jsuser) 
 Jsuser.email="raunak@mailing.com"

//  console.log(Jsuser);  

 Jsuser.greeting = function() { 
    console.log(" hello js user");
    
 } 
 Jsuser.greetingtwo = function() { 
    console.log( `hello js user,${this.name}`);
    
 } 

  console.log(Jsuser.greeting());
  console.log(Jsuser.greetingtwo()); 
  
 
