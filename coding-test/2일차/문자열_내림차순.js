function solution(s) {
    let str = s.split(''); // 문자열을 배열로 쪼개기
    str.sort(); // 배열 정렬
    str.reverse(); // 배열 뒤집기
    str = str.join(''); // 배열을 문자열로 합치기
    return str;
}

let s = "Zbcdefg";
console.log(solution(s));