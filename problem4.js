let read = require('readline-sync');
let limit = parseInt( read.question('enter array limit'));
let mult=[1,2,3,4,5,6,7,8,9]
let objcts={};
let array1=[];
let count=0;

for(let i = 0;i<limit;i++)
{   
  array1[i]= parseInt( read.question());

}
for(i=0;i<9;i++)
{ 
    count=0;
    for(let j =0;j<limit;j++)
    {
        if(array1[j]%mult[i]==0)

        {  
            count++;
                  
        }
       
            objcts[i+1]=count ;   
  
   }
}
console.log(objcts)