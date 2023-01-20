// function ResizeDiv(){
//     document.getElementById('section-block').style.resize="both";
// };

let div = document.getElementById('section-block');
let divWidht= parseInt(div.getBoundingClientRect().width)+'px'; // width to string.
let marker= document.getElementById('marker');
// console.log(divWidht ,"- div width");
console.log(div.getBoundingClientRect());

// document.addEventListener('mousemove',event=>{
//     // console.log("you are inside function");
//     let mouseX = parseInt(event.offsetX - div.getBoundingClientRect().x)+'px';
//     let mouseY = parseInt(event.offsetY - div.getBoundingClientRect().y)+'px';
//     // console.log(mouseX , " mouse horizontal position");
//     // console.log(mouseY , " mouse vertical position");
//     document.addEventListener('mousedown',()=>{
//         // console.log('inside mousedown')
//         div.style.width=mouseX;
//         div.style.height=mouseY;
//         // console.log(div.getBoundingClientRect().left)
//     })
// });

document.addEventListener('mousedown',event=>{ // all working
    let mouseX = parseInt(event.clientX - div.getBoundingClientRect().x)+'px';
    let mouseY = parseInt(event.clientY - div.getBoundingClientRect().y)+'px';
    div.style.width=mouseX;
    div.style.height=mouseY;
});
