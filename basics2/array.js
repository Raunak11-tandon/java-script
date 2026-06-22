const myarray=[0,1,2,3,4,5] 
const heros=["shaktiman","ninja hatori"]

// console.log(myarray); 
// console.log(heros);  

// shallow and deep copies
 
const myarr= new Array(1,2,3)
// console.log(myarr);
 
// methods 
//   myarray.push(6) 
//   myarray.push(7) 
//   myarray.pop() 
myarray.unshift (9)
myarray.shift ()  

//   console.log(myarray.includes(9));
//   console.log(myarray.indexOf(9));
//   console.log(myarray.indexOf(5));
  

//   const arraynew= myarray.join()   converts to a string without square brackets
  
//  console.log(myarray); 
//  console.log(arraynew);  

 
//SLICE AND SPLICE 
  
console.log("A=",myarray ); 
 
const myn1=myarray.slice(1,3) 
 
console.log(myn1);
 
console.log("B=",myarray );   
 
const myn2=myarray.splice(1,3) 
 
console.log("C=",myarray );   
console.log(myn2);  
// common and biggest mistake is everyone knows that slice does not include range while splice include range


// correct is splice manipulate in  the original array while slice do not 