/* MINIMUM #1  Напиши всі можливі варіанти створення функцій. */

//function declaration

confirm("function type -'function declaration'")
function calcSumm (sum1, sum2){
    console.log(sum1 * sum2)
}
calcSumm(+prompt("enter number for function identification"),+prompt("enter another number for function identification"))


//function expression
confirm("function expression method")
let showMessage = function(){
    message = ("How are you?");
    calc = 3 + 3;
    console.log(calc + " " + message) ;
};
showMessage(prompt("enter any string"));

/* arrow function expression (=>) */

confirm("Function arrow method. thu hiden function (first number multiply to second & when plus first)")
let calcSummTwo = (n1,n2) => n1 * n2 + n1;

console.log(calcSummTwo(+prompt('first number'),+prompt('second number')));


/*MINIMUM #2 Створи функцію, яка буде виводити кількість переданих їй аргументів.*/

confirm("this function shows you quantity of arguments what you enter")
function argSumm (arg1,arg2,arg3){
    console.log("value of 'arg1' is :" + arg1);
    console.log("value of 'arg2' is :" + arg2);
    console.log("value of 'arg3' is :" + arg3);   
}
argSumm(+prompt("first argument"),+prompt("second argument"),+prompt("third argument"));

/*MINIMUM 3 Напиши функцію, яка приймає 2 числа і повертає */

alert("Напиши функцію, яка приймає 2 числа і повертає :-1 якщо перше число менше, ніж друге; 1 - якщо перше число більше, ніж друге; 0 - якщо числа рівні.")
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

alert("next function will fint factorial of entered number ")
function factorial (numb){
    let result =1;
    for (i=1 ; i <= numb; i++){
        result *= i;
        // console.log(i)
        // console.log(numb);
        // console.log(result);
        

    }return result;
}

console.log(factorial(+prompt("enter number"))+"-"+"this is factorial of previously entered number");




/*MINIMUM 5 Напиши функцію, яка приймає три окремі цифри і 
перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/

alert("next function will combine all three entered numbers ")
function combNumber(a,b,c){
    let number = `${a}${b}${c}`;
    console.log(number)
}
combNumber(+prompt("enter the number"),+prompt("enter the number"),+prompt("enter the number")+" "+"all entered numbers together");


/* MINIMUM 6 Напиши функцію, яка приймає довжину і ширину прямокутника і 
обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/

alert("Function will find rectangle area if you enter 2 different numbers. In case you enter only one number function will find square area.  ")

function area (a,b){
    if (a==b){
        num = a *4;
        console.log((num)+" "+"ia square area");
    }else if ( a == false || a == undefined){
        num = b * 4;
        console.log((num)+" "+"square area");
    }else if ( b == false || a == undefined){
        num = a * 4;
        console.log((num)+" "+"square area");
    }else if (a>b || b > a){
        num = a * b;
        console.log((num)+" "+"rectangle area");
    }
}
area(+prompt('enter number'),+prompt('enter number'));


/* NORMAL 1 Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/

alert("Next function will check if entered number is 'perfect'  ")
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

alert("This function will try to find 'perfect number' in range min & max ")
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

