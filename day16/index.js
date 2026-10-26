// DAY 16 이벤트처리와 폼제어
console.log("index.js가 연결됐습니다!!!");

// 버튼을 누를 때마다 숫자 1씩 올리기
const countBtn = document.querySelector("#count-btn");
const countEl = document.querySelector("#count");
let count = 0;

function addOne() {
  console.log("addOne 실행");
  count += 1;
  countEl.textContent = `${count}번 눌렀습니다`;
}

countBtn.addEventListener("click", addOne);

// onclick은 하나만, addEventLister는 여러개
const btn = document.querySelector("#btn");

btn.onclick = () => console.log("첫째 - onclick");
btn.onclick = () => console.log("둘째 - onclick");

btn.addEventListener("click", () => console.log("셋째 - addEventListener"));
btn.addEventListener("click", () => console.log("넷째 - addEventListener"));

// forEach로 버튼에 이벤트 연결
const menuBtns = document.querySelectorAll(".menu-btn");
const pickedEl = document.querySelector("#picked");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    pickedEl.textContent = `고른 메뉴 : ${btn.textContent}`;
  });
});

// input 이벤트는 한 글자마다, change 이벤트는 칸을 벗어날 때.
const nameInput = document.querySelector("#name");

nameInput.addEventListener("input", (e) => {
  console.log("input", e.target.value);
});

nameInput.addEventListener("change", (e) => {
  console.log("change", e.target.value);
});

btn.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
});

// select는 value, checkbox는 checked
const orderEl = document.querySelector("#order");
const sizeSelect = document.querySelector("#size");
const shotBox = document.querySelector("#shot");

function showOrder() {
  const shot = shotBox.checked ? "샷 추가" : "샷 추가 없음";
  console.log(shot);
  orderEl.textContent = `${sizeSelect.value} . ${shot}`;
}

shotBox.addEventListener("change", (e) => {
  console.log("change", e.target.checked);
  showOrder();
});

sizeSelect.addEventListener("change", (e) => {
  console.log("change", e.target.value);
  showOrder();
});

// keyup 키를 땔 때, 어떤 키인지 event.key
const memoInput = document.querySelector("#memo");
memoInput.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    console.log("Enter키 입력");
  }
});
