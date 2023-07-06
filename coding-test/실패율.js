function solution(N, stages) {
    //로직구성
    //0. 실패율 : 스테이지 클리어 못한 수 / 스테이지 도달한 플레이어 수
    //0. N+1은 모든 스테이지 클리어 후 마지막 클레이지 까지 클리어한 사람
    //1. 반복을 1부터 <= N 까지 돌려서 각 스테이지의 실패율을 넣기
    //2. 반복 내부에서 stages반복을 돌려서 각 플레이어가 지나온 스테이지르 cnt를 담을 배열에 cnt++
    //3. cnt가 높은 순으로 내림차순
    
    //스테이마다 0값을 가지고 있도록 배열을 생성
    const stageCnt = [];
    const noClear = [];
    let failpersent = [];       //1~N스테이지 까지의 실패률을 저장
    let sortFailpersent = [];   //1~N스테이지를 내림차순으로 정렬
    const result = [];
    //코드 시작 전 stageCnt와 noClear배열에 길이에 맞는 요소를 0으로 대입
    for (let i = 0; i < N; i++) {
        stageCnt.push(0);
        noClear.push(0);
    }
    // console.log(stageCnt);
    //스테이지에 도달한 플레이어 수 구하기
    for (let i = 0;i < stages.length; i++) {
        for (let j = 0; j < stages[i];j++) {
            stageCnt[(stages[i]-1)-j] += 1; //간 위치 만큼 이전 값들 +1
        }
    }
    if (stageCnt.length > N) { //더 큰 값이 들어왔을 때 NaN방지
        stageCnt.pop();
    }
    // console.log(stageCnt);   //스테이지에 도달한 플레이어 수

    //스테이지에 도달했지만 클리어 하지 못한 수
    for(let i = 0; i < stages.length; i++) {
        noClear[stages[i]-1] += 1;
    }
    if (noClear.length > N) {
        noClear.pop();
    }
    // console.log(noClear); //스테이지에 도달했지만 클리어 못한 플레이어

    //두 값을 계산해서 나온결과
    for (let i = 0; i < N; i++) {
        if (stageCnt[i] === 0) {
            failpersent.push(0);
        } else {
            failpersent.push(noClear[i] / stageCnt[i]);
        }
    }
    //내림차순 정렬 후 두 값을 비교
    sortFailpersent = [...failpersent];
    sortFailpersent.sort((a,b)=>b-a);
    // console.log(failpersent);
    // console.log(sortFailpersent);
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N;j++) {
            if (sortFailpersent[i] === failpersent[j]) {
                failpersent[j] = NaN;
                result[i] = j+1;
                break;
            }
        }
    }
    
    // console.log(result);
    return result;
}

solution(5, [2,1,2,6,2,4,3,3]);
solution(4, [4,4,4,4,4]);
solution(2, [1,1,1,1]);