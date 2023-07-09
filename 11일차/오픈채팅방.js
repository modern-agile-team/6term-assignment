function solution(record) {
    const answer = [];
    const users = {};

    record.forEach((value) => {
        const [command, uid, nickname] = value.split(' '); // command, uid, nickname으로 분리
        if (command === 'Enter' || command === 'Change') {
            users[uid] = nickname; // uid를 key로 nickname을 value로 저장
        }
    });

    record.forEach((value) => {
        const [command, uid] = value.split(' '); // command, uid로 분리
        if (command === 'Enter') {
            answer.push(`${users[uid]}님이 들어왔습니다.`); // users에서 uid를 key로 nickname을 가져와서 출력
        }
        else if (command === 'Leave') {
            answer.push(`${users[uid]}님이 나갔습니다.`);
        }
    });
    return answer;
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

console.log(solution(record));