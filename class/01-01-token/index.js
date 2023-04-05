function getToken(digit) {
  const result = String(Math.floor(Math.random() * 10 ** digit)).padStart(
    digit,
    "0"
  ); // x자리 토큰 번호
  console.log(result);
}

getToken(3);
