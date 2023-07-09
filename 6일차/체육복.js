function solution(n, lost, reserve) {
    let count = 0;
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    let std = Array(n).fill(1); // 1로 초기화

    lost.forEach((e) => std[e - 1]--); // 잃어버린 학생은 -1
    reserve.forEach((e) => std[e - 1]++); // 여벌이 있는 학생은 +1

    for (let i = 0; i < n; i++) {
        if (std[i] === 0) {
            if (std[i - 1] === 2) {
                std[i - 1]--;
                std[i]++;
            }
            else if (std[i + 1] === 2) {
                std[i + 1]--;
                std[i]++;
            }
        }
        if (std[i] >= 1) count++;
    }

    return count;
}

const n = 5;
const lost = [2, 4];
const reserve = [3];

console.log(solution(n, lost, reserve));