console.log("index.js 연결 완료");

// JSON.stringify 값을 JSON 문자로 바꾸기
const user = {
  name: "김오즈",
  age: 20,
  tags: ["학생", "개발"],
  greet() {
    return "안녕하세요";
  },
};
const text = JSON.stringify(user);
console.log(text);
console.log(typeof text);
console.log(JSON.stringify(user, null, 2));
