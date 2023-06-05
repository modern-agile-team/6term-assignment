function solution(s) {
  let answer = "";
  let bool = false;

  for (let i of s) {
    if (bool === true || i === " ") bool = false;
    else bool = true;
    if (bool === true) answer += i.toUpperCase();
    else answer += i.toLowerCase();
  }

  return answer;
}
