
/* Створити сторінку, що показує нумерований список пісень: */

let playList = [
    {author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN" }, 
    {author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
    {author: "LYNYRD SKYNYRD",song:"FREE BIRD"},
    {author: "DEEP PURPLE",song:"SMOKE ON THE WATER"}, 
    {author: "JIMI HENDRIX",song:"ALL ALONG THE WATCHTOWER"},
    {author: "AC/DC",song:"BACK IN BLACK"},
    {author: "QUEEN",song:"WE WILL ROCK YOU"}, 
    {author: "METALLICA", song:"ENTER SANDMAN"}
];
// let playTest = [{ author:"LED ZEPPELIN" , song:"STAIRWAY TO HEAVEN"}]

// let put = document.getElementById('Music-section');
// // console.log(put)
// let li = document.querySelector('li')
// console.log(li);
// 
// const section = document.getElementById('Music-section')
// console.log(section);
// const ul = section.querySelector('ul')
// console.log(ul)
// console.log(ul.innerHTML)
// const li = ul.querySelector('li')
// console.log(li);
// element = document.createElement('li');
// console.log(element);
// element.innerHTML = 'one more li';
// ul.append(element);

let song= '';
    section = document.getElementById('Music-section'); // заходжу в середину section з id Music-section.
    ul = section.querySelector('ul'); // в середині ul , який знаходиться в середині секціїї з id Music-section.
    // console.log(ul);
    newLi ='';
    div = '';
for (let i=0; i<playList.length; i++){
    song = "author: "+playList[i].author +" song: " + playList[i].song;
    // console.log(song); // виводить весь список пісень.
    newLi=document.createElement('li');// команда на створення нового li.
    console.log(newLi);
    newLi.innerHTML=song;
    ul.append(newLi)
};


/*2. Ствоити HTML- сторінку з кнопкою "Відкрити модальним вікном. На модальному вікні повинен бути текст і */
/*кнопка "ЗАКРИТИ", Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється */
/*модальне вікно, на кнопку "Закрити" - зникає "*/

