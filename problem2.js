let read = require('readline-sync');
let num = parseInt( read.question("Enter limit: "));
let i,j=1; res="";

for(i = 1; i <2*num; i++)
{
 if(i % 2!==0)

 res +=i +"," ;
 
}

console.log(res)
