let testing= document.head.nextSibling
console.log((testing))


// const { resolvePath } = require("react-router-dom")

const arr=[]
console.log()

let obj={
    name: "johb"
}
obj.name='Toma'
console.log(obj.name)


// const person={
//     age:25
// }
// const person2= person;

// person2.age=40
// console.log(person.age)

/////////////////////////////
let qq= null|| 'cat' && 'dog'
let ww= ""&&'owl'|| 0;
let ee= qq||ww

console.log(ee)
let numb=NaN
console.log(typeof(numb))

// let a={['magic_'+((x)=>x+108)(108)]:108}
// console.log(a)
///////////
// let a = 40;
// function test(){
//     let a =50 
//     console.log(a)
// };
////
// let n= ['1','2','3']
// console.log(n.concat())
////////////////

// console.log(50/'apple')

// function tets(){
//     console.log(this);
// }
// test()
//
let nn= [15,8,4,16,23,42]
nn.sort()
console.log(nn)

console.log(Math.floor(Math.random()))

let x=5
let cw=x++
// console.log(x,c)

let text = 'hello world'
console.log(text.split( ' '));

let ar=[5,7,16,1,2]

let string ="coderbyte"

let guestList = `Гості:
 * Іван
 * Петро
 * Марія
`;
console.log(guestList)
console.log('hello')

let arrayOfSheep= [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

let sheep=0

for (let i=0; i<arrayOfSheep.length; i++){
    if(arrayOfSheep[i]==true){
        sheep+=arrayOfSheep[i]
        // console.log(sheep)
    }
}
// console.log(sheep)

// let number =[1,2,2,4,4,5,
//     6,7,8,9,
// ]
// let sum=0;

// for (let i=0; i<number.length; i++){
//     // console.log(number[i])
//     sum+=number[i]
//     console.log(sum)
// }

////////////////////////////////////// Codewars 7 kyu https://www.codewars.com/kata/digits-explosion
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// explode("312")-should return : "333122" || explode("102269")-should return: "12222666666999999999"

let explode="102269";
let repeat=''

// function toExpload(){
//     for (i=0;i <explode.length; i++){
//         // console.log(explode[i])
//         repeat+= (explode[i].repeat(explode[i]));
//         // console.log(repeat)   
//     }
// }
// toExpload();
console.log(repeat)
console.log('-----------------------------------')

/////////////////////////////////////////  7 kyu https://www.codewars.com/kata/isograms

let isogram='Dermatooglyphics';
// let isogram='helo';
// let isogram='helo';


// let toSmall=''
isogramCheck(isogram);
/*
function isogramCheck(){
    let arrText=[];
    let toSmall='';
    let indexOf;
    let lastIndex;
    for (i=0; i<isogram.length; i++){
        toSmall+=(isogram[i].toLocaleLowerCase())
    }
    // console.log()
    arrText=toSmall.split('')
    // console.log(arrText)
    for (let i=0; i<arrText.length;i++){
        // console.log(arrText[i])

        indexOf=arrText.indexOf(arrText[i])
        // console.log(indexOf,arrText[i])

        lastIndex=arrText.lastIndexOf(arrText[i])
        // console.log(lastIndex,arrText[i])

        if(indexOf==lastIndex){
            // console.log(isogram+ " -this is isogram")
            continue;
        }else{
            console.log(lastIndex)
            console.log(isogram + " -this is not isogram")
            return;
        }
    }console.log(isogram+ " -this is isogram")
}
*/
///////////////////////////////////////////////////////
// function isogramCheck(isogram='Dermatoglyphics'){
    
// };


// function isogramCheck(str){
//     for (i=0; i<str.length; i++){
       
//     let letterIndex=str.indexOf(str[i]) // index of each letter.
//     let letter=str[i];

//     // search same letter but from index where it was found.

//     let find=str.includes(letter,letterIndex+1);

//     console.log(find,letter,letterIndex)

//         if( str.includes(letter,letterIndex+1)!=true){
//             console.log(str + " is not isogram")
//             break
//         }
//     }return true
// }

/////////////////////////////////////////////////////
function isogramCheck(str){
   let isogram=str.split('')
//    console.log(isogram.length,isogram)
    console.log(isogram , " - before forEach")
    state= true
    
    for(let i=isogram.length-1; i>=0; i--){

        let letter=isogram[i]
        // console.log(letter)

        let letterIndex=isogram.indexOf(letter)
        // console.log(letterIndex)
        
        let letterDeleted=isogram.splice(letterIndex,1)
        // console.log(letterDeleted)
        // console.log(isogram)

        // console.log(isogram.includes(letter))

        if(isogram.includes(letter)==true){
            console.log('this is not isogram')
            break;
        }
        console.log("isogram")

        // console.log(isogram)
    
    }

    /* 
        let isogram= str.toUpperCase().split('');
    //   console.log(str)
    
    
    for (let i=isogram.length-1; i>=0; i-- ){
        
    //     console.log(isogram[i],i)
        
    //     let letter=isogram[i];
        
    //     let letterIndex=isogram.indexOf(letter)
        
        let toFind=isogram.splice(0,1)
    //     console.log(toFind)
        console.log(isogram,toFind)
        console.log("-----------")
        if(isogram.includes(toFind[0])){
        return false;
        console.log("letter include")
        }

    }
    
    return true

        */

}

console.log('-----------------------------------')

console.log(parseInt("08"))

//////////////////////////////////////////
// const b=null;
//     cc={};

//     console.log( b || "+" , cc || "+")
//////////////////////////////////////////
// const str = "Banzai!";
// const message= (str.split('').reverse().join('').indexOf('!')===0)?"Hooray":"Bingo";
// console.log(message)
/////////////////////////////////////////


function find(i){
    console.log(i)
}(25);
console.log(find())
// console.log(window.i)

class Astronaut {
  constructor(weight = '90kg', age) {
    this.weight = weight;
    this.age = age;
  }
}

const person1 = new Astronaut('100kg', 30);
console.log(person1.age, person1.weight);

let varia=('после    '+'    до')
console.log(varia.length)

;
console.log(Math.abs(Math.floor(-46.867)))
let five=5;
console.log(++five)

console.log(NaN+10)

//////////////////////
// const sum={a,b}=> a+b
// console.log(sum)

// const max = (2,5)=>(a===b ? a:b)

console.log(13%5)
console.log([1,2,3,4,5].length)

console.log(Math.pow(2,4))

console.log(typeof("null"))

for (let i=0; i<=4; i++){
    console.log(++i)
}

// let aaa;
// console.log(aaa)

console.log('Vasia'.toUpperCase().length.toString())

console.log(8/2+5+3/2)

console.log(Math.min(10,222,-5,0,'-33'))

// let i=0;
// let c=0;
// const st='Rolling Scopes School'
// while(i<st.length){
//     str[i]==='0'
//     {c++;}i++;}
//     console.log(c)

// console.log('1'+2)
//////////////////////////////////
const a=''
const b=9;
const c=null;
console.log(!!(!a||!b && !c))
console.log(!!(a ||!b && !c))
console.log(!!(a || !b || c))
console.log(!(!a && b && !c))
console.log(! (a || !b && !c))
///////////////////////////////////
console.log(7*3 +(4/2)-(8+2-1))
//////////////////////////////////
console.log("'4'*'9'")
///////////////////////////////////

// const showRS=()=> arg[0]+arg[1]
// const showRS=(year,quarter)=> year+ quarter
// const showRS=(text= year+quarter)=> text
// const showRS=(year,quarter)=>{return year+quarter}


// console.log('RSSchool' + showRS('2021','Q3'))
/////////////////////////////////
let char=String.fromCharCode(67)
console.log(char)
//////////////////////////////////
console.log(typeof(new String("foo")))
/////////////////////////////////
// console.log(typeof(alert()))
console.log(typeof(Symbol('JS')))
console.log('123'==123)
console.log(typeof(Math))
console.log(typeof(null+40))
console.log(typeof(Infinity))
console.log(typeof(Boolean('0')))

let bool='0'
console.log(typeof(bool))
console.log(typeof(mull))

let func=function(){}

let mix=func()
console.log(typeof(mix))

console.log(null==undefined)

console.log({}=={})

console.log(0 || 1 && 2 || 3)

console.log(isNaN(''))

console.log(22-'1')
console.log(1.15 + 2.30 )
console.log(typeof('80'+71.2))
console.log('6'*'3')

let v=(!!'0')
console.log(v)

console.log(12 && '12')

console.log(Boolean('0')==Boolean(0))

console.log(0 && '' && [])
console.log(0 && '' || [])

console.log(typeof(1n))

console.log(typeof(2 +'2'))

console.log('2'+'2')


console.log(true-'hello')


// console.log(message);
// var message='hello'
/////////////////////

// (function(a){
//     arguments[0]=10;
//     return a
// })(5);
////////////////////
printMessage();

function printMessage(){
    console.log('hello')
}
////////////////////
// var name='John';

// function printName(){
//     console.log(name);
//     var name='Peter';
//     console.log(name);
// }
// printName()
/////////////////////

// let name='john';
// function printName(){
//     console.log(name)
// }

// setTimeout(()=>{
//     let name='peter';
//     printName();
// }, 1000);
////////////////////
// 'use strict'
// function getThis(){
//     return this
// }
// console.log(getThis()) // will show Object Window;
///////////////////////////

// let nam= "John";

// function printName(){
//     let nam ="Peter";
//     console.log(nam)
// }
// printName()
///////////////////////////

// function foo(){
//     console.log(arguments);
// }

// foo(1,2,3);
/////////////////////////
function foo(a,b){
    // return a * b;
    console.log(a*b)
}
// foo(1,5)

const bar = foo.bind(null,2);
bar(2)
////////////////////////

// let f = function g(){
//     console.log(23)
// }
// console.log(typeof(f) )

////////////////////////////
// console.log(message)
// let message="hello"
///////////////////////////

// for (let i=0; i<10; i++){
// }
// console.log(i)
////////////////////////////

// let first=1;
// let second = function a(x){
// x && a(--x);
// };
// console.log(first)
////////////////////////////

// const details= {
//     name:"John",
// }
// function getMessage(message){
//     return `${message} ${this.name}`;
// }
// console.log(getMessage.apply(details,["Hello"]))
/////////////////////////////

// var name="John";
// var user ={
//     name:"Peter",
//     printMessage(){
//         console.log(`Hello,${this.name}!`)
//     }
// }
// var printMessage=user.printMessage;
// printMessage();
//////////////////////////////

// const details={
//     message:"Hello!",
// }
// function getMessage(){
//     return (this.message)
// }

// console.log(getMessage.call(details))
// ////////////////////////////////
// function foo(){
//     console.log(this)
// }
// foo.call(null)
////////////////////////////////

// for(var i=0; i<3; i++){
//     setTimeout(function(){
//         console.log(i)
//         console.log('interval')
//     }, 1000)
// }
/////////////////////////////

// let f=(a,b)=>{console.log(a+b)};

/////////////////////////////

// for (let i=0; i<3; i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000)
// }
/////////////////////////////

// function foo(){
//     return{bar:1};
// }
// console.log(typeof foo().bar);
/////////////////////////////

// function getThis(){
//     return this;
// }
// console.log(getThis());
console.log("4"+"8"-"6");

console.log("---codewars---")


const date= new Date()

console.log('---------')
const year=new Date().getFullYear();
console.log(year)
console.log(date)
console.log('---------')

let dayName= date.toLocaleDateString('en-us',{weekday:"long"}) // today day name
let dayNumb= date.getDate() // today day number in a month

console.log(dayName,dayNumb)

const dayNameToFind='Friday';
const dayNumbToFind= 13

console.log(new Date('january 13').getDate())

const month = date.getMonth()
console.log(month)
console.log(date.getDate()+ " today")

console.log("--------------- ");

// let brightest = ["#00FF00", "#FFFF00", "#01130F"];
let brightest =["#001000", "#010000","#002300"];
// let brightest = ["#ABCDEF", "#123456"];
// let brightest = ["#00FF00", "#FFFF00"];
// let brightest = ["#FFFFFF", "#1234FF"];
// let brightest = ["#123456", "#FFFFFF", "#000000"];
// let brightest = ["#Слава", "#Алевтина", "#Тамара"];

// console.log(brightest.sort());

function findBright(array){
    let find=array.sort();
    console.log(find[0])
}
findBright(brightest);

