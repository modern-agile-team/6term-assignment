function solution(lottos, win_nums) {
  let cnt = 0;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (lottos[i] === win_nums[j]) cnt += 1;
    }
  }

  lowest = cnt;
  best = cnt + lottos.reduce((count, element) => count + (0 === element), 0);

  function rank(x) {
    if (x === 6) return 1;
    else if (x === 5) return 2;
    else if (x === 4) return 3;
    else if (x === 3) return 4;
    else if (x === 2) return 5;
    else return 6;
  }

  return [rank(best), rank(lowest)];
}
