/* MINIMUM #1  Напиши всі можливі варіанти створення функцій. */

//function declaration

function calcSumm (sum1, sum2){
    console.log(sum1 * sum2)
}
calcSumm(3,4)


//function expression
let showMessage = function(){
    message = ("How are you?");
    calc = 3 + 3;
    console.log(calc + " " + message) ;
};
showMessage();

/* arrow function expression (=>) */

let calcSumm = (n1,n2) => n1 * n2 + n2;

console.log(calcSumm(+prompt('first number'),+prompt('second number')));


/*MINIMUM #2 Створи функцію, яка буде виводити кількість переданих їй аргументів.*/


function argSumm (arg1,arg2,arg3){
    console.log("value of 'arg1' is :" + arg1);
    console.log("value of 'arg2' is :" + arg2);
    console.log("value of 'arg3' is :" + arg3);   
}
argSumm(+prompt("first argument"),+prompt("second argument"),+prompt("third argument"));

/*MINIMUM 3 Напиши функцію, яка приймає 2 числа і повертає */

function comparison (a , b){
    if(a<b){
        console.log('-1');
    }else if (a>b){
        console.log('1')
    }else if (a===b){
        console.log('0')
    }
}

comparison(+prompt('enter'),+prompt('enter'));

/*MINIMUM 4 Напиши функцію, яка обчислює факторіал переданого їй числа. */

function factorial (numb){
    let result =1;
    for (i=1 ; i <= numb; i++){
        result *= i;
        // console.log(i)

    }
    return result;
}
console.log(factorial(+prompt("enter number")))



/*MINIMUM 5 Напиши функцію, яка приймає три окремі цифри і 
перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/

function splitNumber(a,b,c){
    let number = `${a}${b}${c}`;
    console.log(number)
}
splitNumber(prompt("put numbe"),prompt("put numbe"),prompt("put numbe"));


/* MINIMUM 6 Напиши функцію, яка приймає довжину і ширину прямокутника і 
обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/

function area (a,b){
    if (a == b){
        num=a * 4 ;
        console.log(num)
    } else if ( b < a || a < b){
        num = a * b;
        console.log(num);
    }
}

area(prompt('enter number'),prompt('enter number'));


/* NORMAL 1 Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/

function perfNumb (a){
    let zero = 0;
    for ( i=1; i <= a/2 ; i++){
        if (a % i ===0){
            zero += i;
        }
    }
    if ( zero === a && zero !==0){
        console.log("it is perfect number");
    }else if (console.log('it is not perfect number'));
}

perfNumb(+prompt('enter number'));


/*NORMAL 2 Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше 
функцію, щоб дізнатися, чи є це число досконалим.*/


function chekNumb (a,b){
    for (a ; a <= b; a++){
        // console.log(a);
        numb = a;
        perfNumb (numb)
        function perfNumb (numb){
            zero = 0;
        }
            for ( i=1 ; i<= numb/2 ; i++){
                if (numb % i ===0){
                    zero +=i;
                }
            }
            if (zero === numb && zero !==0){
                console.log(a+ ":" + " is a perfect number")
                // console.log("it is perfect number");
                
            }else if (console.log());
        }
    
}
// chekNumb(1,30);
chekNumb(+prompt("first number to find 'perfet number' in range from"),+prompt("second number to find 'perfet number' in range to"));

