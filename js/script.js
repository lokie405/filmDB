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

function removeAllADV() {
    document.querySelector('.promo__adv').remove();
}
removeAllADV();

function changeText() {
    document.querySelector('.promo__genre').innerHTML = 'Драма';
}
changeText();

function changeBackground() {
    const bg = document.querySelector('.promo__bg').style.backgroundImage = "url('../img/bg.jpg')";
}
changeBackground()

function changeOnList() {
    const films = document.querySelectorAll('.promo__interactive-item');
    movieDB.movies.sort();
    for(let i = 0; i < films.length; i++) {
        films[i].innerHTML = movieDB.movies[i];
    }

    const unorderList = document.querySelector('ul', '.promo__interactive-list');

    const orderList = document.createElement('ol', 'class="promo__interactive-list"');
    // unorderList.innerHTML
    orderList.innerHTML = unorderList.innerHTML;


    console.log(unorderList.parentNode.innerHTML);
    console.log(orderList);

    unorderList.replaceWith(orderList);
    


    // const listkind = document.getElementsByClassName('promo__interactive-list');
    // // console.log(listkind);
    // const orderList = document.createElement('ol');
    // // console.log(orderList);
    // const order = listkind[0].parentElement.innerHTML.replaceAll('ul', 'ol');
    // console.log(order)
    // listkind[0].replaceWith(order)
    // for(let i = 0; i < listkind.length; i++) {
    //     console.log(listkind[i].innerHTML)//.replace("ul", 'ol')
    // }
    // console.log(listkind);

}

changeOnList();

