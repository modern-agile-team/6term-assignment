"use strict";

const input = document.querySelector('#input');
const plusBtn = document.querySelector('#button');

//페이지 로드시 db데이터 로드
window.addEventListener('DOMContentLoaded', ()=> {   
        fetch('/loadtodo', {
            method: "GET", //rest의 전달 기능 (조회)
            headers: {
                "Content-Type" : "application/json",
            },
        })
        .then((res)=>res.json())
        .then((data) => {
            // console.log(data); //출력 결과 확인
            for(let i = 0; i < data.length; i++) {
                const values = Object.values(data[i]);
                addText(values[1]);
            }
        })
});


//plus 버튼 클릭 시 동작
plusBtn.addEventListener('click', () => {
    let text = input.value;

    const req = {
        description: text,
    };
    if(text !== "") {
        console.log(text);
        addText(text);
        fetch('/todolist', {
            method: "POST", //rest의 전달 기능 (데이터 생성) 
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(req),
        })
        .then((res) => res.text())
        .then((data) => {
            // 서버의 응답에 따른 추가 동작 수행
            console.log(data);
        })
        console.log(text);
        input.value = '';
    } else {
        alert('입력이 필요합니다.');
    }
    
});

//checkbox 체크 시 동작
const checkBtn = document.querySelector('check-box');
checkBtn.addEventListener('click', ()=> {
    const is_checked = checkBtn.checked;
    let checkNum = 0;

    if(is_checked) {
        input.style.textDecorationLine = "line-through";
        checkNum = 1;
    } else {
        input.style.textDecorateionLine = "none";
    }

    const req = {
        is_check: checkNum,
    }

    fetch('/checkTodo', {
        method: "PATCH", //rest의 전달 기능 (수정)
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.text()
    .then((data) => {
        // 서버의 응답에 따른 추가 동작 수행
        console.log(data);
    })
    );
});

//todo추가 함수
function addText(text) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('divItem');

    //check박스
    const newCheckBox = document.createElement('input');
    newCheckBox.classList.add('check-box');
    newCheckBox.setAttribute('type', 'checkbox');


    //텍스트 넣기
    const newText = document.createTextNode(text);

    //수정 버튼
    const revise = document.createElement('input');
    revise.classList.add('revise')
    revise.setAttribute('type','button');
    revise.value = "✏"

    //삭제 버튼
    const deleteBox = document.createElement('input');
    deleteBox.classList.add('deleteBox');
    deleteBox.setAttribute('type','button');
    deleteBox.value = "🗑";

    //div에 넣기
    newDiv.append(newCheckBox ,newText, revise, deleteBox);

    document.querySelector('.s-box').appendChild(newDiv);     
  }