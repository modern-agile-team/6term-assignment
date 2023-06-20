function solution(s) {
    let answer = '';
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            count = 0;
            answer += ' ';
        }
        else if (count % 2 === 0) {
            answer += s[i].toUpperCase();
            count++;
        }
        else {
            answer += s[i].toLowerCase();
            count++;
        }
    }
    return answer;
}

s = "try hello world";
console.log(solution(s));