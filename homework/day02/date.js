function formatStringDate(date) {
  return String(date).padStart(2, "0");
}

function getDate() {
  const currentDate = new Date();
  const yyyy = currentDate.getFullYear();
  const mm = currentDate.getMonth() + 1;
  const dd = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  console.log(
    `오늘은 ${yyyy}년 ${formatStringDate(mm)}월 ${formatStringDate(
      dd
    )}일 ${formatStringDate(hours)}:${formatStringDate(
      minutes
    )}:${formatStringDate(seconds)}입니다.`
  );
}

getDate();
