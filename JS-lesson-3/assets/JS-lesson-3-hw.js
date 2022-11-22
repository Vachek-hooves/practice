/* MINIMUM N1*/

// let userAge = prompt("tell me your age");

// if(userAge === 0 || userAge <= 11){
//     alert('you are still baby');
// } else if (userAge ==12 || userAge <= 17){
//     alert('Hi, junior');
// } else if (userAge ==18 || userAge <= 59){
//     alert ('Adult person');
// } else if (userAge >= 60){
//     alert ('you are wisdom');
// }
// console.log(userAge);

/* MINIMUM N2*/

// let userNumber = prompt( "enter number fom 0 to 9" );

// if (userNumber == 0){
//     alert(')');
// } else if (userNumber == 1){
//     alert('!');
// } else if(userNumber == 2){
//     alert('@')
// }else if(userNumber == 3){
//     alert('#')
// }else if(userNumber == 4){
//     alert('$')
// }else if(userNumber == 5){
//     alert('%')
// }else if(userNumber == 6){
//     alert('^')
// }else if(userNumber == 7){
//     alert('&')
// }else if(userNumber == 8){
//     alert('*')
// }else if(userNumber == 9){
//     alert('(')
// }
// console.log(userNumber);

/* MINIMUM N3*/
// let a = +prompt ('number a')
//     b = prompt ("number b")
//     i = 0;

// for (a; a<=b ; a++){
//     i=i+a
// }
// console.log(i)


/* MINIMUM N4*/
// let x = +prompt('first number')
//     y = +prompt ('second number')

// for (i=1; i<= x && i<= y; i++){
//     if (x % i ==0 && y % i==0){
//         console.log(i);   
        
//     }
// }

/* MINIMUM N5*/
// let num = 6

// for ( i =1 ; i<= num; i++)
//     if (num % i== 0){
//         console.log(i)
//     }
    
/*NORMAL N1 */



// let num = prompt('enter your number');
//     reverse = num.split("").reverse().join("")

// switch (reverse==num){
//     case true:
//     alert("it's a palindrome");
//     break;

//     case false:
//     alert("it's not a polinrom");
//     break;
// }
    

/*NORMAL N2*/
// let stuff = +prompt ('how much you pay')

// if ( stuff == 200 || stuff < 300){
//     alert(((stuff/100)*3).toFixed(1)+' your discount');
// } else if( stuff <= 301 || stuff <= 500 ){
//     alert(((stuff/100)*5).toFixed(1)+' your discount');
// } else if( stuff >= 501 )
//     {
//     alert(((stuff/100)*7).toFixed(1)+' your discount');
// }

// let pey = +prompt('how much you pay');


/*NORMAL #3*/

// let day = ['Monday','Tuesday','Wednesday'];

// for (let i = 0; day.length < 7; i++){
//     alert(day[i]);
//     // return i;

// }



/*NORMAL #4*/




/*EVENTS */

let element = document.getElementById('element');
// element.onclick = function(event){
//     clickTrigger(event)
// }

// function clickTrigger(){
//     // console.log(event.target)
//     console.log(el)
// }

element.onclick = function (event){
    event.target.innerHTML = + event.target.innerHTML + 1
}

let = document.getElementById('counter'),
    counterBtn = document.getElementById('counterBtn');


counterBtn.onclick = function(){
    counter.innerHTML = +counter.innerHTML + 1
}







