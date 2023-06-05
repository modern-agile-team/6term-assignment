function solution(participant, completion) {
  const dic = {};
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] in dic) dic[participant[i]] += 1;
    else dic[participant[i]] = 1;
  }

  for (let i = 0; i < completion.length; i++)
    if (completion[i] in dic) dic[completion[i]] -= 1;

  for (let key in dic) if (dic[key] > 0) return key;
}
