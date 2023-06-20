function solution(seoul) {
  var find_Kim = seoul.indexOf("Kim");
  var answer = '김서방은 ' + find_Kim + '에 있다';
  return answer;
}

let seoul = ["Kim", "a"];
console.log(solution(seoul));

/* function findKim(seoul){
  var idx = seoul.indexOf('Kim');

  return "김서방은 " + idx + "에 있다";
}

// 실행을 위한 테스트코드입니다.
console.log( findKim(["Queen", "Tod", "Kim"]));
 */