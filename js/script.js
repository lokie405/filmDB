/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        addForm = document.querySelector('form.add'), // teg and class in there
        addInput = addForm.querySelector('.adding__input'),
        // addButton = addForm.querySelector('button'),
        addCheckbox = addForm.querySelector('input[type="checkbox"]'); // by any atrribute
        // buttonsDelete = document.querySelectorAll('.promo__interactive-item:hover .delete');
    
        // console.log(addCheckbox)


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Canceled default things

        const newFilm = addInput.value
        const favorite = addCheckbox.checked;
        
        if (newFilm){
            movieDB.movies.push(newFilm);
            favorite ? console.log('Favorite') : console.log('')
    
            sortArray(movieDB.movies);
    
            createMovieList(movieDB.movies, filmList);
    
            event.target.reset();
        } 
        
        })
    
    const deleteADV = (arr) => {
        arr.forEach(item => {
            item.remove()
        });
    }

    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("../img/bg.jpg")';
    }

    const sortArray = (arr) => {
        arr.forEach(item => {
            item.toUpperCase();
        });
    
        arr.sort();
    }
    
    function createMovieList(films, parent){
        parent.innerHTML = '';
        sortArray(films);
        films.forEach((item, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${index + 1}. ${(item.length > 21) ? item.slice(0, 21).concat('...') : item}
                    <div class="delete"></div>
                </li>
            `
        })

        document.querySelectorAll('.delete').forEach((element, index) => {
            element.addEventListener('click', (e) =>{
                e.target.parentElement.remove();
                films.splice(index, 1);
                createMovieList(films, parent);
                // const removeIndex = films.indexOf();
                // console.log(index)
                // films.splice() 
            })
        })
    }

    deleteADV(adv)

    makeChanges();

    createMovieList(movieDB.movies, filmList);
    
    
});
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
    
    
    // 5:  -> Add new film from insert 

  
    
    // addButton.addEventListener('click', () => {
    //     const newFilm = addInput.value;
    //     console.log(addInput.value)
    //     if(newFilm !== '') {
    //          movieDB.movies.push(newFilm.toUpperCase());
    //          displayMovie()
    //          addInput.value = '';
    //     }
    // })
    
    // 6:  -> Delete film from 
    
    // console.log(buttonsDelete)
    
//     buttonsDelete.forEach((btnDel) => {
//          btnDel.setAttribute('id', btnDel.parentElement.value)
//         console.log(btnDel.getAttribute('id'))
         
//         // btnDel.value = btnDel.parentElement.value;
    
//         btnDel.addEventListener('click', (element) => {
//             console.log(element.value)
//         })
//     })
//     console.log(buttonsDelete)
    
// });