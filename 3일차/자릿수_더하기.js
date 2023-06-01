function solution(n)
{
    let sum = 0;
    while (n >= 10) {
        tem = n % 10;
        sum += tem;
    }
    return sum;
}

let n = 123;
console.log(solution(n));