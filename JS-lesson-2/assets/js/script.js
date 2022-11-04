let num1 = 0.1;
    num2 = 0.2;
    console.log((num1*10+num2*10)/10);

let number1 = '1';
    number2 = 2;

console.log(Boolean(number1)+number2);


const file = 820;
let driveSize = prompt ('your pen-drive GB size')
console.log((driveSize*1024/file).toFixed(0),'files you can upload');



let money = prompt ('how much money do you have');
    chocolate = prompt ('how much chocolate cost?');
console.log((money/chocolate).toFixed(),'amout of chocolates you will buy' );
console.log((money%chocolate).toFixed(2),'money remain in wallet)');

let numb = prompt ('enter your number')
console.log(numb.split("").reverse().join(""));


let amount = prompt ('how much money do you put');
    months = 2;
    yearPercent = 5;
console.log((amount/100*(yearPercent/12)*2).toFixed(1),"$ in two months");

// 2 && 0 && 3 - 0 оператор && шукає перше false

// 2 || 0 || 3 - 2. Оператор 'or' шукає 1-у істину

// 2 && 0 || 3 - 3. оператор && шукає перше false а потім 'or' шукає істину.