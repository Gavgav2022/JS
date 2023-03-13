const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    ganres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        while (personalMovieDB.count == '' || isNaN(personalMovieDB.count) || personalMovieDB.count == null) {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        }
    },
    filmRait: function () {
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
    },
    personalLevel: function () {
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
    },
    checkPrivat: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYG: function () {
        for (let i = 1; i < 4; i++) {
            const ganre = prompt(`Ваш любимый жанр под номером ${i}`);
            console.log(ganre);
            if (ganre === '' || ganre === null) {
                const done = alert("НЕ введено");
                i--;
            } else {
                const done = alert("Введено");
                console.log(done);
                personalMovieDB.ganres[i - 1] = ganre;
                personalMovieDB.ganres.forEach((item, i) => {
                    console.log(`Любимый жанр № ${i + 1}- это ${item}`)
                });
            }
            
        }
    },

    toggleVisDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.writeYG();



const oneObj = {
    firstItem: 256,
    secondItem: "Ada",
    threeItem: 4545,
    fourItem: [1, 454, 65, 18, 22]
}

const twoObj = {};

Object.setPrototypeOf(twoObj, oneObj);
console.log(twoObj.fourItem.sort(coNum));

function coNum(x, y) {
    return x - y;
}



// function First (text, callback) {
//     console.log(`Я учу ${text}`);
//     callback();
// }

// function sho () {
//     console.log('Ffffack');
// }

// First ('JS', sho);

// "use strict";

// const options = {
//     name: 2323,
//     width: 120,
//     height: 152, 
//     secondObj: {
//         odd: 'asada',
//         ddva: 23243
//     },
// };

// // console.log(options["secondObj"]["ddva"]);

// // console.log(typeof(options.secondObj));

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for ( let t in options[key]) {
//             console.log(`Свойство ${t} имеет значение ${options[key][t]}`);
//         }
//     }
//     else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// };

// const newObj = {
//     speed: 200,
//     range: 400,
//     name: 'luna'
// };

// console.log(Object.keys(newObj));
// console.log(Object.keys(newObj).length);

// const arr = [1, 45, 56, 67, 88, 23, 343, 3545, 656];

// arr.forEach(function(item, i, arr) {
//         console.log(`${i}: ${item} в массиве ${arr}`);
// });

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let str = 'asdfsfdfsdfs';

// for (let value of str) {
//     console.log(value);
// // }

// const err = [2, 45, 565, 676, 77, 45, 67];

// err.sort(comapreNum);

// function comapreNum (a, b) {
//     return a - b;
// }

// console.log(err);

// // const pro = prompt("", "");
// // const products = pro.split(", ");
// // products.sort();
// // console.log(products.join(', '));


// const soldier = {
//     health: 200,
//     skill: 150
// }
// const fill = {};

// Object.setPrototypeOf(fill, soldier);

// // const fill = Object.create(soldier);

// console.log(fill.health);