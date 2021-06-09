/*
객체 구조 분해
*/
var human = {
    head : '장동건',
    body : '아놀드 슈왈제네거',
    foot : '박지성'
}

var {body, foot} = human//객체의 필드명이 알맞는 변수명으로 매칭되어 분해됨, 원본은 동일함
console.log(body, foot)
console.log(x, y)//undefined

/*
배열 구조 분해
*/
var [first] = [ '사과', '망고', '고구마']
console.log(first)
var [,,third] = [ '사과', '망고', '고구마']
console.log(third)
var [,second,] = [ '사과', '망고', '고구마']
console.log(second)