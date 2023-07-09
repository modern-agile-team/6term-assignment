function solution(arr) {
    let answer = [];
    let min = [];
    
    if (arr.length === 1) answer.push(-1);
    else if (arr.length > 1) {
        min = arr.filter(num => num !== Math.min(...arr));
        answer = min;
    }
    return answer;
}

arr = [4, 3, 2, 1];
console.log(solution(arr));