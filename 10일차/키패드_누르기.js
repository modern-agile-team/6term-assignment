function solution(numbers, hand) {
    let answer = '';
    let leftHand = '*';
    let rightHand = '#';

    const getDistance = (handPosition, number) => { // 거리 구하는 함수
        const keypad = { // 키패드 좌표
            1: [0, 0], 2: [0, 1], 3: [0, 2],
            4: [1, 0], 5: [1, 1], 6: [1, 2],
            7: [2, 0], 8: [2, 1], 9: [2, 2],
            '*': [3, 0], 0: [3, 1], '#': [3, 2]
        };
        const [x1, y1] = keypad[handPosition]; // 현재 손 위치
        const [x2, y2] = keypad[number]; // 누를 번호 위치
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };

    const isLeftHand = (number) => [1, 4, 7].includes(number); // 왼손으로 누를 번호
    const isRightHand = (number) => [3, 6, 9].includes(number); // 오른손으로 누를 번호 

    for (let i = 0; i < numbers.length; i++) {
        if (isLeftHand(numbers[i])) { // 왼손으로 누를 번호일 경우
            answer += 'L';
            leftHand = numbers[i];
        }
        else if (isRightHand(numbers[i])) { // 오른손으로 누를 번호일 경우
            answer += 'R';
            rightHand = numbers[i];
        }
        else { // 가운데 번호일 경우
            const leftDistance = getDistance(leftHand, numbers[i]); // 왼손과 누를 번호의 거리
            const rightDistance = getDistance(rightHand, numbers[i]); // 오른손과 누를 번호의 거리

            if (leftDistance < rightDistance) { // 왼손이 더 가까울 경우
                answer += 'L';
                leftHand = numbers[i];
            }
            else if (leftDistance > rightDistance) { // 오른손이 더 가까울 경우
                answer += 'R';
                rightHand = numbers[i];
            }
            else { // 거리가 같을 경우
                if (hand === 'left') {
                    answer += 'L';
                    leftHand = numbers[i];
                }
                else {
                    answer += 'R';
                    rightHand = numbers[i];
                }
            }
        }
    }
    return answer;
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';

console.log(solution(numbers, hand));