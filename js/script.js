/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    filmList = document.querySelector('.promo__interactive-list'),
    filmTitle = document.querySelector('.promo__interactive-title');

// 1:
adv.forEach(item => {
    item.remove()
})

// 2:
genre.textContent = 'Драма';

// 3:
poster.style.backgroundImage = 'url("../img/bg.jpg")';

// 4:
movieDB.movies.sort;

//__version_1:
// filmList.remove();
// movieDB.movies.sort();
// filmTitle.insertAdjacentHTML('afterend', '<ul class="promo__interactive-list"></ul>');
// const filmOList = document.querySelector('.promo__interactive-list');

// let list = ''
// for(let i = 0; i < movieDB.movies.length; i++) {
//      list += `<li class="promo__interactive-item"> ${movieDB.movies[i]}${'\n'}</li>`
// }
// filmOList.innerHTML = list

//__version_2:
// filmList.innerHTML = '';
// movieDB.movies.sort();

// for(let i = 0; i < movieDB.movies.length; i++) {
//     // filmItem.innerHTML = i + 'SER';
//     const filmItem = document.createElement('li');
//     filmItem.setAttribute('class', 'promo__interactive-item');
//     filmList.appendChild(filmItem);
//     filmItem.textContent = `${i + 1}. ${movieDB.movies[i]}`;
// }

//__version_3:

filmList.innerHTML = '';

movieDB.movies.sort();
movieDB.movies.forEach((item, index) => {

    filmList.innerHTML += `
        <li class="promo__interactive-item">${index + 1}. ${item}
            <div class="delete"></div>
        </li>
    `
})

