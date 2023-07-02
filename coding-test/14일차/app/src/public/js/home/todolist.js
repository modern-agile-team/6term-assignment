"use strict";

//plus 버튼 클릭 시 동작
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

  //fetch로 보낼 text데이터를 담은 객체
  const req = {
    text: newText.value,
  };

  //fetch를 통해서 서버로 값을 보낸다.
  fetch('/todolist', {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(req),
  });

//del 버튼 클릭 시 동작
const delBtn = document.querySelector('.deleteBox');
delBtn.addEventListener('click', (value)=> {

});