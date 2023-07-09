function solution(s) {
    const answer = [];
    const arr = s.slice(2, s.length - 2).split('},{').map((value) => value.split(',').map((value) => parseInt(value))); // {{}} 제거 후 ,로 나누고 숫자로 변환
    arr.sort((a, b) => a.length - b.length); // 오름차순 정렬
    arr.forEach((value) => {
        value.forEach((value) => {
            if (!answer.includes(value)) { // answer에 없는 값이면 push
                answer.push(value);
            }
        });
    });
    return answer;
}

const s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";

console.log(solution(s));