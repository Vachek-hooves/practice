/*Event (події)*/
//event - це інформація про дію, в залежності якою вона буде (click, focus), наповненя змінної буде різним.
// подія - це сигнал від браузера, що щось сталося.
// основні події, це події з мишкою-(клік ,фокус, зміна, введення, контекст меню-( це клік правою кнопкою миші)), події з користувачем (друку).
// onclick, onchange, onfocus..
//clickTrigger() -назва функції.


// function clickTrigger(num1,num2,num3 ){ // всередину параметрів можна передати будь які аргументи. Наприклад: num1,num2,num3
//     console.log("- times you click on text.", num1,num2,num3 + "- це аргументи,що зазначені в HTML")
// }

// Є метод без параметрів,а з функції можна звернутися до змінної, що називається "event".
// коли додаєтлься якась подія на елемент, тоді елемент потрапляє у "target".
// Ще як аргумент в HTML можна передати "this"-і це означає,що передається елемент з DOM структури в якому відбулась подія.

function clickTrigger(event,num1,num2,num3){ // всередину параметрів можна передати будь які аргументи. Наприклад: num1,num2,num3
    // console.log(event) // в консолі буде опис події, знаходимо "type" - в якому буде характеристика цієї події.
    // console.log(event.target) //target- виводить той елемн на якому відбулась подія.
    // console.log(el); // в такому випадку потрібно "el" вказати атрибутом в дужках цієї функції.
    console.log(event.target,num1,num2,num3);
}

/* Правильно задавати event по "id" тегу в HTML*/
/*
let element = document.getElementById('move');
console.log(element) // в списку в innerText можна переконатися чи це той самий текст.

// element.onclick = function(event){
    // console.log(event.target,num1,num2,num3)
// };

/* Приклад: при кліку на div з "id="element"", він має збільшуватися на 1 */
// Безпосередньо робота з event.
/*
element.onclick = function(event){ // вказується event в атрибуті щоб далі отримати доступ до елементу.
    console.log(event.target);
    // event.target.innerHTML=1; // так будк виводитись тільки цифра 1 при кожному натискані.
    event.target.innerHTML= + event.target.innerHTML +1; // Додається event кліку з id=element. З event отримали target(тобто, отримали доступ до елементу на який будо додано click), взяли властивість innerHTML, і присвоїли його до самого себе але привели до типу number (додавши + наперед, тому що той div порожній, а порожня стрічка до приведеня до типу number конвертується в 0) і в результаті додається 1.
    if(+event.target.innerHTML >= 100){
        event.target.style.width= '30px'
    }
};
*/
/* випадок коли є просто div */
// зверненя до HTML рядок №28.

// let counter =  document.getElementById('counter');
//     counterBtn = document.getElementById('counterBtn');

// Робиться клік на кнопку.

// counterBtn.onclick= function(){// тут вже прибираємо event, тому що потрібно збільшувати counter а не counterBtn.
//     counter.innerHTML= +counter.innerHTML+1;
// };

/*Відстеження кліку правою кнопкою миші*/
// document.oncontextmenu=function(){
//     console.log("was clicked right buuton");
// };

/* Варіант коли на клік потрібно робити дві дії(два івенти кліку )*/
// let element= document.getElementById('element');

//onclick (onchange,...)- може бути прописаний лише один раз. Якщо ще раз, тоді вона перезапишеться на нижню

// element.onclick= function(){ // в такому випадку забрати слухача(listener) неможливо.
//     console.log("first");
// };
// Для того, щоб можна було додавати події безліч разів використовують.
// Перший опрацювальник лишається onclick. А всі подальші через addEventListener
// Варіант №1
// element.addEventListener('click', clickFunction); // 'click' - це тип event., clickFunction- назва функції яка щось буде робити якусь дію.
// element.removeEventListener('click', clickFunction);//таким чином видаляється слухач(Listener)
// function clickFunction(){
//     console.log("second");
// };
// // Варіант №2 (стрілкова функція).
// element.addEventListener('click',()=> console.log('third'));

/* Dom content loader */ 
// Всі скрипти по правильному огортає DOM, що завантажився. Всі великі  сайти завантажуються довго 2-3 секунди. Відповідно JS може завантьажитися швидше ніж DOM і тоді нічого не відбудеться.
// Є спеціальний event,що вказує , DOM структура побудована і готова до роботи з JS, та додається через addEvent Listener. І в середину цієї фунції прописується вся потрібна логіка.
document.addEventListener('DOMContentLoaded',()=>{
    let element= document.getElementById('element');
    element.onclick= function(){ // перший слухач записується повністю.
            console.log("first");
        };
        element.addEventListener('click', clickFunction);// далі просто додається слухач а функція може бути поза межою eaddEventListener.
        element.removeEventListener('click', clickFunction)
        toogleElement();
});
function clickFunction(){
        console.log("second ,(this function is outside of DOMContentLoader).");
    };

/*Частим є випадок визначення ширини і перерахунку будь-чого(перерахунок висоти зображення, блоку або приховання якогось елементу).*/
window.addEventListener('resize', resizeFunction);

function resizeFunction(){ // функція,яка задає якусь коли її викликати.
    // console.log(window.innerWidth); // повертаю ширину HTML (білого вікна).
    toogleElement(); // Правильним буде в AddEventListener тільки додавати функції а створювати саму функцію поза межами.
}
function toogleElement(){// після прописати назву функцію в DOMContentLoaded.
    let elem = document.getElementById('element');
    if (elem){
        if(window.innerWidth <= 768){ // параметр для планшетної версії.
            elem.style.display ="none" // TEXT for onclick - зникне.
        }else {
            elem.style.display = 'block'
        }
    }
};

/* РОбота з клавішами(відстежування коли користувач щось натискає.) та як зупинити звичайну дію відносно браузера*/
// Є три event, які кажуть ,що користувач натискає кнопку
// keydown- запускається коли користувач натискає клавішу.
// keyup - запускається коли користувач відпускає клавішу.
// keypress - запускається коли користувач натискає та відпускає клавішу (комбінація).
// Випадок коли користувач натискає якусь комбінацію клавіш а ця комбінація вже залочена браузером і робить свою дію. Перше- треба створити свій слухач(listener).
document.addEventListener('keydown', event =>{    // використати треба через event.
    // console.log(event.ctrlKey, event.key=== 's'); // в key: вказується яка літера або знак на клавіатурі натиснута. А у which: вказується номер символу. Так само і keycode:, впринципі вони однакові. ctrKey: вказує чи натиснутий був ctrl (true або false).
    // Таким чином можна визначити які клавіші натискав користувач.
    console.log(event);
    if(event.ctrlKey && event.key === 's'){ // Виконується своя дія але комбінація для браузера не заблочена( виведеться вікно збереження та дія яка збережена в цій комбінації).
        // В такому випадку є метод preventDefault() котрий заберає всі комбінації за замовченням.
        event.preventDefault(); // але його можна прописати на самому початку.
        // всі keyCode можна знайти на toptal.com/developers/keycode/for/
        console.log('Ctrl+s pressed');
        
    }
});

// Події mouse.

// прості і комплексні.

/* 
//прості:
mousedown (which=1) / mouseup- Кнопка миші натиснута/ відпущена над елементом.
mouseover / mouseout - Курсор миші з'являється над елементом і прибирається з нього.
mousemove - кожний рух миші над елементом генерує ці події.
contextmenu - Викликає при спробі відкриття контекстного меню.(але може буди викликане і клавіатурою).

// Комплексні: 
click- виклик при mousedown та mouseup
dblclick- подвійне натискання кнопкою миші.

*/


/*
mousemove- відбувається коли рухається курсор миші.
координавти clentX/Y, pageX/Y.

const blockForMouse= document.getElementById('section-block')
console.log(blockForMouse);
blockForMouse.addEventListener('mousemove', event=>{
    if(event.movementX && event.movementY){
        // console.log("mouse is herre")
        // blockForMouse.innerHTML=`clientX-${event.clientX}, clientX- ${event.clientY}`
        console.log(`clientX-${event.clientX}, clientX- ${event.clientY}`)
    }
})
*/