let numbers = prompt("enter any number to check armstrong?");
let temp = numbers;
let temp2 = numbers;
let sum=0;
let i=0;

while(temp2 > 0){
    temp2 = parseInt(temp2/10);
	i++;
}

while(temp > 0){
      n = temp%10;
      sum+=n**i;
      temp = parseInt(temp/10);
}
	  
if(numbers == sum){
     console.log(`${numbers} is an armstrong number`)
}
else{
     	 
	 console.log(`${numbers} is not an armstrong number`) 
}