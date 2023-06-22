function solution(n) {
  return String(n)
    .split("")
    .map((item) => +item)
    .reduce((a, b) => a + b);
}
