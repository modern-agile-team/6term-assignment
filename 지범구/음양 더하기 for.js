function solution(absolutes, signs) {
  answer = 0;
  for (let i = 0; i < absolutes.length; i++)
    signs[i] > 0 ? (answer += absolutes[i]) : (answer += -absolutes[i]);
  return answer;
}
