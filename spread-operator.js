/*
스프레드 연산자 ... 점 세개로 이루어진 연산자
*/
var country = ['중면', '적암리', '미산면']

var city = ['서울', '부산', '대구']

var area = [...city, ...country]

console.log(area) // [ '서울', '부산', '대구', '중면', '적암리', '미산면' ]

/*
불변성을 유지 할 때
*/
var reverseArea = [...area].reverse()
console.log(reverseArea, area)
// [ '미산면', '적암리', '중면', '대구', '부산', '서울' ]
// [ '서울', '부산', '대구', '중면', '적암리', '미산면' ]
// 원본이 변하지 않음
reverseArea = area.reverse()
console.log(reverseArea, area)
// [ '미산면', '적암리', '중면', '대구', '부산', '서울' ]
// [ '미산면', '적암리', '중면', '대구', '부산', '서울' ]
// 원본이 변함

/*
배열의 나머지 인자 모으기
*/
var lakes = ['대동강', '낙동강', '한강', '금강']
var [nKoreaLake, ...sKoreaLake] = lakes
console.log(`nKoreaLake => ${nKoreaLake}, sKoreaLake => ${sKoreaLake}`)

/*
객체에 스프레드 적용하기
*/
var set = {
    main: '짜장면',
    sub: '탕수육'
}

var desert = '군만두'

var set2 = {
    ...set,
    desert// 같은 필드가 없으면 객체에 추가됨
}

var set3 = {
    ...set,
    main: '짬뽕'// 필드가 같으면 덮음 '짜장면' => '짬뽕'
}

console.log(set2)
console.log(set3) 

