function solution(d, budget) {
  let num = 0;
  let answer = 0;

  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    num += d[i];
    answer += 1;
    if (num === budget) break;
    else if (num > budget) {
      num -= 1;
      answer -= 1;
      break;
    }
  }
  return answer;
}
