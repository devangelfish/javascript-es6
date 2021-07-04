/*
술어를 인자로 받아서 true 면 해당 원소를 배열에 넣는다.
*/
let animals = ['원숭이', '호랑이', '새우']

let selector = animals.filter(animal => 
    animal[2] == '이' ? true : false
)

console.log(selector)

/*
배열을 기본 값이나 다른 객체로로 반환하는 reduce 함수
*/
let numbers = [12,53,67,32,13,73,43,3,100]

let max = numbers.reduce((initValue, number) =>
    // ( {0}: initValue(accumulator), {1}: ArrayElement, {3}: index, {4}: Array ) 
    (initValue > number) ? initValue : number , 0)

console.log(max)

