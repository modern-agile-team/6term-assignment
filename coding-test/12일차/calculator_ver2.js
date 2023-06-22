//로직구성
//1. 숫자랑 연산자 구분
//2. 

function calculator() {
    let input_value = document.getElementById('text').value;

    input_exit(input_value);

    const {num, oper} = disunite(input_value);
    mul_div(num, oper);
    add_sub(num, oper);

    const result = num.reduce((total, num) => {
        total += (num !== 0) ? num : 0;
        return total;
    });

    document.getElementById('result').innerHTML = result;
}

// function test(input_value) {
//     const {num, oper} = disunite(input_value);
//     console.log(num, oper);
//     mul_div(num, oper);
//     add_sub(num, oper);
//     // console.log(num);
//     const result = num.reduce((total, num) => {
//         total += (num !== 0) ? num : 0;
//         return total;
//     })
//     console.log(result);
//     return result;
// }

//exit입력시 계산기 종료
function input_exit(text_value) {
    if(text_value.toLowerCase() === 'exit') {
        alert('계산기 종료');
        window.close();
    }
}

//숫자와 연산자 분류
function disunite(input_value){
    const num = input_value.split(/[\/\+\-\*]/g);
    const oper = input_value.match(/[\/\+\-\*]/g);
    return {num, oper};
}

function mul_div(num, oper) {
    for (let i = 0; i < oper.length; i++) {
        if (oper[i] === '*' || oper[i] === '/'){
            if(oper[i] === '*') {
                num[i+1] = num[i] * num[i+1]
                num[i] = 0;
            }
            if(oper[i]=== '/') {
                num[i+1] = num[i] / num[i+1];
                num[i] = 0;
            }
        }
    }
}

function add_sub(num, oper) {
    for (let i = 0; i < oper.length; i++) {
        if (oper[i] === '+' || oper[i] === '-'){
            if(oper[i] === '+') {
                num[i+1] = Number(num[i]) + Number(num[i+1])
                num[i] = 0;
            }
            if(oper[i]=== '-') {
                num[i+1] = Number(num[i]) - Number(num[i+1]);
                num[i] = 0;
            }
        }
    }
}

// test('1 + 5 -2 + 3 + 1/2');