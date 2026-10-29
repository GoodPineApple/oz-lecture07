// DAY 19 고급함수와 고차함수
console.log("index.js가 연결됐습니다!!!");

// 클로저 : 함수가 끝난 뒤에도 함수 내의 변수를 기억함
const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

const innerFunc = outer();
innerFunc();

// 카운터
let num = 0;

const increase = function () {
  return ++num;
};

console.log(increase());
console.log(increase());
num = 100;
console.log(increase());
