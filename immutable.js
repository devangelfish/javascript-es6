/*
객체의 불변성
*/
let movie_info = {
    title: '황야의 무법자',
    release: '1966/04/28',
    rating: 8.29
}

/*
복사본 반환
*/
const new_movie = (movie, title) => 
    ({
    ...movie,
     title
    }) 

let new_info = new_movie(movie_info, '악마가 시켰다')

console.log(new_info);

