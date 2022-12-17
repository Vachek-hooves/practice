/* Масиви */
/* Minimum */

/* 1. Створити масив (список покупок). Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
Написати кілька функцій для роботи з таким масивом */

let shoppingList = [
    
];

function addToList (){
    shoppingList.push({product:"kiwi",price:80 +" grn/kg",weight:2.3});
    shoppingList.push({product:"banana",price:60 +" grn/kg",weight:1.5});
    shoppingList.push({product:"orange",price:120 +" grn/kg",weight:1.9});
};
shoppingList[0]=addToList;
shoppingList.addToList;

for (let i = 0; i<shoppingList.length; i++){
    if (confirm("press OK if you want to add new product")==true){
        addToList();
    }else{
        alert("thank's, have a nice day!")
    }
}
console.log(shoppingList);

let adited=shoppingList;

for (let i=0; i < adited.length; i++){
    console.log(i, adited[i])
}

/*
function addToList (){
    shoppingList.push({product:(prompt("product name")),price:(+prompt("enter price grn/kg ?")),weight:(prompt("weight?"))});
    // if (confirm("did you buy it?")==true){
        
    // }
};
shoppingList[0]=addToList;

for (let i = 0; i<shoppingList.length; i++){
    if (confirm("press OK if you want to add new product")==true){
        addToList();
    }else{
        alert("thank's, have a nice day!")
    }
}
console.log(shoppingList);
for (let key of shoppingList){
    console.log(key,shoppingList[key])
}
*/


// console.log([shoppingList], " array shopping list");
// console.log(shoppingList)
// console.log(shoppingList[list]);

// console.log(typeof(confirm())); // boolean
// console.log(typeof(Boolean));   // function

console.log("-----------------------------------------------------------")
let experiment = [  list ={name:"potato", weight:12}];
console.log(experiment,"- array created for experiment");
console.log("Find items in yours basket down below :")
console.log(list.name,"-",list.weight,"kg")
console.log(experiment[0])

console.log("-----------------------------------------------------------")
