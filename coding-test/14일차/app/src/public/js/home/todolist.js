"use strict";

//plus 버튼 클릭 시 동작
const input = document.querySelector('#input');
const plusBtn = document.querySelector('#button');
plusBtn.addEventListener('click', () => {
    let text = input.value;

    const req = {
        description: text,
    };

    if(text !== "") {
        addText(text);
        fetch('/todolist', {
            method: "POST", //rest의 전달 기능  
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
        input.value = '';
    } else {
        alert('입력이 필요합니다.');
    }
    
});

//del 버튼 클릭 시 동작
// const delBtn = document.querySelector('.deleteBox');
// delBtn.addEventListener('click', (value)=> {

// });

//todo추가 함수
function addText(text) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('divItem');

    //check박스
    const newCheckBox = document.createElement('input');
    newCheckBox.setAttribute('type','checkbox');

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

