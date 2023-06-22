function solution(n, arr1, arr2) {
  let a = [];
  let b = "";
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].toString(2);
    if (arr1[i].length < n) {
      while (arr1[i].length < n) {
        arr1[i] = "0" + arr1[i];
      }
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i].toString(2);
    if (arr2[i].length < n) {
      while (arr2[i].length < n) {
        arr2[i] = "0" + arr2[i];
      }
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i][j] === "1" || arr2[i][j] === "1") {
        b += "#";
      } else {
        b += " ";
      }
    }
    answer.push(b);
    b = "";
  }

  return answer;
}
