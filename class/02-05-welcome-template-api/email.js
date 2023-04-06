import { getToday } from "./utils.js";

export function checkValidationEmail(email) {
  if (email === undefined) {
    console.log("해당 필드 칸에 이메일을 입력해주세요!");
    return false;
  }
  if (typeof email !== "string") {
    console.log("이상한 값을 입력하지 마세요!!!");
    return false;
  }

  if (!email.includes("@")) {
    console.log("이메일 형식에 맞지 않습니다. @를 입력해주세요!");
    return false;
  } else {
    return true;
  }
}

export function getWelcomeTemplate({ name, age, school }) {
  return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `;
}

export function sendWelcomeTemplateToEmail(email, template) {
  console.log(`${email} 이메일로 ${template}를 전송합니다!`);
}
