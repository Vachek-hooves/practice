// Node - вузол.
// console.log(window) // отримати корінний елемент.
// console.log(window.document) // Отримання DOM. 

// console.log(window.document.location.href) // Поверне посилання сторінки. У разі треба зберегти поточне посилання.
// console.log(window.document.location.hash) // посилання на hash.
// console.log(window.document.location.search) 

// console.log(window.document.body) // отримати доступ до тегу <body>.
// // або
// console.log(document.body) // інший варіант отримати доступ до тегу.
// console.log(window.document.head)
// //or
// console.log(document.head)

///////////////////////////////////////////////////////
/* Об'єкти, що додають інформакцію про браузер */

// console.log(window.navigator) // Показує інфо про браузер та оп ераційну систему.
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
let classQuery = document.querySelectorAll('.section'); // Вказується який класс (крапка перед назвою классу!!!!).
console.log(classQuery);
// дадали в HTML модифікатор section--big-space.
let classQuery2 = document.querySelectorAll('.section.section--big-spaces'); // пошук классу section, який (які) має додатково класс section--big-space.
console.log(classQuery2);
// Варіант коли різні теги мають однаковий класс.
// Тоді в перевірці потрібно вказати додаткову умову.
let classQuery3= document.querySelectorAll('ul > li > a'); // Буде шукати всі <ul>, в середині яких є <li>, в середині яких є <а>.
console.log(classQuery3);

let classQuery4 = document.querySelectorAll('ul  li  a'); // в такому випадку повертається 3 <a>? том у що він огорнений в <div>. (на першому рівні вкладенності має бути обов'язково тег а)
console.log(classQuery4);

let classQuery5 = document.querySelectorAll('ul  li  a.link--red'); // знайде всі теги а, який мають class link--red.
console.log(classQuery5);
 
/* Випадок коли треба знайти декілька таких елементів */
let classQuery6 = document.querySelectorAll('ul  li  a.link--red, .section--big-spaces a.link--red'); // знайде всі теги а, який мають class link--red.
console.log(classQuery6);

/*Пошук по atribute*/
let atribute =document.getElementById('list');
console.log(atribute.querySelectorAll('a[data-text]')); // (' в якому тезі йде пошук [назва атрибуту ]').
console.log(atribute.querySelectorAll('img[alt]')); // знайде всі атрибути alt. (наприклад знайти всі зображення, що мають або не мають alt)

/* Перевірка чи querySelectorAll, працює тільки до document, або ще й до element  */
// let insideUl = document.getElementById('list');
// console.log(insideUl.querySelectorAll('a.link')); // Можливо так використовувати (працює).  
// console.log(insideUl.querySelectorAll('a.link').length + " - just shows length of variable"); // Так можна повернути довжину NodeList

// NodeList - це коллекція елементів які прийшли в результаті.
// NodeList в собі містить length (хоча це не є масив). 

// NodeList, можна ітерувати через For Each.
// let insideUl = document.getElementById('list');
//     links =insideUl.querySelectorAll('a.link'); // Знаходить всі теги a.link
//     links =insideUl.querySelectorAll('a.link12'); //Випадок коли до querySelector додамо не існуючу умову. Тоді поверне путий масив.
//     link = insideUl.querySelector('a.link'); // Знаходить перший a.link і зупиняється.
//     linksArray = Array.from(links); // Створити змінну в котрій присвоюється претвороеня в масив, щоб в подальшому просто викликати змінну.

// console.log(links) // поверне путий масив, тому що такого елементу не існує.
// console.log(links[0]); // undefined, томпу що такого елементу не існує.
// ТОді потрібно спочатку зробити перевірку на існування такого елементу.
// if(links[0]){
//     console.log(links[0])
// }

// Краще зробити перевірку на довжину.
// if(links.lengh > 0){
//     console.log("exist")
// }

// Array.from(links).filter(el =>console.log(el)); // Тому,що такий варіант буде сильно гальмувати сам JS.
// querySelector працює так само як і querySelectorAll, як із document так і з певною прив'язкою до якогось елементу, тільки в результаті повертається оин елемент.

// linksArray.filter(el => console.log(el))
// links.forEach(link=> console.log(link)); // У forEach, не завжди повертається в повному вигляді, а як частина верстки.

//  Інший метод через for;
// for (let i=0; i< links.length; i++){ // таким чином виведеться всі теги <a> з классом "link"
//     // console.log(links[i]); // та створився доступ до link.
//     // console.log(links[i].text) // виводить весь текст,що міститься в середині кожного лінку з классом "link"
//     console.log(links[i], links[i].text);
// };

/* Перевірка через додаткові методи */
// links.filter(el => console.log(el)); // filter - працювати не буде.
// links.sort((a,b)=> a-b) // sort - працювати не буде.

/* Array.from() */
// console.log(links, Array.from(links))// зробити з NodeList - l


/////////// інші НЕ  популярні пошуки елементу.
/*Пошук по tag*/
console.log(document.getElementsByTagName('a')); // цей пошук буде швидше ніж querySelectorAll.
// getElementsByTagName - буде працювати з element та document.

/*Пошук по class*/
console.log(document.getElementsByClassName('link')); // пепредається заданий класс, який треба шукати ( без крапки).Поверта всі елементи з вкакзаним класом.
//getElementsByClassName - буде працювати з element та document.

/*Пошук по name*/
console.log(document.getElementsByClassName('name')); // Вказуєьбся name самого field (input, textarea...).
//getElementsByClassName - буде працювати з element та document.

/* пошук БАТЬКА елементу */

let insideUl = document.getElementById('list');
    link = insideUl.querySelector('a.link--red');

console.log(link)

// Потрібно знайти тег li для link. В тегу li, немає ні "id" ні "class".
// метод, що повертає батька.
// if(link){
//     console.log(link.closest('li'))
//     console.log(link.closest('ul'))
//     console.log(link.closest('body'))
// }


// if(link){ // якщо існує link, заходить пошук в if
//     let parent = link.closest('ul#list'); // пошук в ul,з id "list", і якщо він є заходить в наступний if.
//     if(parent){
//         let li = parent.querySelectorAll('li') // знаходить всі li в батькові.
//         console.log(li)
//     }
// }

/* Пошук наступного або попереднього (сусіднього елементу) */
if (link){
    let parent = link.closest('li');
    console.log(parent.previousElementSibling); // Дає змогу працювати з попередніми елементами.
    console.log(parent.nextElementSibling); // Дає змогу працювати з наступними елементами.
};

/* Отримати доступ до значення тегу.*/
// tagName - повертає значення тегу елемента до якого звертаємось. І всі пишуться з великої літери.
if (link){
    let parent = link.closest('li');
    console.log(parent.previousElementSibling.tagName); // особливість в тому,що повертається тег з великою літерою.
    console.log(parent.previousElementSibling.tagName.toLowerCase());
};
// tagName -корисний коли треба відфільтрувати.

/* Тепер коли було знайдено тег або елемент, тоді можна змінити значення */

if (link){
    let parent = link.closest('li');
        nextEl = parent.nextElementSibling;
        // console.log(nextEl.innerHTML) // innerHTML -повертає верстку всередині елементу. 
        // console.log(nextEl.outerHTML)  // outerHTML - повертає верстку та сам елемент
//з'являється можливість переприсвоїти значення в будь-яке інше.
    // nextEl.innerHTML ='' // для nextEl, innerHTML -зробити його пустим. Видаляється весь елемент і повертає його
    // nextEl.outerHTML ='' // видаляється повністю і повертає його.
    // console.log(nextEl.innerHTML);
    // console.log(nextEl.outerHTML);
    // Можна створити іншу верстку:
    nextEl.innerHTML = '<div class="test-div">321</div>' // таким чином можна налаштовувати вміст елементу.
    console.log(document.querySelector('.test-div'));

    /* значення класу*/
    // клжен елемент в середині має властивість яка зберігає всі класи:
    // classList  - масив,що містить в собі значення класів.
    console.log(link.classList); // - це є повноцінний масив.
    // Тепер можна перевірити чи значення класу є в цьому масиві.
    // Використовуємо вбудований метод.
    if (link.classList.contains('link')){ // contains - повертає true або false, в залежності від того чи значення яке в дужках, міститься у classList.
        console.log('Exist');
    }else {
        console.log('not exist');
    }

    /*Додавання або вилученя класу */
// contains - метод перевірка.
// add - метод додавання.
// remove - метод видалення.
    if (link.classList.contains('link-123')){ // перевірка,чи в масиві classList, міститься значення link-123. 
        link.classList.add('link-321') // Якщо такий класс є, тоді додається класс link-321. (через вбудований метод add).
        link.classList.remove('link-red')
    }else{
        link.classList.add('link-empty', 'link-emptyTwo'); // Декілька класів додається через кому.
    }
    console.log(link.classList);

/* варіант без перевірки */
// toggle - метод який додає якщо немає і забирає якщо є.
    link.classList.toggle('link-another');
    console.log(link.classList);
};

// let addid = document.createElement('div');
// addid.id = 'test-id'
// console.log(addid)
// addid.classList.add('test-class')

/* якщо потрібно додати на початок або кінець списку (є окремі методи)*/
// На початок.

let list = document.getElementById('list'), //значення id, буде list.
    firstLi = list.querySelector('li'); // звертаємось до 'list' і шукаємо перший 'li'
    element = document.createElement('li'); // далі element буде команда -створити елемент в li.
    console.log(element)
// element.id = 'test-id'
// element.classList.add('test-class','test-class-2');
element.innerHTML = 'New li'

list.insertBefore(element,firstLi) // додає елемент , перед вказаним елементом. Всередині insertBefore () мають бути два аргументи. 1-й новий елемент, 2-й це елемент перед яким вставля\ться.
console.log(element)

// Ще варіант
// знайти останій елемент з list.
// Нижче, це продовження коду, що зверху...
let listLi=Array.from(list.querySelectorAll('li')); // listLi - нова змінна, Array.from- перетворення в масив всього list з його li.
// list.insertBefore(element, listLi.at(-1).nextElementSiblings); // listLi.at(-1)- це осанній елемент 

/* Додати елемент виключно в кінець */
// append - додавання елементу в кінець.
list.append(element,"text-test") // list- куди треба додати, сам метод append ( що додати).

/* стилізація */
// Відносно всієї цієї логіки можна додавати правила з CSS.
// style - об'єкт, що містить в собі всі правила які можна змінити або додати.
// Ця властивість стилю додається як атрибут до вказаного HTML тегу.
element.style.backgroundColor = '#423' ; // для element задаємо колір і через оператор присвоєня "=" колір.
list.append(element) // element додається.

/* Перегляд висот та широт (innerHeight, innerWidth, innerHeight, outerWidth) */

console.log(firstLi); // зараз немає властивостей outerHeight, outerWidth. Тому,що ці властивості будуть видні тільки через window.
// offsetHeight - містить висоту включаючи бордери та внутрішні відступи по висоті.
// scrollHeight - Висота не видимого контенту.
// innerHeight - 
// innerWidth -
// clientHeight - повертає чисту висоту в котрій є контент, без внутрішніх відступів,без бордерів без марженів без висоти скрол-бару.
// outerHeight -
// innerWidth -

/* Метод getComputedStyle */
window.getComputedStyle(firstLi) // метод getComputedStyle (елемент для якого отримується стиль). Знаходимо в списку margin-top.
// і дописується ще метод getPropertyValue('margin-top') - ( в лапках вказується значення) - результат повертається в пікселях.
window.getComputedStyle(firstLi).getPropertyValue('margin-top'); // так виглядає повний запис.

firstLi.offsetHeight // отримаємо значення в px.
// parseInt() - приймає стрічку в якості аргументу і повертає ціле число.
// parseFloat () - приймає стрічку в якості аргументу і повертає десятичне число ( число з плаваючою точкою).
let styles = window.getComputedStyle(firstLi)
console.log(firstLi.offsetHeight + parseInt(styles.getPropertyValue('margin-top')) + parseInt(styles.getPropertyValue('margin-bottom')));

/*EVENT*/
// Початок роботи  /

/* click */
// Є 2 варіанти додати події кліку.(старий та новий);
/* Перший метод (старий)*/
// Старий - що не використовується.
// До ТЕГУ В HTML написати onclick. І всередину пишеться назва функції 
// onclick="liClicked()"- поточний випадок. Наступний крок, робота в JS.
function liClicked (){ // в JS назва функції пишеться така сама як і в HTML.
    console.log(123); // логіка яка буде відпрацьовувати на цей клік.
}; // Такий метод існує але не використовується.

/* Другий метод (новий)*/ 
// Коли в JS шукається елемент.
let li = document.querySelector('li.li-class'); // шукається по li з классом li-class

// onclick - називається слухачем.
if (li){ // превірка чи такий li є...
    li.onclick =function(){ // заходимо в функцію.
        console.log("- times pressed")
    }
}









