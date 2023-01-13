/*Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.*/
// натискаю Ctrl+E  і має з'явитися textarea.
// Знайду keyCode цих двох клавіш.
// document.addEventListener('keydown', event=> {console.log(event)})
// keyCode Ctrl=17, E=69.
// знайду textarea
// let textarea=document.getElementById('textarea');
// console.log(textarea);
// тепер додати дію, так щоб з'явилось вікно textarea.
// Записувати буду все в DOMContentLoader, а функціїї створюю нижче.
document.addEventListener('DOMContentLoaded',()=>{
    textareaText();
    saveChange();
});

// написати дію для комбінації клавіш Ctrl+E.
// перший варіант
// document.addEventListener('keydown',event=>{
//     if(event.ctrlKey && event.key ==='e'){
//         event.preventDefault();
//         console.log('combination working');
//         let textarea=document.getElementById('textarea');
//         textarea.style.opacity='1'
//     }
// });// так все працює, для експеременту спробую інший метод.
// Другий варінт (виглядає легшим).
let textarea=document.getElementById('textarea');
let textdiv=document.getElementById('text-div');
let newText=''
function textareaText(){
    document.addEventListener('keydown',event=>{
        if(event.ctrlKey && event.key ==='e'){
            event.preventDefault()
            textarea.style.opacity='1';
            console.log(textdiv);
            textdiv.style.opacity='0';
            /*потрібно присвоїти текст з textdiv в textarea*/
            newText=textdiv.innerText;
            textarea.innerText=newText;
            // textarea.innerText=textdiv.innerHTML;
            console.log(textarea);
            console.log(textdiv);

        } 
    })
};
// знайти де зна-ся текст text-div і показати(присвоїти) його в textarea, а потім новий текст присвоїти в text-div.
// // знаходжу де текст.
// let divtext = document.getElementById('text-div').innerHTML;
// // Знаходжу текст textarea.
// let areatext=document.getElementById('textarea').innerHTML;
// areatext=divtext;
// areatext=areatext.innerHTML='changed text';
// divtext.innerHTML=areatext.innerHTML;//ok
// console.log(document.getElementById('textarea').innerHTML)//ok.

/*написати дію для комбінації клавіш Ctrl+E. */
function saveChange(){
    document.addEventListener('keydown',event=>{
        if(event.ctrlKey && event.key==='s'){
            event.preventDefault();
            textarea.style.opacity='0';
            textdiv.style.opacity='1';
            console.log(newText);
            newText=textarea.value;
            console.log(newText); 
            textdiv.innerText=newText;
            textdiv.style.zIndex='5';
            // textdiv.innerHTML=textarea.innerHTML;
            // console.log(textdiv.innerHTML);
            // console.log(document.getElementById('textarea').innerHTML);
            // console.log(document.getElementById('text-div').innerHTML);
        }
    })
};