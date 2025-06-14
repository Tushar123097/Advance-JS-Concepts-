//SINCHONOUS CODE  - LINE BY LINE EXECUTION
// function sum(a, b){
//   return a + b;
// }
// let ans = sum(1, 2);
// console.log(ans);


//sum from 1 to 5;
//function su(n){
  // let sum =0;
  // for(let  i = 0; i <= n; i++)
  // {
  //   sum = sum + i;
  // }
  // return sum;
//   return n * (n + 1)/ 2;
// }
// let ans = su(5);
// console.log(ans);

//I/O OPERATIONS INPUT OUTPUT OPERATIONS
// Basically i/o operations are time consuming operations
//it takes time to read or write data from a file or database
//lets write a program to read data from a file
//example of i/o is 1: http request 2: clock 
//syntax of i/o is 
const fs = require('fs');//importing fs module

const data = fs.readFileSync('a.txt', 'utf-8');//a.txt is the file name and utf-8 is ka kaam hota hai ki file ko read karke usko string me convert karde
console.log(data);

const cpu = fs.readFileSync("b.txt", "utf-8");
console.log(cpu);


