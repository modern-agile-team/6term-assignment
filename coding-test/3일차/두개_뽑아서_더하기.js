function solution(numbers) {
    const answer = [];
    numbers.sort((a, b) => a - b); // 오름차순 정렬
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (i === j) continue; // i와 j가 같은 경우
            answer.push(numbers[i] + numbers[j]); // 두 수를 더한 값을 answer에 push
        }
    }
    const set = new Set(answer); // 중복 제거
    return [...set].sort((a, b) => a - b); // 배열로 변환, 오름차순 정렬
}

numbers = [1, 1, 2, 3, 4];

console.log(solution(numbers));