let read = require('readline-sync');

class Calc{
  constructor (operand1,operand2,operator){
    this.operator1=operand1;
    this.operator2=operand2;
    this.operator=operator;

  } 
   addition () {
    let sum = operand1+operand2;
    console.log(sum);
  }     
  subtraction(){
    let diff = operand1-operand2;
    console.log(diff)
  }
  mult(){
    let diff = operand1*operand2;
    console.log(diff)
  }

   division(){
    let diff = operand1/operand2;
    console.log(diff)
  }


  }
let operand1 = parseFloat( read.question("Enter first operand: "));
let operand2 = parseFloat (read.question ("Enter second operand: "));
let operator = read.question("Select operator (+, -, *, /) : ");
const obj = new Calc(operand1,operand2,operator);
switch(operator){
  case '+' :obj.addition();
  break;
  case '-' :obj.subtraction();
  break;
  case '*' :obj.mult();
  break;
  case '/' :obj.division();
  break;
  default : console.log("Enter a valid operator")

}




  
