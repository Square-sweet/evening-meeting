function getTimes() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 月份从 0 开始，所以要加 1
  const day = now.getDate();

  console.log(`当前日期是：${year}-${month}-${day}`);
  const result = `${year}-${month}-${day}`;

  return result;
}