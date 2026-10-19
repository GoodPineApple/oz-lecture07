// DAY 11 Javascript 연산자와 조건문
console.log("index.js가 연결됐습니다!!!");

// 단항연산자
let count = 10;
count++;
console.log(count); // 11

count--;
console.log(count); // 10

// 단항연산자의 순서
let num = 10;
let a = num++; // a = 10, num = 11
console.log("a :", a);
console.log("num :", num);

let num2 = 10;
let b = ++num2; // num2 = 11, b = 11
console.log("b :", b);
console.log("num2 :", num2);
