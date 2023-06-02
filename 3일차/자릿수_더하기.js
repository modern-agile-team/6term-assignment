function solution(n)
{
    let sum = 0;
    let str = n.toString(); // 숫자를 문자열로 변환
    for(let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]); // 문자열을 숫자로 변환 후 덧셈
    }
    return sum;
}

let n = 987;
console.log(solution(n));
