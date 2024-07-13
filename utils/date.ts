type DateProps = {
  dateString: string;
};

export const Date = (data: string) => {
  const year = data.slice(0, 4);
  const month = data.slice(6, 7);
  const day = data.slice(9, 10);
  const hour = data.slice(11, 16);
  const monthName = MonthDay(month);

  return { year, month, day, hour, monthName };
};

const MonthDay = (month: string) => {
  switch (month) {
    case "1":
      return "January";
    case "2":
      return "February";
    case "3":
      return "March";
    case "4":
      return "April";
    case "5":
      return "May";
    case "6":
      return "June";
    case "7":
      return "July";
    case "8":
      return "August";
    case "9":
      return "September";
    case "10":
      return "October";
    case "11":
      return "November";
    case "12":
      return "December";
    default:
      return "Month not defined";
  }
};
