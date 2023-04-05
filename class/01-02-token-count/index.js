function getToken(digit) {
  if (digit === undefined) {
    console.log("에러발생!!! 갯수를 제대로 입력해주세요");
    return;
  } else if (digit <= 0) {
    console.log("에러 발생! 갯수가 너무 적습니다.");
    return;
  } else if (digit > 10) {
    console.log("에러 발생! 갯수가 너무 많습니다.");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** digit)).padStart(
    digit,
    "0"
  ); // x자리 토큰 번호
  console.log(result);
}

getToken(3);
