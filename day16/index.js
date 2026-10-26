// DAY 16 이벤트처리와 폼제어
console.log("index.js가 연결됐습니다!!!");

// 버튼을 누를 때마다 숫자 1씩 올리기
const countBtn = document.querySelector("#count-btn");
const countEl = document.querySelector("#count");
let count = 0;

function addOne() {
  count += 1;
  countEl.textContent = `${count}번 눌렀습니다`;
}

countBtn.addEventListener("click", addOne);
