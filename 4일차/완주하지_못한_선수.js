
participant = ["leo", "kiki", "eden"];
completion = ["eden", "kiki"];

console.log(solution(participant, completion));

function solution(participant, completion) {
    let obj = {};
    participant.forEach(player => { // obj에 참가자 저장
        if (obj[player] > 0) { // obj에 player가 있으면
            obj[player]++; // obj에 player의 value를 1 증가
        }
        else { // obj에 player가 없으면
            obj[player] = 1; // obj에 player를 key로 value를 1로 저장
        }
    });
    completion.forEach(player => { // obj에 완주자 저장
        obj[player]--; // obj에 완주자가 있으면 value를 1 감소
    });
    return Object.keys(obj).filter(player => obj[player] > 0).toString(''); // obj의 value가 0보다 큰 key를 반환
}



// 시간 초과
/* function solution(participant, completion) {
    let pr = {};
    let co = {};
    for (let i = 0; i < participant.length; i++) { // pr에 참가자 저장
        pr['name' + i] = participant[i];
    }
    for (let i = 0; i < completion.length; i++) { // co에 완주자 저장
        co['name' + i] = completion[i];
    }

    for (let i = 0; i < participant.length; i++) {
        for (let j = 0; j < completion.length; j++) {
            if (pr['name' + i] === co['name' + j]) { // pr과 co에 같은 이름이 있으면
                delete pr['name' + i]; // pr과 co에서 삭제
                delete co['name' + j];
            }
        }
    }
    for (let i = 0; i < participant.length; i++) {
        if (pr['name' + i] !== undefined) { // pr에 남은 이름이 있으면
            pr = pr['name' + i]; // pr에 남은 이름을 저장
        }
    }
    return pr;
} */