var defaultPerson = {
    name: {
        first: '재범',
        last: '문'
    },
    favActivity: '테니스'
}

function logActivity(p=defaultPerson) {
    console.log(`${p.name.first}은(는) ${p.favActivity}를 좋아합니다.`);
}

logActivity();