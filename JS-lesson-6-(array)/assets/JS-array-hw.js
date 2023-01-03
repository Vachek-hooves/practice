/* Масиви */
/* Minimum */

/* 1. Створити масив (список покупок). Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
Написати кілька функцій для роботи з таким масивом */
// 1. Виводить весь список на екран таким чином,щоб спочатку йшли продукти,що ще не придбані, а потім -ті,що вже придбали.
console.log("Створити масив (список покупок). Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.Написати кілька функцій для роботи з таким масивом")
/*
let shoppingList = [
    // {product:"kiwi",price:80 +" grn/kg",weight:2.3}
];

function addToList (){ 
    shoppingList.push({product:(prompt("product name")),price:(+prompt("enter price grn/kg ?")),weight:(+prompt("weight?"))});
};

shoppingList[0]=addToList; // зберігаєтсья під 0 індексом.
shoppingList.addToList;

for (let i = 0; i<shoppingList.length; i++){ // цикл що створює новий продукт і додає до масиву
    if (confirm("press OK if you want to add new product")==true){  // якщо confirm правда, тоді працює функція addToList.
        addToList();
    }else{
        alert("thank's for shopping, & have a nice day!")
    }
};

shoppingList.shift(0); // видаляю функцію, (точніше елемент під індексом 0, де знаходиться фукція)
// console.log(shoppingList); // виводжу результат. Тепер функції не існує.
console.log("-------------------------------------------")
console.log("ALL PRODUCTS LIST:");

for (let i=0; i<shoppingList.length; i++){ // цикл щоб просто вивести всю інформацію про записаний продукт.
    console.log(`${shoppingList[i].product}:${shoppingList[i].weight} kg; price - ${shoppingList[i].price} grn/kg`)
}

console.log("--------------------------------------------");
// console.log(" show array with list of products");
// console.log(shoppingList); // масив з усіма товарами.
// console.log("--------------------------------------------");
// console.log("тут має бути список куплених та ще не куплених товарів")
// Цикл що додасть value а в ньому буде confirm на кожний товар.

console.log("1. Виводить весь список на екран таким чином,щоб спочатку йшли продукти,що ще не придбані, а потім -ті,що вже придбали.")
confirm("Confirm that you want to tag bought products");
let question ="";
    yesBought ="";
    notBought ="";
    sumBought = 0;
    sumNotBought = 0;
    allBought = "";
    allNotBought = "";
for (let l=0; l<shoppingList.length; l++){
    question = confirm("did you bought " + shoppingList[l].product+ " already ?")
    shoppingList[l].confirm=question;
    if (question == true){
        // console.log("bought products");
        yesBought =shoppingList[l]; // присвоєння глобальної змінної, щоб вивести її поза циклом.
        // console.log("має бути об'єкт з купленими продуктами")
        // console.log(bought);
        // console.log(yesBought); // об'єкт з купленними продуктами.
        // yesbought += yesbought.product;
        allBought += (yesBought.product +","); // куплені продукти будуть виводитися через кому.
        if (yesBought.weight <= 0){
            sumBought += yesBought.price;
        }else {
            sumBought += yesBought.price*yesBought.weight;
        }
        // sumBought += yesBought.price;
    }else if(question == false){
        // console.log("not bought ");
        notBought =shoppingList[l] // присвоєння глобальної змінної, щоб вивести її поза циклом.
        // console.log(notBought); // об'єкт з не купленими товарами.
        if(notBought.weight<=0){
            sumNotBought += notBought.price;
        }else {
            sumNotBought += notBought.price*notBought.weight;
        }
        // allNotBought += (notBought.product + ","); // додає ціну продукту до самого себе і виводить загальну сумму.
        allNotBought +=(notBought.product + "," ); // не куплені продукти будуть виводитися через кому.
        
    }
}
console.log("not yet bought product:");
console.log(allNotBought); // Працює, видає тільки назву продукту.
// console.log((sumNotBought).toFixed(1)+ ": grn", " price of not bought products"); // Працює, видає ціну не куплених продуктів (але без урахування ваги,не страшно можна потім підправити)
console.log("2. Покупка продукту. Функція прийсає назву продукту і відзначає його як придбаний")
console.log("bought products:");
// console.log(yesbought.product); // виведе останній куплений продукт
console.log(`${allBought}`); // має бути список з усіх продуктів.
// console.log((sumBought).toFixed(1)+ ": grn", "  bought products price") 

console.log("--------------------------------------------");
let summ=0;
for (let i=0 ; i< shoppingList.length; i++){ // цикл що відображає ціну кожного продукту, окремо.
    if (shoppingList[i].weight <=0 ){ // якщо вага не вказана (наприклад: пакет молока)
        summ += shoppingList[i].price+shoppingList[i].weight; // тоді виконується цей цикл.
        // console.log(shoppingList[i].price+shoppingList[i].weight);
    } else {
        summ += shoppingList[i].price*shoppingList[i].weight; // цикл,що додає кожний прайс на вагу до себе по колу.
        // console.log(shoppingList[i].price*shoppingList[i].weight); // просто побачити суму до кожного продукту.
    }
    
};
// console.log(" YOUR BASKET TOTAL PRICE:");
// console.log((summ).toFixed(1) +": grn");
console.log("----------------------------------------------")
console.log(allBought+ " Products what was bought");// String з купленим товаром.

//Norma
// 1.Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продук, що ми шукаємо буде відсутнім)
// console.log(shoppingList)
console.log("Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продук, що ми шукаємо буде відсутнім)")
let findName = "";
    toIndex = "";

function deleteProd(){
    findName = prompt("enter product name what you want to delete")
    if (shoppingList.findIndex(item => item.product === findName)){ // якщо ім'я існує, тоді заходимо в if 
        toIndex = shoppingList.findIndex(item => item.product === findName); // шукаєв якому індексі сидить це ім'я.
        shoppingList.splice(toIndex,1); // видаляємо весь об'єкт з цим ім'ям.
    }
}
shoppingList.unshift(deleteProd)// запхав функцію на початок масиву.

// console.log(shoppingList);

for (let t=0; t<=shoppingList.length; t++){
    if(confirm("Do you want to delete some product?")== true){
        deleteProd()
    }else {
        break;
    }
}
shoppingList.shift(0); // видалення функції.
console.log("Please, find your updated list below")
console.log("CORRECTED PRODUCT LIST AFTER DELETING:");
for (let i=0; i<shoppingList.length; i++){ // цикл щоб просто вивести всю інформацію про записаний продукт.
    console.log(`${shoppingList[i].product}:${shoppingList[i].weight} kg; price - ${shoppingList[i].price} grn/kg`)
}

// 2. Додавання покупки в список.Враховуй,що при додаванні покупки з вже існуючим в списку продуктом, необхідно збільшувати
// кількість в існуючій покупці, а не додавати нову. При цьому також повина змінитися сума. Наприклад,якщо ціна за одинницю 12 а
// кількість товарів стало 2 то сума буде 24.
console.log("2. Додавання покупки в список.Враховуй,що при додаванні покупки з вже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повина змінитися сума. Наприклад,якщо ціна за одинницю 12 а кількість товарів стало 2 то сума буде 24.")
// Потрібно створити новий масив і в ньго додавати продукти. Потім порівняти продукти через подвійний цикл, в котрому видаляється
// однакові продукти в першому масиві. Потім, створити масив в котрий запхається попередні два.
// ҐСкоріше за все , потрібно вставити функцію додавання продукту спочатку, але це не точно. 

let ListNew =[]; // масив для того щоб додати до нього знову продукти а потім цей масив поєднати з першим ShoppingList (але треба спробувати через concat і в нього самого).

function add (){ 
    ListNew.push({product:(prompt("product name")),price:(+prompt("enter price grn/kg ?")),weight:(+prompt("weight?"))});
};
// console.log(ListNew)
ListNew.unshift(add); // прописав ту саму функцію,що була на початку завданняю
// console.log(ListNew)
// console.log(ListNew+ "ListNew - before loop")

for (let i = 0; i<ListNew.length; i++){ // цикл що створює новий продукт і додає до масиву
    if (confirm("press OK if you want to add another products to list")==true){  // якщо confirm правда, тоді працює функція addToList.
        add();
    }else{
        alert("You have complished to adding new items!")
    }
};
ListNew.shift(0); // видаляю функцію щоб зручно було працювати в циклі.
// console.log(ListNew , " ListNew after loop");

// let lastTest=[];
// створив ще один масив. Тепер порівняю обидва і виведу ті продукти,що повторюються.
for (let i=0; i<shoppingList.length;i++){
    // console.log(test[i].name); // цикл бере значення з test і порівнює з кожним значенням newTest.
    for (let j=0; j<ListNew.length; j++){
        // console.log(newTest[j].name)
        if (shoppingList[i].product === ListNew[j].product && shoppingList[i].price === ListNew[j].price ){ // заходить коли в newTest повторюється назва продукту.
            // console.log("similar product with same price already exist. It`s "+ `${ListNew[j].product}`);
            // console.log(shoppingList[i].weight+ ListNew[j].weight + " this is total weight of founded product");
            ListNew[j].weight +=shoppingList[i].weight; // додавання ваги, і зберігання його в масиві newTest.
            let indexToDel =shoppingList.findIndex(item=>item.product ===shoppingList[i].product); // пошук індексу того об'єкту,що повторюється.
            // console.log(indexToDel); // під яким індексом продукт в масиві test, що повторюється.
           shoppingList.splice(indexToDel,1); // видалення цілого об'єкту що знаходиться в індексі, який було знайдено.
            // тепер треба подумати, як видалити повторюючий продукт і залишити нову версію.
        }
    }
} 
console.log("---------------- after concat");
console.log("FINAL LIST:")

// console.log(test);
// console.log(newTest)
let final = shoppingList.concat(ListNew);
for (let i=0; i<final.length; i++){ // цикл щоб просто вивести всю інформацію про записаний продукт.
    console.log(`${final[i].product}:${final[i].weight} kg; price - ${final[i].price} grn/kg`)
}
// console.log(final);

// Максимум
console.log("Maximum");
console.log(" YOUR BASKET TOTAL PRICE:");
console.log((summ).toFixed(1) +": grn");

// 1. Підрахунок суми усіх продуктів (враховуючи кількість кожного) в списку.
console.log("1. Підрахунок суми усіх продуктів (враховуючи кількість кожного) в списку.");
console.log(" YOUR BASKET TOTAL PRICE:");
console.log((summ).toFixed(1) +": grn");

// 2. Підрахунок суми всіх (не придбаних продуктів).
console.log("2. Підрахунок суми всіх (не придбаних продуктів).");
console.log((sumNotBought).toFixed(1)+ ": grn", " price of not bought products")

// 3. Показання продуктів в залежності від суми (від більшого до меньшого/ від меньшого до більшого в залежності від параметра функції, який вона приймає)
console.log("3. Показання продуктів в залежності від суми (від більшого до меньшого/ від меньшого до більшого в залежності від параметра функції, який вона приймає)")
final.sort((a,b)=>a.price- b.price);
console.log(final)
*/
// console.log(shoppingList); // array з усіма внесеними продуктами.
// console.log([shoppingList], " array shopping list");

// console.log("-----------------------------------------------------------")
// let experiment = [  list ={name:"potato", weight:12}];
// console.log(experiment,"- array created for experiment");
// console.log("Find items in yours basket down below :")
// console.log(list.name,"-",list.weight,"kg")
// console.log(experiment[0].name)

// console.log("-----------------------------------------------------------")

// let test = [
//     {product:"banana", price: 90, weight:2.4},
//     {product:"orange", price: 120, weight:3.2},
// ]

// for (let i=0; i<test.length; i++){
//     console.log(i,test[i])
// }

// let test = [
//     {number: 12, name:"abra"},
//     {number:30, name:"cadabra"},
//     {number:8, value:" bam"},
// ]
// console.log(test);

// let summ = 0;
// for (let i=0; i< test.length; i++){
//     // console.log(test[i].number)
//     summ += test[i].number;
//     // console.log(summ)
// }
// console.log(summ)
// console.log("--------------------------------");

// let test = [
//     {price:12, weight:2,   name:"abra", },
//     {price:30, weight:2.5, name:"cadabra" },
//     {price:8,  weight:1.7, value:" bam"},
// ]
// console.log(test);

// let chose = confirm("did you bought this product?");

// let variable = function bought(){ // функці яка присвоюється в bought і виводить продукт 
//     console.log("hi")
//     if (chose == false){
//         console.log("NOT BOUGHT")
//         console.log(test[i]);
//     }else {
//         console.log("already byed");
//         console.log(test[i]);
//     } 
// }
// // test[0].bought= bought; 
// // console.log(test)
// // test[0].bought()

// for (i=0; i<test.length; i++){
//     // console.log(test[i]);
//     test[i].bought=bought;
//     test[i].bought();
//     // console.log(test[i])
// }

// function confirm(){
//     // console.log("hi")
    
// }

// let totalprice = 0;
//     // bought = confirm("did you bought this")
// for (let i=0; i< test.length; i++){
//     // console.log(test[i]);
//     test[i].confirm=variable;
//     console.log(test[i]);
//     test[i].confirm(); // виклик функції "bought" яка має ключ "confirm".
//     // console.log(test[i].confirm());
//     // console.log(test[i].price)
//     // summ += test[i].price;
//     // console.log(summ)
//     // console.log(test[i].price); // сума товару
//     // console.log(test[i].weight); // вага товару
//     // console.log(test[i].price*test[i].weight);// Сума кожного товару окремо
//     // totalprice += test[i].price*test[i].weight;
    
// }
// console.log(totalprice +(" : grn"));

//спробую створити цикл і функціональний вираз. А потім запхати функцію в цикл.
console.log("--------------------------------");

// let test = [
//     {price:12, weight:2,   name:"abra", },
//     {price:30, weight:2.5, name:"cadabra" },
//     {price:8,  weight:1.7, name:"bam"},
// ]

// console.log(test);

// let bought = '';

// for (let i=0; i< test.length; i++){ // цикл,що додає value- confirm а в ній confirm.
//     bought = confirm("did you bought " + test[i].name+ " already ?")
//     test[i].confirm=bought;
//     // console.log(test[i].confirm);// показуэ true || false.
//     if (bought == true){
//         console.log("Byed products");
//         console.log(test[i]);
//     }else if(bought== false){
//         console.log("product which not yet bought");
//         console.log(test[i])
//     }
// }

// let search=prompt("enter product you want to find & delete");
// let newTest = "";
// test.find(function(item){
//     if (item.name == search){
//         console.log("name "+`${search}`+ " is exist");
//         console.log(newTest = test.splice(2))
//     }
// })
/*
test.unshift({name:"qwe"})
console.log(test)
let toDelite = prompt("Enter product name");
let toFinal = test.findIndex(item => item.name === toDelite);
console.log(toFinal+" - index (location of typed name)"); // індекс в якому знаходться продукт,що шукаю.
test.splice(toFinal,1); // вилучаю знайдений індекс.( є нюанс- якщо це 0 індекс, тоді вилучення не працює.) Треба тоді функцію findIndex 
// запушити на початок масиву,щоб findIndex був в 0 індексі. Або, додатково прописати shift.
// console.log(test.splice(toFinal,toFinal));
console.log(test);
*/

// let findName = "";
//     toIndex = "";


// function deleteProd(){
//     findName = prompt("enter product name")
//     if (test.findIndex(item => item.name === findName)){ // якщо ім'я існує, тоді заходимо в if 
//         toIndex = test.findIndex(item => item.name === findName); // шукаєв якому індексі сидить це ім'я.
//         test.splice(toIndex,1); // видаляємо весь об'єкт з цим ім'ям.
//     }
// }
// test.unshift(deleteProd)// запхав функцію на початок масиву.

// // console.log(test);

// for (let t=0; t<=test.length; t++){
//     if(confirm("Do you want to delete some product?")== true){
//         deleteProd()
//     }else {
//         break;
//     }
// }
// test.shift(0);
// console.log("Please, find your updated list below")
// console.log(test);

// let test = [
//     {price:12, weight:2,   name:"abra" },
//     {price:30, weight:2.5, name:"cadabra"},
//     {price:8,  weight:1.7, name:"bam"},
    
// ]
// console.log(test)

// function addToList (){ 
//     test.push({price:(+prompt("enter price grn/kg ?")),weight:(+prompt("weight?")),name:(prompt("product name"))});
// };

// test.unshift(addToList);

// let confirmation = "";
// for (let i = 1; i<test.length; i++){ // цикл що створює новий продукт і додає до масиву
//     confirmation=confirm("do you want to add new product to list")
//     if (confirmation == true){  // якщо confirm правда, тоді працює функція addToList.
//         addToList();
//         // console.log(test[i].name) // просто показує назву продукту при кожній ітерації.
//         // if (test.findIndex(item=>item.name=== test[i].name)){}
//         // if (test[i].name===test[i].name && test[i].price===test[i].price){
//         //     console.log("same name exist");
//         //     console.log("same price exist");
//         //     console.log(test.findIndex(item => item.name === test[i].name));
//         //     // можливо,краще додати нові продукти в цьому циклі, а потім створити цикл в якому шукається однакові продукти.
//         // }
//     }else{
//         alert("thank's for shopping, & have a nice day!")
//         break;
//     }
// };
// test.shift(0);
// let test = [
//     {price:12, weight:2,   name:"abra" },
//     {price:30, weight:2.5, name:"cadabra"},
//     {price:8,  weight:1.7, name:"bam"},
//     {price:130, weight:1.2, name:"item"},
//     {price:12, weight:2, name:"prod" },
// ]

// let newTest = [
    
//     {price:30, weight:3,  name:"cadabra" },
//     {price:130, weight:1.2, name:"item"},
//     {price:12, weight:2, name:"prod" },
// ];

// console.log(test)
// console.log(newTest)
/*
let lastTest=[];
// створив ще один масив. Тепер порівняю обидва і виведу ті продукти,що повторюються.
for (let i=0; i<test.length;i++){
    // console.log(test[i].name); // цикл бере значення з test і порівнює з кожним значенням newTest.
    for (let j=0; j<newTest.length; j++){
        // console.log(newTest[j].name)
        if (test[i].name === newTest[j].name && test[i].price === newTest[j].price ){ // заходить коли в newTest повторюється назва продукту.
            console.log("similar product with same price already exist. It`s "+ `${newTest[j].name}`);
            console.log(test[i].weight+newTest[j].weight + " this is total weight of founded product");
            newTest[j].weight +=test[i].weight; // додавання ваги, і зберігання його в масиві newTest.
            let indexToDel = test.findIndex(item=>item.name ===test[i].name); // пошук індексу того об'єкту,що повторюється.
            console.log(indexToDel); // під яким індексом продукт в масиві test, що повторюється.
            test.splice(indexToDel,1); // видалення цілого об'єкту що знаходиться в індексі, який було знайдено.
            // тепер треба подумати, як видалити повторюючий продукт і залишити нову версію.
        }
    }    
}
console.log("---------------- after concat");
console.log("FINAL LIST:")
// console.log(test);
// console.log(newTest)
let finalTest = test.concat(newTest);
console.log(finalTest);
*/

let test = [
    {price:12, weight:2,   name:"abra" },
    {price:30, weight:2.5, name:"cadabra"},
    {price:8,  weight:1.7, name:"bam"},
    {price:130, weight:1.2, name:"item"},
    {price:12, weight:2, name:"prod" },
]

console.log(test)
test.sort((a,b)=>a.price - b.price);
console.log(test.length)