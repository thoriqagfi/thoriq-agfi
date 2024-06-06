export function formatDate(dateString: string): string {
  // Parse the date string
  const date = new Date(dateString);

  // Define an array of month names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Extract the day, month, and year from the date
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Format the date as "Month DD, YYYY"
  const formattedDate = `${month} ${day.toString().padStart(2, '0')}, ${year}`;

  return formattedDate;
}
