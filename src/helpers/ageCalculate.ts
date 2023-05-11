function calculateAge(dateOfBirth: string) {
  const now = new Date();
  const dob = new Date(dateOfBirth);

  let year = now.getFullYear() - dob.getFullYear();
  let month = now.getMonth() - dob.getMonth();
  let day = now.getDate() - dob.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
    year--;
    if (month < 0) {
      month += 12;
    }
    if (day < 0) {
      day += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
  }

  return {year: year, month: month, day: day};
}

export default calculateAge;