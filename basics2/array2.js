 const marvel=["thor","spiderman","ironman"] 
 const dc=["superman","chotabheem","chutki"] 
  
//  marvel.push(dc)
//  console.log(marvel); 
//   console.log(marvel[3]);
//   const newarr=marvel.concat(dc) 
//   console.log(newarr) 
   
const allheros=[...marvel,...dc] //   spread operator
console.log(allheros);
 
const another_array=[1,2,3,[4,5],6,[7,8,[9,2]]] 
 const usable_array=another_array.flat(Infinity)

 console.log(usable_array); 
//-------------------important--------------------
  console.log(Array.isArray("raunak"));
  console.log(Array.from("Raunak")) ; 
  console.log(Array.from({name:"Raunak"}));  //intresting-we have to give keys or value then array will be made .

  const score1=100
  const score2=200
  const score3=300
    // score1=2000
  console.log(Array.from(score1,score2,score3));
//   console.log(score1);
  
  
 
 