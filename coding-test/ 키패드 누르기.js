console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
//	"LRLLRRLLLRR"
function solution(numbers, hand) {
  const numPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let leftPosition = [3, 0];
  let rightPosition = [3, 2];
  let result = [];
  numbers.forEach((number) => {
    let leftDistance = 0;
    let rightDistance = 0;
    for (let i = 0; i < numPad.length; i++) {
      if (
        numPad[i].indexOf(number) !== -1 &&
        (number === 1 || number === 4 || number === 7)
      ) {
        leftPosition = [i, 0];
        result.push("L");
        break;
      } else if (
        numPad[i].indexOf(number) !== -1 &&
        (number === 3 || number === 6 || number === 9)
      ) {
        rightPosition = [i, 2];
        result.push("R");
        break;
      } else if (numPad[i].indexOf(number) !== -1) {
        leftDistance =
          Math.abs(leftPosition[0] - i) +
          Math.abs(leftPosition[1] - numPad[i].indexOf(number));

        rightDistance =
          Math.abs(rightPosition[0] - i) +
          Math.abs(rightPosition[1] - numPad[i].indexOf(number));
        if (leftDistance > rightDistance) {
          result.push("R");
          rightPosition = [i, numPad[i].indexOf(number)];
        } else if (rightDistance > leftDistance) {
          result.push("L");
          leftPosition = [i, numPad[i].indexOf(number)];
        } else if (rightDistance === leftDistance && hand === "left") {
          result.push("L");
          leftPosition = [i, numPad[i].indexOf(number)];
        } else {
          result.push("R");
          rightPosition = [i, numPad[i].indexOf(number)];
        }
        break;
      }
    }
  });
  return result.join("");
}
