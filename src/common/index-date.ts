export interface People {
  name: string;
  birthDate: string;
}

export const people: People[] = [
  { name: 'Alice', birthDate: '2000-07-15' },
  { name: 'Bob', birthDate: '1985-12-02' },
  { name: 'Charlie', birthDate: '1995-03-25' },
  { name: 'Diana', birthDate: '2010-11-10' },
  { name: 'Eve', birthDate: '1999-01-05' },
];

export const calculateAge = (birthDateString: string) => {
  const birthDate = new Date(birthDateString);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  // Adjust years and months when months are negative
  // if (months < 0 || (months === 0 && days < 0)) {
  if (months < 0 || (months === 0 && days < 0)) {
    console.log('month-block');
    years--;
    months += 12;
  }

  // Adjust days and months when days are negative
  if (days < 0) {
    const daysInPreviousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    // console.log(daysInPreviousMonth);
    days += daysInPreviousMonth;
    months--;
  }

  return { years, months, days };
};
