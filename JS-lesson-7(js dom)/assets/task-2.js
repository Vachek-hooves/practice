/*2. Ствоити HTML- сторінку з кнопкою "Відкрити" і модальним вікном. На модальному вікні повинен бути текст і */
/*кнопка "ЗАКРИТИ", Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється */
/*модальне вікно, на кнопку "Закрити" - зникає "*/
let div = document.querySelector('.open');
console.log(div);

let wind = document.querySelector('.window');
console.log(wind);

if (div){
    div.toopen=function(){
        let newStyle=wind.style.opacity=1;
        // div.style.opacity=0;
        div.style.dispay='none';
    }
};

let divClose= document.querySelector('.close');
// console.log(close);

if (divClose){
    divClose.toclose=function(){
        let newStyle=wind.style.opacity=0;
        div.style.opacity=1;
    }
    
}

/*3. Ствоити HTML-сторінку зі світлофором і кнопкою,яка перемикає світлофор на наступний колір. */

const yellow = document.querySelector('.yellow')
const green= document.querySelector('.green')
const red = document.querySelector('.red')
console.log(yellow, green, red);
const button=document.querySelector('.button');
console.log(button);


let light = function(){
    if (button){
        button.click=function(){
            let newyellow=yellow.style.backgroundColor='#ffff00';
            if(button){
                button.click=function(){
                  let newgreen=green.style.backgroundColor='#0ce20c';
                  yellow.style.backgroundColor='#ffff0074'
                  if(button){
                    button.click=function(){
                      let newwred=red.style.backgroundColor='#ff0000';
                      green.style.backgroundColor='#0080007f';
                      if(button){
                        button.click=function(){
                            red.style.backgroundColor='#ff000082';
                            light();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
light();