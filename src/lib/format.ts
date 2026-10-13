const formatDate = (date: string) => date.split("-").reverse().join("/");

export const formatPeriod = (start: string, end: string | null, present = "") =>
  `${formatDate(start)} – ${end ? formatDate(end) : present}`;
