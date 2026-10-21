// DAY 13 JavaScript 배열과 객체 기초
console.log("index.js가 연결됐습니다!!!");

const fruites = ["사과", "바나나", "오렌지"];
console.log(fruites[0]);
console.log(fruites[2]);
console.log(fruites[fruites.length - 1]);
console.log(fruites[5]);
console.log(fruites.length);

fruites[1] = "망고";
console.log(fruites);

// 맨 뒤에 더할 때는 번호 대신
fruites.push("포도");
console.log(fruites);

// length로 처음부터 끝까지 반복시키기
const scores = [80, 95, 70, 55];
let total = 0;
for (let i = 0; i < scores.length; i++) {
  const score = scores[i];
  total += score;
}
console.log("총합", total);
console.log("평균", total / scores.length);
