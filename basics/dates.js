 // DATES 
 let mydate= new Date() 
//  console.log(mydate.toString());
//  console.log(mydate.toDateString());
//  console.log(mydate.toISOString());
//  console.log(mydate.toJSON());
//  console.log(mydate.toLocaleDateString());
//  console.log(mydate.toLocaleTimeString());
  
// let mycreateddate = new Date(2026,5,22)  // month from 0 to 11
let mycreateddate = new Date("06-22-2026")  
 console.log(mycreateddate.toDateString());
 
 let myTimeStamp= Date.now()
//  console.log(myTimeStamp); 
 // milisecond value feom 1 jan 1970 
//  console.log(mycreateddate.getTime());
//   console.log(Math.floor(Date.now()/1000));
   
let newdate= new Date() 
console.log(newdate.getMonth()+1);
// console.log(`today is ${newdate.getDay()} and the time is ${newdate.getTime()}`); // this is string interpulation 
 
newdate.toLocaleString('default',{
    weekday:"long" 
})  



  