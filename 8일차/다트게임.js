function solution(dartResult) {
    let answer = 0; // 총 점수
    let before = 0; // 이전 점수
    
    for (let i = 0; i < dartResult.length; i++) {
        let result = 0; // 각각의 점수
        let bonus = dartResult[i];
        
        if (bonus === 'S' || bonus === 'D' || bonus === 'T') {
            let number = Number(dartResult[i-1]);
            let option = dartResult[i+1];
            if (dartResult[i-1] === '0' && dartResult[i-2] === '1') {
                number = 10;
            }
            result += number ** (bonus === 'S' ? 1 : bonus === 'D' ? 2 : 3); // S면 1제곱, D면 2제곱, T면 3제곱

            result = option === '*' ? result * 2 : option === '#' ? result * -1 : result; // *이면 2배, #이면 -1배

            if (option === '*') {
                answer -= before;
                before *= 2;
                answer += before;
            }
            before = result;
            answer += result;
        }
    }
    return answer;
}

const dartResult = "1S2D*3T*";
console.log(solution(dartResult));