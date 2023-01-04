// console.log(window) // отримати корінний елемент.
// console.log(window.document) // Отримання DOM. 

// console.log(window.document.location.href) // Поверне посилання сторінки. У разі треба зберегти поточне посилання.
// console.log(window.document.location.hash) // посилання на hash.😍😍
// console.log(window.document.location.search) 

// console.log(window.document.body) // отримати доступ до тегу <body>.
// // або
// console.log(document.body) // інший варіант отримати доступ до тегу.
// console.log(window.document.head)
// //or
// console.log(document.head)

///////////////////////////////////////////////////////
/* Об'єкти, що додають інформакцію про браузер */

// console.log(window.navigator) // Показує інфо про браузер та операційну систему.
// console.log(window.navigator.userAgent) // отримати інформацію про браузер та доступ до налаштувань браузера.
// Знайти як превірити який браузер!!!!!!!!!!!!
// console.log(window.navigator.platform) // Інфа про платформу.
// console.log(location) // Інфо про поточну URL адрессу. Схожа робота з (window.document.location).

/////////////////////////////
/* ОТримати висоту та ширину  */
// console.log(window.innerHeight, window.innerWidth ) // Повертає розміри сторінки контенту HTML. Для того щоб дізнатися яка версія (мобільна планшета або десктопна).
// console.log(window.innerHeight, window.innerWidth < 577) // window.innerWidth- поверне false. (перевірка для прикладу).
// console.log(window.outerHeight, window.outerWidth) // повертає розміри всього екрану. 

/* метод,що повертає список усіх дочерних вузлів, включаючи текстові вузли*/
// console.log(document.body.childNodes) //
// console.log(document.body.childNodes[0])
// for (let i = 0; i < document.body.childNodes.length; i++){
//     console.log(document.body.childNodes[i])
// }

/* пошук елементів в DOM*/
// Якщо треба знайти елемент який має свій id.

// let element = document.getElementById('paragraph'); // присвоєння змінної, потім звертаюсь до самого об'єкта (document) без "s".
// console.log(element); // повернеться весь HTML, з усіма вкладеними тегами.

// коли в середині секції треба знайти інший id.
// let section = document.getElementById('section');
// console.log(section.getElementById('paragraph')); // так не можна.
// getElementById - можна викликати тільки до об'єкта document. 
// тоді виглядати буде так:
// console.log(document.getElementById('paragraph'))
// console.log(section)

// let div1 = document.getElementById('div1');
//     div2 = document.getElementById('div2');

// console.log(div1);
// Перед тим як робити якісь маніпуляції з елементами, потрібно перевірити на існування цього елементу.
//приклад
// if(div1){
//     console.log(div1.innerWidth);
// }else{
//     console.log("not exist")
// }

/* метод пошуку querySelectorAll*/

// let query = document.querySelectorAll('p');// якщо писати з прив'язкою до документ то він повертає всі елементи з вказаною  (умовою). Можна вказувати, як селектор так і id , class або іншу умову.
// console.log(query)// поверне всі теги 'p'.

// Пошук по id.
// let idQuery = document.querySelectorAll('#paragraph') // ФІГНЯ, так не роблять.

// Пошук по class.
let classQuery = document.querySelectorAll('.section'); // Вказується який класс (крапка перед назвою классу).
console.log(classQuery);
// дадали в HTML модифікатор section--big-space.
let classQuery2 = document.querySelectorAll('.section.section--big-space'); // пошук классу section, який (які) має додатково класс section--big-space.
console.log(classQuery2);

// Варіант коли різні теги мають однаковий класс.
// Тоді в перевірці потрібно вказати додаткову умову.
let classQuery3= document.querySelectorAll('ul > li > a'); // Буде шукати всі <ul>, в середині яких є <li>, в середині яких є <а>.
console.log(classQuery3);

let classQuery4= document.querySelectorAll('ul  li  a'); // в такому випадку повертається 3 <a>? том у що він огорнений в <div>. (на першому рівні вкладенності має бути обов'язково тег а)
console.log(classQuery4);

let classQuery5= document.querySelectorAll('ul  li  a.link--red'); // знайде всі теги а, який мають class link--red.
console.log(classQuery5);