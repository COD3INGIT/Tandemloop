let read = require('readline-sync');
let num = parseInt( read.question("Enter limit "));
let i,j=1; s="";
if (num % 2==0){
    num=num-1
}
for(i = 1; i < 2*num; i++)
{
 if(i % 2!==0)
 s +=i +" ";
 
}
console.log(s)
