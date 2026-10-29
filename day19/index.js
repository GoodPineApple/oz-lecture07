// DAY 19 고급함수와 고차함수
console.log("index.js가 연결됐습니다!!!");

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
