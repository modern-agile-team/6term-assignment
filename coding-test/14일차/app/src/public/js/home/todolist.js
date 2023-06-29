"use strict";

const plusBtn = document.querySelector('#button');
plusBtn.addEventListener('click', () => {
    const input = document.querySelector('#input');
    const text = input.value.trim();

    if(text !== "") {
        addText(text);
        input.value = '';
    } else {
        alert('입력이 필요합니다.');
    }

    return newBox;
});

function addText(text) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('divItem');

    //check박스 만들기
    const newCheckBox = document.createElement('input');
    newCheckBox.setAttribute('type','checkbox');

    //텍스트 넣기
    const newText = document.createTextNode(text);

    //수정 
    const revise = document.createElement('input');
    revise.classList.add('revise')
    revise.setAttribute('type','button');
    revise.value = "✏"

    //삭제
    const deleteBox = document.createElement('input');
    deleteBox.classList.add('deleteBox');
    deleteBox.setAttribute('type','button');
    deleteBox.value = "🗑";

    //div에 넣기
    newDiv.append(newCheckBox ,newText, revise, deleteBox);

    document.querySelector('.s-box').appendChild(newDiv);      
  }