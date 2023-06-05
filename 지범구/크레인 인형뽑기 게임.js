function solution(board, moves) {
  place = [];
  num = 0;
  cnt = 0;
  answer = 0;

  for (let i of moves) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i - 1] === 0) continue;
      else {
        if (place.length !== 0) {
          if (board[j][i - 1] === place[place.length - 1]) {
            board[j][i - 1] = 0;
            place.pop();
            answer += 2;
            break;
          } else {
            place.push(board[j][i - 1]);
            board[j][i - 1] = 0;
            break;
          }
        } else {
          place.push(board[j][i - 1]);
          board[j][i - 1] = 0;
          break;
        }
      }
    }
  }
  return answer;
}
