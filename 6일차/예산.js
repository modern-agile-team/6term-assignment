function solution(d, budget) {
    let count = 0;
    let sum = 0;
    d.sort((a, b) => a - b);
    for (let i = 0; i < d.length; i++) {
        sum += d[i];
        if (budget >= sum) count++;
        else break;
    }
    return count;
}

d = [1,3,2,5,4];
budget = 9;

console.log(solution(d, budget));