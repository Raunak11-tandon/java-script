const name="raunak" 
const age= 20

// console.log(name+age);

console.log(`my name is ${name} and my age is ${age}`); // good way of writing code
 
const gamename = new String(' raunak -ron-tandon');
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());
console.log(gamename.length)  // calculates length of a string 
console.log(gamename.charAt(3)) 
console.log(gamename.indexOf('d')) 

const newgamename= gamename.substring(-4,5) // no negative only take positive 
console.log(newgamename);

const gamename2=gamename.slice(-4,4)
console.log(gamename2);  

const newstring="    ron   " 
console.log(newstring);
console.log(newstring.trim()); // remove spaces
  
const url="https://raunak.com/raunak%20tandon"
 console.log(url.replace('%20','-'));
 
 console.log(url.includes('raunak'));
 
console.log(gamename.split('-'));
