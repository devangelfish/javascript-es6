/*순수 함수*/
/*
파라미터에 의해서 값이 결정되는 함수
최소 하나 이상의 인자를 받고, 항상 같은 값이나 함수를 반환
전역 변수를 설정하거나 함수 내부나 애플리케이션에 있는 다른 상태를 변경하면 안 된다.

자신의 환경 또는 어떤 것도 변화시키지 않는다.
*/

let arr = ['사과', '배', '호박', '전']

let reverse = arr => [...arr].reverse()

let reverseArr = reverse(arr)

console.log(reverseArr)
