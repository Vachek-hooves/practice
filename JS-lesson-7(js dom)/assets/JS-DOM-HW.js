
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

let song= '';
    section = document.getElementById('Music-section'); // заходжу в середину section з id Music-section.
    ul = section.querySelector('ul'); // в середині ul , який знаходиться в середині секціїї з id Music-section.
    // console.log(ul);
    newLi ='';
    // div = '';
for (let i=0; i<playList.length; i++){
    song = "author: "+playList[i].author +" song: " + playList[i].song;
    // console.log(song); // виводить весь список пісень.
    newLi=document.createElement('li');// команда на створення нового li.
    // console.log(newLi);
    newLi.innerHTML=song;
    ul.append(newLi)
};



