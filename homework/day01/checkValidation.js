export function checkValidationType(registrationNumber) {
  if (!registrationNumber.includes("-", 6)) {
    console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
    return false;
  } else {
    return true;
  }
}

export function checkValidationLength(registrationNumber) {
  const [frontNumber, backNumber] = registrationNumber.split("-");
  if (frontNumber.length !== 6 || backNumber.length !== 7) {
    console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}
