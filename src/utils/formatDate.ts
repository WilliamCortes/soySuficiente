export const isValidDate = (date: unknown): boolean => {
  if (!(date instanceof Date)) return false;

  if (isNaN(date.getTime())) return false;

  return true;
};

export const format = (date: Date, lng: string) => {
  if (!isValidDate(date)) return "";
  const month = new Intl.DateTimeFormat(lng, { month: "long" }).format(date);
  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};
