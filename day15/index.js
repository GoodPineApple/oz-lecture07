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
