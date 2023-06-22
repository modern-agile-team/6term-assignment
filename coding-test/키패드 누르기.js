function solution(numbers, hand) {
    //로직구성
    //1. 1,4,7은 왼손, 3,6,9는 오른손 무조건
    //2. 2,5,8,0은 현재 위치에서 가까운 손
    //3. 현재 손가락의 위치를 알려줄 것이 필요

    const lPointer = [3,0];
    const rPointer = [3,2];
    const useHand = []; //결과값을 담을 배열
    const keyPad = {    //각 번호를 객체로 구현
        1 : [0,0],
        2 : [0,1],
        3 : [0,2],
        4 : [1,0],
        5 : [1,1],
        6 : [1,2],
        7 : [2,0],
        8 : [2,1],
        9 : [2,2],
        '*' : [3,0],
        0 : [3,1],
        '#' : [3,2],
    }

    numbers.forEach(element => {
        if (element === 1 || element === 4 || element === 7) {
            useHand.push('L');
            lPointer = keyPad[element]; //[0,0] 형식으로 저장
        } else if (element === 3 || element === 6 || element === 9) {
            useHand.push('R');
            rPointer = keyPad[element]; //[0,0] 형식으로 저장
        } else {
            let tempRow = keyPad[element][0];   //현재 elment의 첫 번째 요소
            let tempCell = keyPad[element][1];  //현재 elment의 두 번째 요소
            let cntL = 0;   //현재 요소에서 l r pointer까지의 거리 cnt로 비교
            let cntR = 0;
            cntL += Math.abs(lPointer[0] - tempRow);
            cntL += Math.abs(lPointer[1] - tempCell);
            cntR += Math.abs(rPointer[0] - tempRow);
            cntR += Math.abs(rPointer[1] - tempCell);
            if (cntL < cntR) {
                useHand.push('L');
                lPointer = keyPad[element];
            } else if (cntL > cntR) {
                useHand.push('R');
                rPointer = keyPad[element];
            } else {
                let temp = hand === 'left' ? 'L' : 'R'
                useHand.push(temp);
                temp === 'L' ? lPointer = keyPad[element] : rPointer = keyPad[element];
                
            }
        }
    });
    // console.log(useHand);
    // console.log(useHand.join(''));
    return useHand.join('');
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");