function solution(n) {
    let str = "";
    while (n) {
        if (n % 2) {
            str = "수" + str;
        } else {
            str = "박" + str;
        }
        n--;
    }
    return str;
}