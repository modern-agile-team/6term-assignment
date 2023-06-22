board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
moves = [1,5,3,5,1,2,1,4];
function solution(board, moves) {
    const basket = [];
    const result = [];
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i]-1] !== 0){ 
                basket.push(board[j][moves[i]-1]);
                board[j][moves[i]-1] = 0;
                break;
            }
        }
        if (basket[basket.length - 1] === basket[basket.length - 2]) {
            let b1 = basket.pop(basket.length - 1);
            let b2 = basket.pop(basket.length - 2);
            result.push(b1, b2);
        }
    }

    // console.log(basket);
    // console.log(result);
    return result.length;
}

const k = solution(board, moves);
console.log(k);