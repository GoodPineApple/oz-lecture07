// DAY 16 비동기처리
console.log("index.js가 연결됐습니다!!!");

// 비동기 : 기다리지 않고 실행되는 다음줄
console.log("이미지 로딩 시작");
setTimeout(() => console.log("이미지 로딩 완료"), 2000);
console.log("다른 작업 수행");
