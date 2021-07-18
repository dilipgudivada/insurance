export default function formatDate(date) {
    var date = new Date(date),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    console.log("date being returned",[date.getFullYear(), mnth, day].join("-"))
  return [date.getFullYear(), mnth, day].join("-");
}
