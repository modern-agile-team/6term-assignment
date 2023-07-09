const array = [1, 5, 2, 6, 3, 7, 4];
let i;
let j;
let k;
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
    const answer = [];
    for (let a = 0; a < commands.length; a++) {
        let temp = array.slice(commands[a][0] - 1, commands[a][1]);
        if (temp.length === 1) { // i와 j가 같은 경우
            answer.push(temp[0]);
        }
        else {
            k = commands[a][2];
            temp.sort((a, b) => a - b); // 오름차순 정렬
            answer.push(temp[k - 1]); // k번째 수 push
        }
    }
    return answer;
}

console.log(solution(array, commands));