function solution(s) {
    let mid = ''; // 가운데 글자
    let str = s.split(''); // 문자열을 배열로 쪼개기
    let len = str.length; // 배열의 길이
    if (len % 2 === 1) { // 배열의 길이가 홀수일 때
        mid = str[(len - 1) / 2]; // 가운데 글자
        return mid;
    }
    else if (len % 2 === 0) {
        mid = str[len / 2 - 1] + str[len / 2]; // 가운데 두 글자
        return mid;
    }
}

let s = "abcd";
console.log(solution(s));