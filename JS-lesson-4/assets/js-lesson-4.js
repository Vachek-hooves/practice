/* MINIMUM #1  */

//function declaration
// calcSumm(4,7)
// function calcSumm (sum1, sum2){
//     console.log(sum1 * sum2)
// }
// calcSumm(3,4)


//function expression
// let showMessage = function(){
//     message = ("How are you?");
//     calc = 3 + 3;
//     console.log(calc + " " + message) ;
// };
// showMessage();

// arrow function expression (=>)


/*MINIMUM #2 */


// function argSumm (arg1,arg2,arg3){
//     console.log("value of 'arg1' is :" + arg1);
//     console.log("value of 'arg2' is :" + arg2);
//     console.log("value of 'arg3' is :" + arg3);   
// }
// argSumm(+prompt("enter number"),+prompt("enter number"),+prompt("enter number"));

/*MINIMUM 3*/

// function comparison (a= , b=){
//     if(a<b){
//         console.log('-1');
//     }else if (a>b){
//         console.log('1')
//     }else if (a===b){
//         console.log('0')
//     }
// }

// comparison(+prompt('enter'),+prompt('enter'));

/*MINIMUM 4*/

// function factorial (numb){
//     let result =1;
//     for (i=1 ; i <= numb; i++){
//         result *= i;
//         // console.log(i)

//     }
//     return result;
// }
// console.log(factorial(+prompt("enter number")))



/*MINIMUM 5*/

// function splitNumber(a,b,c){
//     let number = `${a}${b}${c}`;
//     console.log(number)
// }
// splitNumber(prompt("put numbe"),prompt("put numbe"),prompt("put numbe"));


/* MINIMUM 6*/

// function area (a,b){
//     if (a == b){
//         num=a * 4 ;
//         console.log(num)
//     } else if ( b < a || a < b){
//         num = a * b;
//         console.log(num);
//     }
// }

// area(prompt('enter number'),prompt('enter number'));


/* NORMAL 1*/

// function perfNumb (a){
//     let zero = 0;
//     for ( i=1; i <= a/2 ; i++){
//         if (a % i ===0){
//             zero += i;
//         }
//     }
//     if ( zero === a && zero !==0){
//         console.log("it is perfect number");
//     }else if (console.log('it is not perfect number'));
// }

// perfNumb(+prompt('enter number'));


/*NORMAL 2 */




// function calcSumm (numOne, numTwo){
//     if (numTwo === 3){
//         return numOne;
//     } else {
//         return numOne * calcSumm(numOne, numTwo - 1);
//     }
// }

// console.log(calcSumm(4,5));


// function getSumm(numOne, numTwo){
//     let numSumm = calcSumm(numOne,numTwo);
//     console.log(numSumm);
// }
// function calcSumm(numOne, numTwo){
//     return numOne + numTwo;

// }
// getSumm(2,6);





// function calcSumm(numOne, numTwo){
//     let result = 1;
//     for (let i = 0; i < numTwo; i++){
//         result *= numOne;
//     }
//     return result;
// }
// console.log (calcSumm(3,4));