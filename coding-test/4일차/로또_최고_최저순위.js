function solution(lottos, win_nums) {
    const max_correct = [];
    const min_correct = [];
    const answer = [];

    // 배열 lottos 안의 0의 개수
    let zeroCount = lottos.filter(num => num === 0).length;

    for (let i = 0; i < lottos.length; i++) {
        // lottos의 요소가 win_nums에 포함되어 있으면
        if (win_nums.includes(lottos[i])) {
            max_correct.push(lottos[i]); // max_correct에 요소 추가
            min_correct.push(lottos[i]); // min_correct에 요소 추가
        }
    }
    // 최고 순위
    for (let i = 0; i < win_nums.length; i++) {
        // max_correct에 win_nums의 요소가 포함되어 있지 않고, 0의 개수가 0보다 클 때
        if (!max_correct.includes(win_nums[i]) && zeroCount > 0) {
            max_correct.push(win_nums[i]); // max_correct에 win_nums의 요소 추가
            zeroCount--; // 추가할 때마다 zeroCount 감소
        }

        if (zeroCount === 0) {
            break; // zeroCount가 0이 되면 반복문 종료
        }
    }

    // [최고 순위, 최저 순위]
    switch (max_correct.length) {
        case 6:
            answer.push(1);
            break;
        case 5:
            answer.push(2);
            break;
        case 4:
            answer.push(3);
            break;
        case 3:
            answer.push(4);
            break;
        case 2:
            answer.push(5);
            break;
        default:
            answer.push(6);
            break;
    }

    switch (min_correct.length) {
        case 6:
            answer.push(1);
            break;
        case 5:
            answer.push(2);
            break;
        case 4:
            answer.push(3);
            break;
        case 3:
            answer.push(4);
            break;
        case 2:
            answer.push(5);
            break;
        default:
            answer.push(6);
            break;
    }
    return answer;
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

console.log(solution(lottos, win_nums));