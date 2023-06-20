function calculate() {
    const input = document.getElementById("input").value; // input의 value값을 가져옴

    if (input.toLowerCase() == "exit") { // exit을 입력하면 프로그램 종료
        alert("프로그램을 종료합니다.");
        window.close();
    }

    const {numbers, ops} = recognize(input); // input을 숫자와 연산자로 분리
    let result; // 결과값

    // 연산자 우선순위를 적용한 계산 수행
    result = evaluate(numbers, ops);

    Number.isInteger(result) ? printResultInt(result) : printResultDec(result); // 결과값이 정수인지 실수인지 판별하여 출력
}

// input을 숫자와 연산자로 분리
function recognize(input) {
    const numbers = input.split(/[+\-*/]/);
    const ops = input.match(/[+\-*/]/g);

    return {numbers, ops};
}

// 사칙연산 계산
add = (a, b) => a + b;
sub = (a, b) => a - b;
mul = (a, b) => a * b;
div = (a, b) => a / b;

// 연산자 우선순위를 적용한 계산 수행
function evaluate(numbers, ops) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };

    const numStack = []; // 숫자 스택
    const opStack = []; // 연산자 스택

    for (let i = 0; i < ops.length; i++) {
        const op = ops[i];
        const num = Number(numbers[i]);
        numStack.push(num);

        while (opStack.length > 0 && precedence[op] <= precedence[opStack[opStack.length - 1]]) { // 스택의 top에 있는 연산자가 현재 연산자보다 우선순위가 높거나 같을 때까지 반복
            const b = numStack.pop();
            const a = numStack.pop();
            const prevOp = opStack.pop();
            const result = calculateOperation(a, b, prevOp); 
            numStack.push(result);
        }

        opStack.push(op);
    }

    numStack.push(Number(numbers[numbers.length - 1])); // 마지막 숫자를 숫자 스택에 push

    while (opStack.length > 0) { // 연산자 스택이 빌 때까지 반복
        const b = numStack.pop();
        const a = numStack.pop();
        const op = opStack.pop();
        const result = calculateOperation(a, b, op);
        numStack.push(result);
    }

    return numStack[0];
}

// 사칙연산 계산
function calculateOperation(a, b, op) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return mul(a, b);
        case '/':
            return div(a, b);
    }
}

// 정수일 때 결과값 출력
function printResultInt(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "결과: " + parseInt(result);
}

// 소수점일 때 결과값 출력
function printResultDec(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "결과: " + result.toFixed(2);
}