// 로직구성
//0. 텍스트를 입력하고, 입력을 누르면 자동으로 값이 계산되게 하는 프로그램 작성
//0. 기능별로 함수를 나눠서 최대한 작게 만들기
//0. 함수의 길이가 20이 넘지 않도록 한다.
//0. 들여쓰기 4가 안 넘도록 구성

//1. 입력을 누르면 값이 튀어나오게 함수구성
//2. exit라는 값을 적고 입력을 눌렀을 때, 종료 경고창나오게
//3. +-*/ 계산별로 함수 구현 -> 배열에 넣고 계산

//텍스트 입력 시 출력되는 함수
function print_text() {
    let text_value = document.getElementById('text').value;
    input_exit(text_value);
    let total = calculator(text_value);
    document.getElementById('result').innerHTML = total; //입력 그대로 출력
}

//exit 입력 시 종료
function input_exit(text_value) {
    if(text_value === 'exit') {
        alert('계산기 종료');
    }
}

//계산기
function calculator(text_value) {
    let text_arr = text_makeArr(text_value);
    for(let i = 0; i < text_arr.length; i++) {
        mul(text_arr);
        div(text_arr);
        add(text_arr);
        sub(text_arr);

    }
    console.log(Number(text_arr[0].toFixed(2)));
    return Number(text_arr[0].toFixed(2))
}

//받은 text_value를 배열 형태롤 저장하는 함수
function text_makeArr(text_value) {
    const text_arr = text_value.match(/[\d\+\*\/\-]/g);
    // \d.\d{1,2}|[\d\+\-\*\/] 실수 계산 시
    return text_arr;
}

//계산처리 후 배열에 추가/삭제
function cal(text_arr, i, temp) {   
    text_arr[i-1] = temp;   //연산된 값을 추가
    // console.log(text_arr.indexOf(text_arr[i-1])); //인덱스 확인
    text_arr.splice(text_arr.indexOf(text_arr[i]),2);   //연산 후 값 삭제
    console.log(text_arr);
    return text_arr;
}

//곱셈계산
function mul(text_arr) {
    for(let i = 0; i < text_arr.length; i++) {
        if(text_arr[i] === '*') {
            let temp = text_arr[i-1] * text_arr[i+1];
            cal(text_arr, i, temp);
        }
    }
}


//나눗셈 계산
function div(text_arr) {
    for(let i = 0; i < text_arr.length; i++) {
        if(text_arr[i] === '/') {
            let temp = text_arr[i-1] / text_arr[i+1];
            cal(text_arr, i, temp);
        }
    }
}
//덧셈 계산
function add(text_arr) {
    for(let i = 0; i < text_arr.length; i++) {
        if(text_arr[i] === '+') {
            let temp = Number(text_arr[i-1]) + Number(text_arr[i+1]);
            cal(text_arr, i, temp);
        }
    }
}
//빼기 계산
function sub(text_arr) {
    for(let i = 0; i < text_arr.length; i++) {
        if(text_arr[i] === '-') {
            let temp = Number(text_arr[i-1]) - Number(text_arr[i+1]);
            cal(text_arr, i, temp);
        }
    }
}

// //곱셈계산 ver1.1
// function mul(text_arr) {
//     for(let i = 0; i < text_arr.length; i++) {
//         if(text_arr[i] === '*') {
//             let temp = text_arr[i-1] * text_arr[i+1];
//             cal(text_arr, i, temp);
//         }
//         if(text_arr[i] === '/') {
//             let temp = text_arr[i-1] / text_arr[i+1];
//             cal(text_arr, i, temp);
//         }
//         if(text_arr[i] === '+') {
//             let temp = Number(text_arr[i-1]) + Number(text_arr[i+1]);
//             cal(text_arr, i, temp);
//         }
//         if(text_arr[i] === '-') {
//             let temp = Number(text_arr[i-1]) - Number(text_arr[i+1]);
//             cal(text_arr, i, temp);
//         }
//     }
// }

// calculator('1 / 2 + 3 + 4 * 5');
// calculator('1 + 4 * 7 - 2 / 3');
// calculator('1 / 2 + 3 + 6 - 3 * 5');
// calculator('5 * 5 * 3 + 4 * 3');
// calculator('1 * 3 + 5 / 2 * 3 - 2');

