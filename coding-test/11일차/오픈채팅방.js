function solution(record) {
    //로직구성
    //0. 받아온 문자열을 쪼개서 배열로 만든다.
    //1. 객체로 새로 들어온 아이디와, 닉네임을 매치
    //2. Enter, Leave, Change 에 따라서 닉네밍임이 변경되는 함수로 구현
    //3. 
    
    const chatRoom = {};
    const msg = [];
    //받아온 user을 배열에 담는 함수
    function create_user() {
        const arr = [];
        for(let i = 0; i < record.length; i++) {
            arr[i] = record[i].split(' ');
        }
        return arr;
    }
    
    //채팅방 출입
    function enter_chatRoon() {
        for (let i = 0 ; i < user.length; i++) {
            if(user[i][0] === 'Enter') {
                chatRoom[user[i][1]] = user[i][2];
                // console.log(`\"${chatRoom[user[i][1]]}님이 들어왔습니다.\"`)
                msg.push(`${chatRoom[user[i][1]]}님이 들어왔습니다.`);
            }
            if(user[i][0] === 'Leave') {
                // console.log(`\"${chatRoomx[user[i][1]]}님이 나갔습니다.\"`)
                msg.push(`${chatRoom[user[i][1]]}님이 나갔습니다.`);
                delete chatRoom[user[i][1]];
            }
            if(user[i][0] === 'Change') {
                msg.push(`${chatRoom[user[i][1]]}님 이름 변경`);
                chatRoom[user[i][1]] = user[i][2];
                msg.push(`${chatRoom[user[i][1]]}님`);
            }
        }
    }
    
    
    const user = create_user();
    enter_chatRoon();
    // console.log(user);
    // console.log(chatRoom);
    console.log(msg);
    return msg;
}


solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]);