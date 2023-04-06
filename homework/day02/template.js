function getWelcomeTemplate({ email, registerNumber, phoneNumber, favSite }) {
  const result = `
        <html>
            <body>
                <h1>코드캠프님 가입을 환영합니다.</h1>
                <hr>
                <div>이메일: ${email}</div>
                <div>주민번호: ${registerNumber}</div>
                <div>휴대폰 번호: ${phoneNumber}</div>
                <div>내가 좋아하는 사이트: ${favSite}</div>
            </body>
        </html>
    `;

  console.log(result);
}

const email = "support@codebootcamp.co.kr";
const registerNumber = "210510-1******";
const phoneNumber = "000-0000-0000";
const favSite = "codebootcamp.co.kr";

getWelcomeTemplate({ email, registerNumber, phoneNumber, favSite });
