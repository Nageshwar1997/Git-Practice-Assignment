// program to check the string is prime or not

let number=5;
let count=0;

for(let i=1; i<=number;i++){
  if(number%2==0){
    count++;
  }
}
(count==0) ? console.log("it is a prime number") : console.log("it is not a prime number");