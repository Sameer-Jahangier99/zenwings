export function getCurrentDateFormatted() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Get the current day of the week (0 is Sunday, 1 is Monday, and so on)
  
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const formattedDate = `${getDayName(dayOfWeek)}, ${today.getDate()} ${
      monthNames[today.getMonth()]
    } ${today.getFullYear()}`;
  
    return formattedDate;
  }
  
  function getDayName(day) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }