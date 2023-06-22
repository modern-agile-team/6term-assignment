function solution(answers) {
  let answer = [];
  let numbers = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let point = [0, 0, 0];

  for (var i = 0; i < answers.length; i++) {
    if (numbers[0][i % 5] == answers[i]) point[0] += 1;
    if (numbers[1][i % 8] == answers[i]) point[1] += 1;
    if (numbers[2][i % 10] == answers[i]) point[2] += 1;
  }

  let max_point = Math.max(point[0], point[1], point[2]);

  if (max_point === point[0]) answer.push(1);
  if (max_point === point[1]) answer.push(2);
  if (max_point === point[2]) answer.push(3);

  return answer;
}
