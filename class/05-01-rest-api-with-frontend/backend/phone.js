export function checkValidationPhone(phone) {
  if (phone.length !== 10 && phone.length !== 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

export function getToken() {
  const count = 6;
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    "0"
  );
  return result;
}

export function sendTokenToSMS(fff, ggg) {
  console.log(fff + "번호로 인증번호" + ggg + "를 전송합니다!!");
}
