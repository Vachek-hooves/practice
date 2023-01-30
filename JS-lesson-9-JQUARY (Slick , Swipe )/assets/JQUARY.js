/* Scroll */
// знайти елементи.
let button = document.getElementById('button');


// перевірка на існування елементів.
if (button){
    button.addEventListener('click', scrollToElement)
};

function scrollToElement(){
    let hidden= document.querySelector('.hidden-el'); // елемент з котрим буде робота.
    if(hidden){ // якщо елемент hidden існує, тоді відбудеться задача всередині функції.
        hidden.scrollIntoView({ // обирається елемент до котрого буде скрол.
            behavior:'smooth', // поведінка scroll. В такому випадку scroll відбудеться до початку верхньої межі.
            block: 'end', //Для вертикального скролу. Параметр який задає властивість (значення - в яку позицію відбудеться scroll).
            // alignToTop: true, // властивість яка приймає true або false.(за замовченням true).
            //true- тоді верхня границя вирівнюється відносно верху видимої області.
            //false - нижня межа буде вірівнена по нижній межі видимої області.
        })
    }
};

/* 
Робота з JQUARY
для того ьщоб бібліотека працювали  її потрібно підключити так само як і js. 
Lля jQuery,потрібно передати елементи з яким треба працювати. Jquery перетворює елемент у Jquery-об'єкт , надаючи йому доступ до всіх вбудованих функцій.

https://api.jquery.com/ - Робота з jQuery.
на api вписані всі можливі методи.

В Jquery не пишеться 
document.addEventListener('DOMContentLoaded)
замість цього, буде виглядати ..
$(document).ready(function {    } )

*/

let element = document.getElementById('element');
// element.classList.add('class-1'); // класичний метод додавання через js.

// Зверененя до jQuery.
// перший варінт звернення
// jQuery(element);
// jQuery('#element');
// jQuery('li'); // можна звертатися напряму по тегу.
// другий варінт звернення
// $(element); 
// коли з елементу зроблено jQuery об'єкт можна використовувати всі вбудовані методи.
$(element).addClass('class-1');

// jQuery('li').addClass('class-1'); // в такому випавдку додасться class-1 до всіх li.

// jQuery- часто використовують коли потрібно робити анімацію ( красиве приховуванняґ або показування елеменнтів) або написати вручну рекалькуляцію висоти чи анімацію приховування, звертаються до методів jQuery (буде виглядати гарніше).


/* методи hide & show*/

// варіант  створення функції.
/*
$('#element').click( function(){
    // jQuery('li').hide('slow') // slow - згортання повільне (без таймінгу)
    jQuery('li').hide('900') // можна передавати число.

    setTimeout(()=>{ // виставляється таймер для якоїсь дії.
        jQuery('li').show('900') // дія яка відбувається.
    }, 2000); // відбудеться через 2 секунди.
});
*/

// Викликати функцію яке вже оголешена.
/*
$('#element') .click(clickHandler) // функція вказується без дужок.( тому,що функція викликається при click).

function clickHandler (){
    jQuery('li').hide('slow') 
    
    setTimeout(()=>{ 
        jQuery('li').show('900') 
    }, 2000); 
}
*/

/* Animation */
// Ідея показати елементи на click з анімацію на клік тексту "Text for cooperation with jQuery".
/*
// Метод fadein();
$('#element') .click(function(){
    $('li').fadeIn('slow');
});

// jQuery має свою бібліотеку. https://jqueryui.com
*/

/* Створення Slider (просто через js)*/

$('.slider-box').slick({
    Infinity: true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: true
        }
        }, 
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            dots: true
        }
  
        },
        {
        breakpoint: 300,
        settings: "unslick" // destroys slick
      }
    ]
})



