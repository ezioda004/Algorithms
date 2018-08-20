function mostFrequentDays(year){
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let firstDay = new Date(`1-1-${year}`).getUTCDay();
  firstDay = firstDay - 1 < 0 ? 6 : firstDay - 1;
  if ((year % 4 == 0) && (year % 100 != 0) ||  (year % 400 == 0)){
    let x = [days[firstDay], days[((firstDay + 1) > 6) ? 0 : firstDay+1]];
    if (x[0] == days[days.length-1]){
      return x.sort();
    }
    return x;
  }
  else {
    return [days[firstDay]];
  }
}