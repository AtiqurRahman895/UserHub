const UseGetDateInYMDFormat = () => {
  const YDMformatDate = (offset = 0, targetDate = null) => {
    let bdDate;

    if (targetDate) {
      bdDate = new Date(targetDate);
    } else {
      const dateStr = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Dhaka",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).format(new Date());

      bdDate = new Date(dateStr);
    }
    bdDate.setDate(bdDate.getDate() + offset);
    return bdDate.toISOString().split("T")[0]; // returns "YYYY-MM-DD"
  };

  return YDMformatDate;
};

export default UseGetDateInYMDFormat;