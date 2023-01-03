console.log("Minimum");
console.log("Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:");

let shoppingList = [];

function addToList (){ 
    shoppingList.push({product:(prompt("write product name")),price:(+prompt("enter price grn/kg. ?")),weight:(+prompt("weight in kg or ltr? If it's a jar, just press OK"))});
};
shoppingList[0]=addToList; // зберігаєтсья під 0 індексом.
shoppingList.addToList;

for (let i = 0; i<shoppingList.length; i++){ // цикл що створює новий продукт і додає до масиву
    if (confirm("press OK if you want to add new products. If not, press CANCEL")==true){  // якщо confirm правда, тоді працює функція addToList.
        addToList();
    }else{
        alert("thank's for shopping, & have a nice day!");
    }
};
shoppingList.shift(0); // видаляю функцію, (точніше елемент під індексом 0, де знаходиться фукція)


console.log(" 1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.");
console.log("Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.");

for (let i=0; i<shoppingList.length; i++){ // цикл щоб просто вивести всю інформацію про записаний продукт.
    console.log(`${shoppingList[i].product}:${shoppingList[i].weight} kg; price - ${shoppingList[i].price} grn/kg`)
};

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
            allBought += (yesBought.product +" "); 
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
            allNotBought +=(notBought.product + " " );
            
        }
    };


console.log("not yet bought product:");
console.log(allNotBought);
console.log("bought products:");
console.log(allBought);
// console.log(shoppingList)

console.log("Normal");
console.log("Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)");

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
for (let t=0; t<=shoppingList.length; t++){
    if(confirm("Do you want to delete some product?")== true){
        deleteProd()
    }else {
        break;
    }
}
shoppingList.shift(0); // видалення функції.

console.log("CORRECTED PRODUCT LIST AFTER DELETING SOME ITEMS:");
for (let i=0; i<shoppingList.length; i++){ // цикл щоб просто вивести всю інформацію про записаний продукт.
    console.log(`${shoppingList[i].product}:${shoppingList[i].weight} kg; price - ${shoppingList[i].price} grn/kg`)
}

console.log("2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.")

let ListNew =[]; // масив для того щоб додати до нього знову продукти а потім цей масив поєднати з першим ShoppingList (але треба спробувати через concat і в нього самого).

function add (){ // Така сама функція як і addProduct
    ListNew.push({product:(prompt("product name")),price:(+prompt("enter price grn/kg ?")),weight:(+prompt("weight?"))});
};
ListNew.unshift(add);

for (let i = 0; i<ListNew.length; i++){ // цикл що створює новий продукт і додає до масиву
    if (confirm("press OK if you want to add another products to list")==true){  // якщо confirm правда, тоді працює функція addToList.
        add();
    }else{
        alert("You have complished to adding new items!")
    }
};
// console.log(ListNew);
ListNew.shift(0); // видаляю функцію щоб зручно було працювати в циклі.
// console.log(ListNew);

// створив ще один масив. Тепер порівняю обидва і виведу ті продукти,що повторюються.
for (let i=0; i<shoppingList.length;i++){
    // console.log(test[i].name); // цикл бере значення з test і порівнює з кожним значенням newTest.
    for (let j=0; j<ListNew.length; j++){
        // console.log(newTest[j].name)
        if (shoppingList[i].product === ListNew[j].product && shoppingList[i].price === ListNew[j].price ){ // заходить коли повторюється назва продукту.
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
console.log("FINAL LIST: (you can see all product list & chose which one was bougnt )")

let final = shoppingList.concat(ListNew);

for (let i=0; i<final.length; i++){ // цикл щоб просто вивести всю інформацію про записаний продукт.
    console.log(`${final[i].product}:${final[i].weight} kg; price - ${final[i].price} grn/kg`)
}

console.log("Maximum");

let conf ="";
    yesB ="";
    notB ="";
    sumB = 0;
    sumNotB = 0;
    allB = "";
    allNotB = "";
for (let l=0; l<final.length; l++){
    conf = confirm("did you bought " + final[l].product+ " already ?")
    final[l].confirm=question;
    if (conf == true){
        // console.log("bought products");
        yesB =final[l]; // присвоєння глобальної змінної, щоб вивести її поза циклом.
        // console.log("має бути об'єкт з купленими продуктами")
        // console.log(bought);
        // console.log(yesBought); // об'єкт з купленними продуктами.
        // yesbought += yesbought.product;
        allB += (yesB.product +" "); 
        if (yesB.weight <= 0){
            sumB += yesB.price;
        }else {
            sumB += yesB.price*yesB.weight;
        }
        // sumBought += yesBought.price;
    }else if(conf == false){
        // console.log("not bought ");
        notB =final[l] // присвоєння глобальної змінної, щоб вивести її поза циклом.
        // console.log(notBought); // об'єкт з не купленими товарами.
        if(notB.weight<=0){
            sumNotB += notB.price;
        }else {
            sumNotB += notB.price*notB.weight;
        }
        // allNotBought += (notBought.product + ","); // додає ціну продукту до самого себе і виводить загальну сумму.
        allNotB +=(notB.product + " " );
        
    }
};
console.log("not yet bought product:");
console.log(allNotB);
console.log("bought products:");
console.log(allB);
console.log("1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.");

let summ=0;
for (let i=0 ; i< final.length; i++){ // цикл що відображає ціну кожного продукту, окремо.
    if (final[i].weight <=0 ){ // якщо вага не вказана (наприклад: пакет молока)
        summ += final[i].price+final[i].weight; // тоді виконується цей цикл.
        // console.log(shoppingList[i].price+shoppingList[i].weight);
    } else {
        summ += final[i].price*final[i].weight; // цикл,що додає кожний прайс на вагу до себе по колу.
        // console.log(shoppingList[i].price*shoppingList[i].weight); // просто побачити суму до кожного продукту.
    }
};

console.log(" YOUR BASKET TOTAL PRICE:");
console.log((summ).toFixed(1) +": grn");

console.log("1a. Підрахунок суми всіх придбаних продуктів в списку.")
console.log((sumB).toFixed(1)+ " : grn");

console.log("2. Підрахунок суми всіх (не) придбаних продуктів.");
console.log((sumNotB).toFixed(1) + " : grn");

console.log("3. Показання продуктів в залежності від суми (від більшого до меньшого/ від меньшого до більшого в залежності від параметра функції, який вона приймає)");
final.sort((a,b)=>a.price- b.price);
console.log(" Від меншого до більшого");

for (let i=0; i<final.length; i++){ // цикл щоб просто вивести всю інформацію про записаний продукт після сортування.
    console.log(`${final[i].product}:${final[i].weight} kg; price - ${final[i].price} grn/kg`)
};

console.log("Від більшого до меньшого");
final.sort((a,b)=> b.price - a.price);

for (let i=0; i<final.length; i++){ // цикл щоб просто вивести всю інформацію про записаний продукт після сортування.
    console.log(`${final[i].product}:${final[i].weight} kg; price - ${final[i].price} grn/kg`)
};

