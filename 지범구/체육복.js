function solution(n, lost, reserve) {
  lost.sort();
  reserve.sort();
  let reserve_del = reserve.filter((x) => !lost.includes(x));
  let lost_del = lost.filter((x) => !reserve.includes(x));

  for (let i of reserve_del) {
    if (lost_del.includes(i - 1)) lost_del.splice(lost_del.indexOf(i - 1), 1);
    else if (lost_del.includes(i + 1))
      lost_del.splice(lost_del.indexOf(i + 1), 1);
  }

  answer = n - lost_del.length;
  return answer;
}
