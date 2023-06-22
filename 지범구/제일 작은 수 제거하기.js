function solution(arr) {
  arr.splice(
    arr.findIndex((item) => item === Math.min(...arr)),
    1
  );
  return arr.length > 0 ? arr : [-1];
}
