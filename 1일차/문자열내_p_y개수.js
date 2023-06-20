let s = "pPoooyY";
console.log(solution(s));

s = "aqsqd";
console.log(solution(s));
console.log(s.match(/p/gi));

s = " ";
console.log(solution(s));

s = "Pyy";
console.log(solution(s));

/* function solution(s){
    if ((s.match(/p/gi) && s.match(/y/gi)) === null)
        return true;
    else if ((s.match(/p/gi).length) === (s.match(/y/gi).length))
        return true;
    else
        return false;
} */

function solution(s) {
    let p = 0;
    let y = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p" || s[i] === "P") {
            p++;
        }
        else if (s[i] === "y" || s[i] === "Y") {
            y++;
        }
    }
    if (p === y) {
        return true;
    }
    else if (p === 0 && y === 0) {
        return true;
    }
    else {
        return false;
    }
}