function solution (a, b) {
    let sum = 0;
    if (a === b) return a;
    else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
        return sum;
    }
    else if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
        return sum;
    }
}

console.log(solution(3, 6));