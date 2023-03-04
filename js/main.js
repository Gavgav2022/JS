"use strict";

// const pro = prompt("18?");
// console.log(typeof(pro));

const filmCount = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
    count: filmCount,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

const   a = prompt('Один из последних просмотренных фильмов', ''),
        b = +prompt('На сколько оцените его', ''),
        c = prompt('Один из последних просмотренных фильмов', ''),
        d = +prompt('На сколько оцените его', '');

        personalMovieDB.movies[a] = b;

        personalMovieDB.movies[c] = d;

        console.log(personalMovieDB);



