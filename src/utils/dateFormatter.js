function formatDatePart(num) {
  return String(num).padStart(2, "0");
}
export function formatDate(date) {
  const dateAdded = new Date(date);

  const dayAdded = formatDatePart(dateAdded.getDate());
  const monthAdded = formatDatePart(dateAdded.getMonth() + 1);
  const yearAdded = dateAdded.getFullYear();

  return `${yearAdded}.${monthAdded}.${dayAdded}`;
}
