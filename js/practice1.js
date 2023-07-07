

// function start(){
// 	numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '')

// 	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
// 		numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '')
// 	}

// }

// start()

const personalMovieDB = {
	count: undefined,
	movies: {

	},
	actors: {

	},
	genres: [],
	start: function(){
		let numberOfFilms
		numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '')

		while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
			numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '')
		}
		personalMovieDB.count = numberOfFilms
	},
	showMyDB: function() {
		if(personalMovieDB.privat === false){
			console.log(personalMovieDB)
		
		}
	},
	toggleVisibleMyBD: function(){
		if(personalMovieDB.privat == false) personalMovieDB.privat = true
		else if(personalMovieDB.privat == true) personalMovieDB.privat = false
	},
	writeYourGenres: function() {
		let yourGenre
		for (let i = 1; i <= 3; i++) {
			yourGenre = prompt(`Ваш любимый жанр под номером ${i}`, '')
			if(yourGenre === null || yourGenre === '') {
				i--
				continue
			}
			personalMovieDB.genres[i-1] = yourGenre
		}
		personalMovieDB.genres.forEach((element, index) => {
			`Любимый жанр ${index} - это ${element}`
		})
	},
	detectPersonalLevel: function(){
		if(personalMovieDB.count < 10) console.log('Просмотрено мало фильмов')
		else if(personalMovieDB.count < 30) console.log('Вы классический зритель')
		else if(personalMovieDB.count >= 30) console.log('Вы киноман')
		else console.log('Произошла ошибка')
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			let firstAnswer
			let secondAnswer
			do{
				firstAnswer =  prompt('Один из последних просмотренных фильмов?', '').trim()
			} while(firstAnswer === null || !(firstAnswer.length <= 50) || firstAnswer.length == '')
		
			do {
				secondAnswer = prompt('Насколько оцените его?', '').trim()
			} while (secondAnswer === null || !(secondAnswer.length <= 50) || secondAnswer.length == '')
	
			personalMovieDB.movies[firstAnswer] = secondAnswer
		}
	},
	privat: false
}

// personalMovieDB.showMyDB()
// personalMovieDB.toggleVisibleMyBD()


personalMovieDB.start()
personalMovieDB.writeYourGenres()

// function showMyDB() {
// 	if(personalMovieDB.privat == false){
// 		console.log(personalMovieDB)
// 	}
// }

// showMyDB()

// 

// function writeYourGenres() {
// 	for (let i = 1; i <= 3; i++) {
		
// 		yourGenre = prompt(`Ваш любимый жанр под номером ${i}`, '')
// 		personalMovieDB.genres[i-1] = yourGenre
// 	}
// }

// writeYourGenres()


// function detectPersonalLevel(){
// 	if(personalMovieDB.count < 10) console.log('Просмотрено мало фильмов');
// 	else if(personalMovieDB.count < 30) console.log('Вы классический зритель');
// 	else if(personalMovieDB.count >= 30) console.log('Вы киноман');
// 	else console.log('Произошла ошибка');
// }

// detectPersonalLevel()

// function rememberMyFilms(){
// 	for (let i = 0; i < 2; i++) {
// 		let firstAnswer
// 		let secondAnswer
// 		do{
// 			firstAnswer =  prompt('Один из последних просмотренных фильмов?', '').trim()
// 		} while(firstAnswer === null || !(firstAnswer.length <= 50) || firstAnswer.length == '')
		
// 		do {
// 			secondAnswer = prompt('Насколько оцените его?', '').trim()
// 		} while (secondAnswer === null || !(secondAnswer.length <= 50) || secondAnswer.length == '')
	
// 		personalMovieDB.movies[firstAnswer] = secondAnswer
		
// 	}
// }

// rememberMyFilms()

// const firstAnswer1 = prompt(firstQuestion, '')
// const secondAnswer1 = prompt(secondQuestion, '')

// const firstAnswer2 = prompt(firstQuestion, '')
// const secondAnswer2 = prompt(secondQuestion, '')

// personalMovieDB.movies[firstAnswer1] = secondAnswer1
// personalMovieDB.movies[firstAnswer2] = secondAnswer2



// first: for (let i = 1; i < 5; i++) {
// 	for (let j = 1; j <= i; j++) {
// 		if(j===2) break first
// 		process.stdout.write("*")
// 	}
// 	console.log(`${i}`)
// }

