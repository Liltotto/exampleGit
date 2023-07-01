const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '')

const personalMovieDB = {
	count: numberOfFilms,
	movies: {

	},
	actors: {

	},
	genres: [],
	privat: false
}

const firstQuestion = 'Один из последних просмотренных фильмов?'
const secondQuestion = 'Насколько оцените его?'

const firstAnswer1 = prompt(firstQuestion, '')
const secondAnswer1 = prompt(secondQuestion, '')

const firstAnswer2 = prompt(firstQuestion, '')
const secondAnswer2 = prompt(secondQuestion, '')

personalMovieDB.movies[firstAnswer1] = secondAnswer1
personalMovieDB.movies[firstAnswer2] = secondAnswer2

console.log(personalMovieDB)
