export const DUMMY_PRODUCTS_API = 'https://dummyjson.com/products/search?q';
export const NEWS_API = 'http://localhost:3000/news';

export const calcAge = (birthDateString: string) => {
  // date format should be yyyy-mm-dd
  const birthDate = new Date(birthDateString);
  const today = new Date();
  // Calculate the raw difference in years, months, and days
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  let d = today.getDate() - birthDate.getDate();
  // Adjust months if the current month is earlier than the birth month
  if (m < 0 || (m === 0 && d < 0)) {
    age--;
    m += 12;
  }
  // Adjust days if the current day is earlier than the birth day
  if (d < 0) {
    m--;
    const daysInMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    console.log(d, daysInMonth);
    d += daysInMonth;
  }
  console.log(`${age} years - ${m} months - ${d} days`);
  return `${age} years - ${m} months - ${d} days`;
};

export function randomDelay() {
  const delay = Math.floor(Math.random() * 2000) + 1000;
  return new Promise((reslove) => setTimeout(reslove, delay));
}
