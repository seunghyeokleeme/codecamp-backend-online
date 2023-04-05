export function sendMarkedNumber(registrationNumber) {
  const [frontNumber, backNumber] = registrationNumber.split("-");
  const markNumber = backNumber[0] + "*".repeat(6);
  console.log(frontNumber + "-" + markNumber);
}
