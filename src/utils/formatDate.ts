export const format = (date: Date, lng: string) => {
  const month = new Intl.DateTimeFormat(lng, { month: "long" }).format(date);
  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};
