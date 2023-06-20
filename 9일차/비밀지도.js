function solution(n, arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        let map1 = arr1[i].toString(2).padStart(n, 0);
        let map2 = arr2[i].toString(2).padStart(n, 0);
        let result = '';

        for (let j = 0; j < n; j++) {
            if (map1[j] === '1' || map2[j] === '1') {
                result += '#';
            }
            else {
                result += ' ';
            }
        }
        answer.push(result);
    }
    return answer;
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));