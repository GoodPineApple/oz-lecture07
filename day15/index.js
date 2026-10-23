console.log("index.js를 읽어왔습니다");

// getElementById id로 요소 찾기
const titleEl = document.getElementById("title");
console.log(titleEl);
console.log(titleEl.textContent);
console.log(document.getElementById("logo")); // 없으면 null

// querySelector CSS 선택자로 첫 번째 하나 찾기
const titleQ = document.querySelector("#title");
console.log(titleQ);
console.log(titleQ.textContent);
const descQ = document.querySelector(".desc");
console.log(descQ);
const newQ = document.querySelector(".new");
console.log(newQ);

// querySelectorAll 맞는 요소 모두 찾기
const menuEls = document.querySelectorAll(".menu li");
console.log(menuEls);
const newEls = document.querySelectorAll(".new");
console.log(newEls);

// textContent 글자
const statusEl = document.querySelector(".status");
console.log(statusEl.textContent);
statusEl.textContent = "영업 중";
console.log(statusEl.textContent);

// innerHTML HTML
const message = "<strong>소금빵</strong>이 나왔습니다";
document.querySelector("#text-msg").textContent = message;
document.querySelector("#html-msg").innerHTML = message;

// style CSS속성을 하나씩 바꾸기
const titleStyleEl = document.querySelector("#title");
titleStyleEl.style.color = "#ffffff";
titleStyleEl.style.backgroundColor = "blue";
titleStyleEl.style.padding = "8px 16px";

// classList 미리 만든 class 붙이기 때기
const statusEl2 = document.querySelector(".status");
statusEl2.classList.add("open");
console.log(statusEl2.classList.contains("open")); // 포함하고 있나?
console.log(statusEl2.classList.toggle("open")); // 있으면 삭제, 없으면 추가
console.log(statusEl2.classList.toggle("open"));
