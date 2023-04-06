export function getToday() {
  const currentTime = new Date();
  const yyyy = currentTime.getFullYear();
  const mm = String(currentTime.getMonth() + 1).padStart(2, "0");
  const dd = String(currentTime.getDate()).padStart(2, "0");
  const today = `${yyyy}-${mm}-${dd}`;
  return today;
}
