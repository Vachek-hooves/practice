
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
// console.log(put)

let song= '';
    plus = '';
for (let i=0; i<playList.length; i++){
    if (song = ("author: "+playList[i].author +" song: " + playList[i].song)){
        let put = document.getElementById('Music-section');
        let list = put.querySelector('li');
        list.innerHTML=song
        // console.log(song);
        plus =document.createElement('li');
        console.log(plus)
        plus.innerHTML = song;

        
    }
};
// console.log(put)


// let put = document.getElementById('Music-section')
// console.log(put)
// let List = put.querySelector('div')
// console.log(List)
// List.innerHTML= song
// створи функцію котра буде записувати кожну пісню в циклі, (цикл у функції).
// Або краще створити div і туди цілим списком зберегти.