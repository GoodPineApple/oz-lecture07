function check(score) {
  try {
    console.log("1. 확인 시작");
    if (score < 0) {
      throw new Error("점수가 잘못되었습니다");
    }
    console.log("2. 점수 :", score);
  } catch (error) {
    console.log("3. 오류 :", error.message);
  } finally {
    console.log("4. 확인 끝");
  }
}
check(90);
check(-5);
