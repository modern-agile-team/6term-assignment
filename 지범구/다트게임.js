function solution(dartResult) {
  const answer = [];
  let tmp = "";

  for (let dart of dartResult) {
    if (dart.match(/[0-9]/g)) {
      tmp += dart;
    } else if (dart === "S") {
      tmp = Math.pow(+tmp, 1);
      answer.push(tmp);
      tmp = "";
    } else if (dart === "D") {
      tmp = Math.pow(+tmp, 2);
      answer.push(tmp);
      tmp = "";
    } else if (dart === "T") {
      tmp = Math.pow(+tmp, 3);
      answer.push(tmp);
      tmp = "";
    } else if (dart === "*") {
      if (answer.length > 1) {
        answer[answer.length - 1] *= 2;
        answer[answer.length - 2] *= 2;
      } else {
        answer[answer.length - 1] *= 2;
      }
    } else if (dart === "#") {
      answer[answer.length - 1] *= -1;
    }
  }
  return answer.reduce((a, b) => a + b, 0);
}
