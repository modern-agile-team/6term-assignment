function solution(absolutes, signs) {
    let answer = 0;

    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]) answer += absolutes[i];
        else answer -= absolutes[i];
    }
    return answer;
}

absolutes = [4, 7, 12];
signs = [true, false, true];

console.log(solution(absolutes, signs));

// reduce 함수 사용
/* function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
} */