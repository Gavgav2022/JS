let filmCount;

function start() {
    filmCount = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    while (filmCount == '' || isNaN(filmCount) || filmCount == null) {
        filmCount = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: filmCount,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};





function filmRait() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
            b = +prompt('На сколько оцените его', '');
        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            const ale = alert('Нелья оставлять поле пустым или пропускать!');
            console.log(ale);
            i--;
        }
    }
}

filmRait();



function personalLevel() {
    if (personalMovieDB.count < 10) {
        const films = alert('Мало!');
        console.log(films);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        const films = alert('Вы классный зритель!');
        console.log(films);
    } else if (personalMovieDB.count >= 30) {
        const films = alert('Вы киноман!');
        console.log(films);
    } else {
        const films = alert('Введено не верное значение!');
        console.log(films);
    }
    // console.log(personalMovieDB);
}

personalLevel();

function checkPrivat(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}


function writeYG() {
    for (let i = 1; i < 4; i++) {
      const ganre =  prompt(`Ваш любимый жанр под номером ${i}`);
      personalMovieDB.ganres[i-1] = ganre;
    }
}
writeYG();

checkPrivat(personalMovieDB.privat);