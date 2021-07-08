const earth = {
    human : {
        name : {
            firstName : 'Jay',
            lastName : 'Park'
        }
    }
}

const { firstName: value /*새로운 변수 이름으로 할당*/} = earth.human.name
console.log(value) // Jay


const { lastName: value2 } = earth.human
console.log(value2) // undefined -> 객체 안 객체

const { lastName: value3 = 'Mun' } = earth.human
console.log(value3) // undefined -> 객체 안 객체 