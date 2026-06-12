const accountId=1234598
let accountEmail="raunak@google.com"
var accountPassword="abcde" 
let accountState;
// accountId=2 not allowed node js will not read this or execute because of comment out. 
accountCity="lucknow" 
accountEmail="hc@hn.com"
accountPassword="rq"
accountCity="jaipur"
// {
    // scope
// }

/*
prefer not to use var because of issue of block space and functional space;
*/
console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
