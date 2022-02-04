export const getDates = (createdDate: number) => {
  const dateString = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(createdDate));

  const daysPassed = getDaysPassed();

  function getDaysPassed() {
    const d = new Date();
    const d2 = new Date(createdDate);
    const timep = d.getTime() - d2.getTime();
    const days = Math.floor(timep / 8.64e7);
    if (days === 0) return "-posted today";
    else if (days === 1) return `-${days} day ago`;
    else return `-${days} days ago`;
  }

  return { dateString, daysPassed };
};
