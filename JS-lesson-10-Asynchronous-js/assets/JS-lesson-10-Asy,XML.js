// Asynchronous JS.
// Це про запити від кліента до сервера на отримання данних.
// Види запитів (Get, Post, Delete, Put).
// Get - отримання данних (за посиланням)
// Delete - За посиланням (товар з ID, який видаляється)
// Post - Створює на сервері новий "елемент"
// Put - Для оновлення створеного елементу.

// Шукати інструкцію тут - developer.mozilla.org/en-US/docs/Web/API/XMLHtppRequest  !!!!!

/* Callback функція */

/*
// Це функція яка була передана в якості параментру.
function checkTrueOrFalse(value,yes,no){ //  value-значення, що користувач ввів (true або false);yes,no - функціїї які будуть викликатися в залежності стану value.
    if(value){
        yes();
    }else {
        no();
    }
};
function showTrue(){
    console.log('True state')
};
function showFalse(){
    console.log("False state")
}
checkTrueOrFalse(confirm('press ok or cancel'), showTrue, showFalse);
*/

// Асинхронний JS, це підхід до розробки інтерфейсів який передбачає фоновий обмін даних.(Без перезавантаження сторінки підвантажуються якісь данні.)
// Недоліки-це те що код є доступним для всіх. Та не зберігається історія відвідування сторінки.Відсутність індексації сторінки.

/* Робота з Get */
// перший простий варіант це обмін між клієнтом та сервером за допомогою XMLHttpRequest
// Це API яке дозволяє клієнту обмінюватися данними між клієнтом і сервером. Надає конструктор який дозволяє викликати вбудовані методи.

// XMLHttpRequest.open()- ініціалізує початок запиту.
// XMLHttpRequest.readyState - повертає стан XMLHttpRequest.

/*
loadPage();
function loadPage(){
        // Перший метод.
    let xhr= new XMLHttpRequest; // створення екземпляр классу
        // конструктор для ініціалізації запиту.
        // Синтаксис- xhr.open('method','url','async','user', 'password') - 'async','user', 'password' -(є опціональні)
    xhr.open('GET', 'pages/main.html'); // ініціалізація запиту (але не відправляє(не виконує))
        // 'GET'- тип методу який застосовується, 'pages/main.html'- посилання (url), вказується ініціатор доступу на сервер.
        // Через console.log у вкладці Fetch/XHR.
    xhr.send();
    console.log(xhr) // на цьому етапі readyState-1
        // console.log(xhr.response) // на цьому етапі readyState-4

    xhr.onreadystatechange =function(){ // В документації є опис що означає кожний стан.
        let content= document.getElementById('content');
        console.log(xhr) // в залежності від того з яким readystate треба працювати, виконується різний запит.

        if(xhr.readyState===3){
            console.log("Loading....") // на цьому єтапі можна показати,що документ вантажиться
        }
    
        if(xhr.readyState===4){
            if (xhr.status === 404){
                content.innerHTML=:Not Found
            }else{
                content.innerHTML=xhr.response // побачити,яка верстка завуантажиться
            }
            // console.log(xhr.response) 
        }
    }
};*/ //Це був базовий спосіб отримання контенту, варіант текстового типу данних (коли в результаті запиту приходить верстка), що є простим рівнем.

/* URL - не правильно вказаний
прийде помилка в status: 404 (або інша)*/

/*Інший варіант LoadPage.
Для того щоб не розписувати всі можливі дії з status, було придумано функція fetch, яка приймає url і повертає callback функцію яку як аргумент передається response у якості коли метод пройшов успішно і error з callback функцією,якщо метод пройшов не успішно. */

loadPage();

function loadPage(){
    // другий метод.
    // fetch('pages/main.html') //тут важливо згадати asinc, await, promise, asinc await, then catch. При використанні fetch, потрібно знати тип response (текст або данні). 
        // Для того щоб отримати данні, потрібно викликати один з двох методів.
        // res.text()
        // res.json()
        /*
        .then((res)=>{ // .then - коли метод пройшов успішно, з параметром resonse- (назва може бути будь-якою)  
            // console.log(res.text())-???
            return res.text(); // або return res.json()
        })
        .then(data =>{ // ще одна callback функція яка буде приймати data ( яким буде res.text() або res.json(), в залежності від типу данних,щоь приймаються ) як аргумент.
            console.log(data)
        })
        */
       ////////////////////////////////////////////////////////////////////////////////////////////////////////
       // правильно це виглядає ось так...
    //    .then(res=>{
    //         // Конструкція для реалізації виключень (перевірка помилки) throw Error(res.statusText)
    //         if(!res.ok){ // якщо OK буде мати false
    //             throw Error(res.statusText) // тоді як відповідь поверенться значення "Not Found" в ключі statusText.
    //             // throw Error (що робить)- каже ,що як виключення коли помилка повертається error, і в якості аргументу в цей error передається ststusText
    //         }
    //         return res.text()
    //    })
    //    .then(data=>{ // Тоді цей .then у стані error просто пропускається, і переходить у .catch // у разі відсутності помилки, .than працює (.than працює тільки коли ОК)
    //         console.log(data)

    //         let content= document.getElementById('content')
    //         content.innerHTML=data
            
    //     })
    //     .catch(error=> {  // У .catch текст res.statusText можна опрацювати як парамет error, та потім вивести error в content.innerHTML.
    //         let content=document.getElementById('content');
    //         content.innerHTML=error
        // .finally(()=>{ // працює з обома методами.
            
        // })
    //     }) // для того щоб опрацювати стан помилки з різним status( наприклад неправильний url (error 404)), створюється callback функція для .catch

    /////////////////////////////////////////////////////////////////////////////////////

    /* Axios - готова бібліотека яка має ядро XML, HttpRequest в основі, і дозволяє на основі методу ( fetch та XMLHttpRequest) робити запити.

    Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6

    підключається без jquery, перед <script> на js всередині html.
    */

    // Використання методу loadPage() через axios.

    // axios('pages/main.html') // вказується посилання. Axios() робить дію легше за fetch. (без пропису перевірки помилки)
    //     .then(res=>{
    //         let content=document.getElementById('content')
    //         content.innerHTML=res.data
    //         console.log(res)
    //     })
    //     .catch(error=>{
    //         let content=document.getElementById('content')
    //         content.innerHTML=error
    //         console.log(error)
    // //     })
    //         .finally(()=>{ // виводиться як з .then так і з .catch
    //             console.log('finally')
    //         })

    ////////////////////////////////////////////////////////////////////////

    // Але,якщо робота відбувається в Jquery, то все вище згадане не працює. Потрібно працювати з Jquey API.
    // jQuery.ajax() - (Asynchronous JavaScript and XML) приймає посилання та налаштування.

    /* Deprecation Notice: The jqXHR.success(), jqXHR.error(), and jqXHR.complete() callbacks are removed as of jQuery 3.0. You can use jqXHR.done(), jqXHR.fail(), and jqXHR.always() instead.*/
    
    //Синтаксис
    // $.ajax('pages/main.html') 
    //     // В залежності від того який метод опрацьовується якийсь з них можна пропустити.
    //     // .done(function() { // відповідає за успішне виконання запиту (аналог .then у axios)
    //     //     console.log( "success" );
    //     // })
    //     // .fail(function() { // запит пройщов не успішно (аналог .catch)
    //     //     console.log( "error" );
    //     // })
    //     // .always(function() { // дія яка буде йти, як після .done чи .fail
    //     //     console.log( "complete" );
    //     // });
            

    // /////////// розгляд станів
    //     .done(function (data){
    //         console.log(data) // поверне готовий html.
    //         $('#content').html(data) // метод додавання через Jquery.
    //     })
    //     .fail(function(error){
    //         // console.log(error);
    //         $('#content').html('Error');
    //     })
    // $.ajax({    // якщо окрім цього посилання є ще якісь налаштування (наприклад запит "Get""Post"). Тоді передаєтья як об'єкт.
    //     url: 'pages/main.html',
    //     type: 'GET',
    //     beforeSend: function(xhr){
    //         console.log(xhr)
    //     }
    // })
    // .done(function (data){
    //     console.log(data) // поверне готовий html.
    //     $('#content').html(data) // метод додавання через Jquery.
    //         })
    // .fail(function(){
    //     // console.log(error);
    //     $('#content').html('Error');
    //         })
    // .always(function (){
    //     console.log('complete')
    // })
    
    // В старіших версіях jquery , використовується succes і error та complete

    // $.ajax({
    //     url: 'pages/main.html',
    //     type:'GET',
    //     succes: function(data){ // аналог .done
    //         console.log(data);
    //     },
    //     error: function(error){
    //         console.log(data)
    //     },
    //     complete:function(){ // аналог always
    //         console.log('complete')
    //     }
    // } )

    // додаткове звернення до особливого типу крім axios.
    // $.post() // (jQuery)
    // $.get( 'pages/main.html', response => console.log(response))// (jQuery) 1-м параметром посилання, 2-м параметром, фунцію succes.
    //     // до цього можна додати методи (.done .fail .always- для третього jQuery)(succes .error. .complete- для нижче третього)
    //     .done(function(){ 
    //         console.log('text')
    //     })
    //     .always(function(){
    //         console.log('always text');
    //     })

        // Або для спрощеня, можливий такий варіант.
    // $.get('pages/main.html', response=>$('#content').html(response))
};


/* JSON- JavaScript Object Notation.
коли данні приходят не вигляді верстки а у вигляді данних. 
1-всі пари ключ/значення при формуванні  мають бути із подвійними лапками.
2- в JSON не має бути висячої коми (тобто останній елемент має бути без коми/крапки)
3- десяткові числа пишуться з крапкою "0.4"
4 - унікальне кодуввання unicod символи.

Для чого JSON , на практиці верстка приходить рідко, в основному приходять данні в результаті яких мається сформувати дом структуру або зробити якісь дії.

JSON - (окрема натація в js) має два методи які дозволить перетворити данні у стрічку і навпаки, перетворити стрічку JSON для подальшої роботи.
Для того щоб розуміти,що в xhr.response будуть приходити просто данні а не стрічка.

*/
/* приклад коли є посилання на URL у JSON форматі , в котрому зберігається данні.*/
// 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';


// випадок коли JSON та JQUERY не підключені.
/*
loadJson();

function loadJson(){

    let xhr= new XMLHttpRequest; // створення екземпляр классу,
    let requestURL= 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'; // посилення на Json.
    
    xhr.open('GET', requestURL); // ініціалізація запиту (але не відправляє(не виконує))
    // для роботи з JSON, то у всіх запитах потрібно передати responseType.
    // Тому перед тим як надіслати запит , треба додати це значення.
    xhr.responseType='json' // !!!!!!! тепер response став об'єктом, з которим можна працювати повноцінно як з об'єктом.
    xhr.send();

    xhr.onreadystatechange =function(){ // В документації є опис що означає кожний стан.

        if(xhr.readyState===4){
            console.log(xhr)
            console.log(xhr.response)
            console.log(xhr.response.homeTown)
            console.log(xhr.response.members)
            console.log(xhr.response.members[1].powers[2])



/* В JavaScript будь яке значення можна конвертувати в JSON і навпаки з JSON отримати значення
Для цього існуєдва методи:
JSON.stringify() - конвертує JavaScript значення до JSON стрічки.
JSON.parse() - перетворення з рядка в об'єкт.
*/

            // console.log(xhr.response, JSON.stringify(xhr.response)); // перетворення в json формат
            // let jsonObject=JSON.stringify(xhr.response)
            // console.log(JSON.parse(jsonObject)) // перетворення json в об'єкт.

/*Як варінт, таким чином можна перевірити 2 об'єкти на рівність. Перетворивши обє'кти в JSON.stringify() і порівняти їх. */

        // }
    // }
// }

/* завданя:
Створити 2 сторінки з контентом, і підтягувати цей контент без перезавантаження за допомогою json. (Без використання фреймворку)
Та реалізувати переключення між ними (about.html & main.html), для цього потрібно зформувати json файл (назва буде-menu).
І це буде масив , котрий складається з двох об'єктів (бо два пункти меню).

*/

document.addEventListener('DOMContentLoaded',()=>{

    axios({
        url:'assets/menu.json', // вказується локація створеного menu.json
        responseType: 'json'
    })
        .then(response=>{
            let menu= document.getElementById('menu'); // робота з html стрічка 13. (туди і буде додаватися наші 2 пункти в новостворені li)
                str=''; // створення порожньої стрічки,щоб потім одноразово помістити в список
            
            for(let i=0; i<response.data.length; i++){
                let li= document.createElement('li');
                li.innerHTML=`<a class="menu__link" href="${response.data[i].url}">${response.data[i].name}` // як посилання,дається значення яке міститься в url. в (menu.json).
                str=li
                // console.log(str)
                menu.append(str);
                // menu.append(li);

            }
            // знайти link.
            let links= document.querySelectorAll('.menu__link');
            // for( let i=0; i<links.length; i++){
            //     links[i].addEventListener('click', (event)=>{
            //         event.preventDefault();
            //         loadNew(event.target.href) // викликається функція loadPage(), всередину передається event.target.href (тобто тег <a> і знього отримати href).
            //     })
            //     // Варіант, як зробити так щоб автоматично виводився контент першого елементу.
            // }

            if(links.length){
                loadNew(links[0].getAttribute('href'))

                for( let i=0; i<links.length; i++){
                    links[i].addEventListener('click', (event)=>{
                            event.preventDefault();
                            loadNew(event.target.href) // викликається функція loadPage(), всередину передається event.target.href (тобто тег <a> і знього отримати href).
                    })
                }
            }
        })

})

// Працювати будемо через axios.

// підготовка функії яка буде працювати з обома html (буде додавати контент який міститься всередині).
function loadNew(url){ // буде якийсь url, на котрий будемо посилатись
    // console.log(url) // щоб подивитися,що передається.
    axios(url) 
        .then(res=>{
            let content=document.getElementById('content')
            console.log(res)
            content.innerHTML=res.data
            
        })
        // Тоді потрібно створити ще один axios (request), щоб отримати відповідь у json форматі. (шукати в документації axios-http.com)
};
/*
//Підсумок всього божевілля,що було вище.
1. Додали слухача коли DOM завантажився.
        document.addEventListener('DOMContentLoaded',()=>{};

2. Зробили запит на json файл з menu.
        axios({
                url:'assets/menu.json', // вказується локація створеного menu.json
                responseType: 'json'
            });

3. Далі в .then, коли все добре, знайшли елемент (let menu= document.getElementById('menu');) В який потрібно додати menu.
Через цикл перебрали відповідь (response.data.length), та отримали з нього масив (те що міститься в menu.json), створили <li>, в котрий помістили <a> з классом (menu__link), в атрибут (href) додали з repsonse.data його url (response.data[i].url), а в назву тегу <a>, response.data[i].name.

4. Потім додали в menu новим <li> -menu.append(li);

5. Далі перевірили чи вони існують (чи більші від 0) - if(links.length){};

6. Циклом пройшлись і додали слухача на click.
            for( let i=0; i<links.length; i++){
                    links[i].addEventListener('click', (event)=>{
                            event.preventDefault();
                            loadNew(event.target.href) 
                    })
                }
                
7. Взяли з click, event для того щоб скасувати дію браузера за замовченням event.preventDefault().

8. Викликали метод на підзавантаження сторінки -(loadNew(event.target.href). href- значення елементу по якому був click.

9. Передали у функцію loadNew(). В котрому викликали axios(url), йому передали url, котрий був в href. І в .then у response, приходить data, і цю дату додали в елемент,що відображається в HTML.

10. для того щоб за замовчеванням показувався контент першого елементу, ще раз викликається функція loadNew в рядку (323), де з масиву links береться href нульового значення [0]. (loadNew(links[0].getAttribute('href')))

11. Та і все.))

*/