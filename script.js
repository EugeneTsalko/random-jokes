const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');
const img = document.getElementById('img');
const select = document.querySelector('select');


get_joke.addEventListener('click', generateJoke);

let jokeRes = 'https://api.icndb.com/jokes/random'
let joke
let res
generateJoke();

async function generateJoke() {
    // call API
    res = await fetch(jokeRes, {
        headers: {
            'Accept': 'application/json'
        }
    });

    joke = await res.json();

    console.log(joke);
    // set new joke
    jokeEl.innerHTML = joke.value.joke;


    img.classList.add("shake")
    setTimeout(() => img.classList.remove("shake"), 250)
}


select.addEventListener('change', changeLanguage)

async function changeLanguage() {
    jokeEl.innerHTML = 'Переключение языка как бы добавил, а с подключением api или json на другом языке не разобрался((('
}


console.log(`Оценка 55 баллов
1. Вёрстка +10
на странице есть цитата и кнопка для смены цитаты +5
в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2. При загрузке страницы приложения отображается рандомная цитата +10
3. При перезагрузке страницы цитата обновляется (заменяется на другую) +10
4. Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10
5. Смена цитаты сопровождается эффектом (анимация картинки) +10
6. Можно выбрать один из двух языков отображения цитат: en/ru - на усмотрение проверяющего, пункт  реализован не полностью`)