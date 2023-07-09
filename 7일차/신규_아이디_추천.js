function solution(new_id) {
    new_id = step1(new_id);
    new_id = step2(new_id);
    new_id = step3(new_id);
    new_id = step4(new_id);
    new_id = step5(new_id);
    new_id = step6(new_id);
    new_id = step7(new_id);

    return new_id;
}
// 1단계 - 소문자로 치환
let step1 = (new_id) => new_id.toLowerCase();

// 2단계 - 소문자, 숫자, 빼기, 밑줄, 마침표 제외한 모든 문자 제거
let step2 = (new_id) => new_id.replace(/[^a-z0-9-_.]/g, '');

// 3단계 - 마침표 2번 이상 연속된 부분을 하나의 마침표로 치환
function step3 (new_id) {
    let result = new_id;
    while (result.includes('..')) {
        result = result.replace('..', '.');
    }
    return result;
}

// 4단계 - 마침표가 처음이나 끝에 위치한다면 제거
function step4 (new_id) {
    if (new_id.charAt(0) === '.') {
        new_id = new_id.slice(1);
    }
    if (new_id.charAt(new_id.length - 1) === '.') {
        new_id = new_id.slice(0, -1);
    }
    return new_id;
}

// 5단계 - 빈 문자열이라면, "a" 대입
let step5 = (new_id) => new_id.length === 0 ? 'a' : new_id;

// 6단계 - 길이가 16자 이상이면, 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
// 제거 후 마침표가 끝에 위치한다면 제거
function step6 (new_id) {
    if (new_id.length >= 16) new_id = new_id.slice(0, 15);
    new_id = step4(new_id);
    return new_id;
}

// 7단계 - 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙임
function step7 (new_id) {
    if (new_id.length <= 2) {
        while (new_id.length < 3) {
            new_id += new_id.charAt(new_id.length - 1);
        }
    }
    return new_id;
}

new_id = "...!@BaT#*..y.abcdefghijklm";
console.log(solution(new_id));