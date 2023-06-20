function solution(answers) {
    let count = [0, 0, 0];
    const std1 = [1, 2, 3, 4, 5];
    const std2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    answers.forEach((e, i) => {
        if (e === std1[i % std1.length]) count[0]++;
        if (e === std2[i % std2.length]) count[1]++;
        if (e === std3[i % std3.length]) count[2]++;
    });

    const max = Math.max(...count);
    const answer = [];
    count.forEach((e, i) => {
        if (e === max) answer.push(i + 1);
    });

    return answer;
}

const answers = [1, 2, 3, 4, 5];

console.log(solution(answers));