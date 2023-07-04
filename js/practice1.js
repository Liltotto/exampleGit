
let numberOfFilms

function start(){
	numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '')

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '')
	}

}

start()

const personalMovieDB = {
	count: numberOfFilms,
	movies: {

	},
	actors: {

	},
	genres: [],
	privat: false
}


function showMyDB() {
	if(personalMovieDB.privat == false){
		console.log(personalMovieDB)
	}
}

showMyDB()

let yourGenre

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		
		yourGenre = prompt(`Ваш любимый жанр под номером ${i}`, '')
		personalMovieDB.genres[i-1] = yourGenre
	}
}

writeYourGenres()


function detectPersonalLevel(){
	if(personalMovieDB.count < 10) console.log('Просмотрено мало фильмов');
	else if(personalMovieDB.count < 30) console.log('Вы классический зритель');
	else if(personalMovieDB.count >= 30) console.log('Вы киноман');
	else console.log('Произошла ошибка');
}

detectPersonalLevel()

const firstQuestion = 'Один из последних просмотренных фильмов?'
const secondQuestion = 'Насколько оцените его?'

function rememberMyFilms(){
	for (let i = 0; i < 2; i++) {
		let firstAnswer
		let secondAnswer
		do{
			firstAnswer =  prompt(firstQuestion, '')
		} while(firstAnswer === null || !(firstAnswer.length <= 50) || firstAnswer.length == '')
		
		do {
			secondAnswer = prompt(secondQuestion, '')
		} while (secondAnswer === null || !(secondAnswer.length <= 50) || secondAnswer.length == '')
	
		personalMovieDB.movies[firstAnswer] = secondAnswer
		
	}
}

rememberMyFilms()

// const firstAnswer1 = prompt(firstQuestion, '')
// const secondAnswer1 = prompt(secondQuestion, '')

// const firstAnswer2 = prompt(firstQuestion, '')
// const secondAnswer2 = prompt(secondQuestion, '')

// personalMovieDB.movies[firstAnswer1] = secondAnswer1
// personalMovieDB.movies[firstAnswer2] = secondAnswer2

console.log(personalMovieDB)

// first: for (let i = 1; i < 5; i++) {
// 	for (let j = 1; j <= i; j++) {
// 		if(j===2) break first
// 		process.stdout.write("*")
// 	}
// 	console.log(`${i}`)
// }

