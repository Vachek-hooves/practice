/*OBJECTS */

// Єдиний тип, що не є прімитивом, тому що може зберігвти не одне значення а цілу коллекцію значень.
// В об'єкті є асіціативний список де є ключ і значення.
/*Особливості наіменувань */
// Змінні всередині об'єкта наз-ся властивістю.
// Функції об'єкта наз-ся  методом.
// ОБ'ЄКТ це список, що містить в собі пару "key" & "value". key - це ім'я властивості, value - значення. 

//Створити об'єкт можна 2-ма способами:
// let user = new Object (); - конструктор в об'єкті.
// let user = {}; - літерал. 

// let Object = {
//    key: value,
//    key: value,
// }


let user = {   // всередині об'єкта міститься "key:value,"
    name: "Ivan",
    age: 30,
    city: "Lvi",
    "test city": "Lviv", //коли key складається з декількох слів , то він огортається в лапки.
//  "test.city": "Lviv", // зустрічається і такий варіант.  
    test: undefined,
    role: "manager",
}
console.log(user);


/* отриманя значення та звернення */
console.log(user["user city"]) // коли key має 2 і більше так звертатися обов'язково.
console.log(user["city"]) // так теж можна звертатися до key з лдним словом.
console.log(user.name); // виводиться ключ(key) - name.
console.log(user.age); // вивести ключ - age.

/* ДОДЯВАННЯ */
user.sex = "male"//додавання key. додається key "role" зі значенням "user".
console.log(user);

/* ВИДАЛЕННЯ */
delete user.sex // коли key має 1 слово.
delete user["user city"] //видалення key з 2-ма і більше словами.

console.log(typeof "name"); // визначаємо який тип має key -name. 
console.log (user); // вивести весь об'єкт.
console.log('---------')


/*  ПЕРЕВІРКА НА ІСНУВАННЯ*/
console.log(user.name === undefined) // якщо повертаєтья "false" такий ключ є. Якщо "true" - такого ключа немає.
console.log(user?.city?.adress) // якщо adress неіснує, тоді поверниться undefined. 

/* превірка існування через оператор "In". Синтаксис (key in object) */
console.log("name" in user); // true - ключ є. false - ключа немає.

let key = "name" 
console.log( key in user); // якщо ключ не огортається в лапки то це вказує, що вона є змінна.


let test = prompt("enter key name") // варіант перевірки коли користувач може ввети назву ключа і тоді виведеться один з варінтів консолі.
if (test in user){
    console.log("exist");
}else {
    console.log("not exist");
} // Перевіряється наявність самого ключа а не його значення.

//варіант перевірки значення ключа
if ("role" in user){
    if(user.role === "user"){

    }else if (user.role === "manager"){

    }else if (user.role === "manager"){

    }
}


/* ЦИКЛ для об'єкту. Якщо потрібно перебрати всі властивості об'єкту*/

for (key in user) {    // Синтаксис - for ( key in object ). key(властивіть) -умовне , мoже бути будь яке ім'я. 
    // перша іттерація user[key] буде рівний 'Ivan'.
    // друга key рівна 30б
    // key = 'Lviv',
    // key = undefined,
    // key = 'user' 
    //if (user[key] === "name"){   // А потрібно перевиріти щоб key = name. Йде пошук, в Об'єкті 'user'  властивість яка має значення name. такого немає тому код не зайде в if.
    if (key === "name"){   // тут вказується,що наш key мусить дрівнювати name, і тільки тоді код зайде в if.
        // user.name = "Vasyl"
        // user["name"] = "Vasyl"
        // user [key] = "Vasyl"
        user[key] = "Vasyl"
        console.log(user);
    }
    console.log(key, user[key]);
}

console.log('----------');
console.log(user);
console.log( user[key]);


///////////////////////////////
/* робота зі змінними і копіювання змінних */ 
let userTwo = {
    name:"Slava",
    age: 34,
    "test city":  "Kyiv",
    test:undefined,
    position: "unemployed",
}
console.log(userTwo)

let userName = "Ivan"
let customerName = userName;
console.log(userName, customerName); // в такому випадку в обох змінних буде значкення Іван.

userName = "Vasyl"
customerName = userName
console.log(userName, customerName) // userName- змінить значення. А customerName значення не зміннюється, його потрібно продублювати.
                                    // це нагадування про роботу зі змінними. В об'єктах все по іншому.

// Правила. 
// Однією із принципових відмінностей в об'єкті є те, що об'єкти зберігаються і копіюються за посиланням. (примітиви копіюються за значенням). 
//Фактично в ядрі JS, змінна не містить об'єкт а містить посилання на комірку пам'яті де зберігається значення об'єкту.


 let user3 = {
    name:"Slava",
    age: 34,
}

// Робимо змінну costumer і присвоїти йому user3.

let costumer = copyObject
console.log(user3, costumer) //  в такому випадку обидва об'єкти будуть однаковими.Але якщо ми хочемо змінити ім'я тоді...

user.name = "Vasyl"
console.log(user3, costumer) //  name в обох об'єктах буде "Vasyl", тому що обидва об'єкти посилаються на одну і ту саму адресу (комірку) пам'яті де зберігається об'єкт.
// Для того щоб присвоїти змінній costumer нове значення а user3 залишився без змін, використовують Object.assign.
// Object.assign - дозволяє не тільки клонувати об'єкт а і зливати різні об'єкти в єдиний.

// Створимо об'єкт costumer котрий буде містити клон user3.

// let customer = {} // створюємо пустий об'єкт. 

// Преший варіант через цикл.
for (let key in user3){  // без let, key буде var. Якщо 
    costumer[key] = user3[key]
}
console.log(key)
console.log(customer, user3)  // зараз costumer & user3 однакові.

user3.name = "Vasyl"  // тепер змінюємо name user3 . 
console.log(costumer, user3) // І тоді в такому випадку name змінюється тільки в user3.

/* Інший метод Object.assign */
Object.assign(costumer, user3) // спочатку вказується об'єкт куди треба копіювати, user3 те що буде копіюватись.
console.log(costumer, user3) // Зараз вони однакові.
user3.name="Igor"
console.log(costumer,user3) // Ім'я в user3 зміниться а costumer залишиться не змінним.

// для тесту створимо об'єкт user1
let user1 = {
    name: "Maria",
}
// Тепер копіюємо user1 & user3 в об'єкт costumer.
Object.assign(costumer,user1,user3); // Якщо в об'єкті user1 & user3 є однаові ключі тоді останній об'єкт перепише значення.
console.log(costumer,user1,user3); // Не важливо в якому порядку знаходяться обє'ти в JS (DOM), головне в якому порядку розташовані в самому Object.assign.

// ПОРІВНЯННЯ знайти самостійно ?????????????????????????????????????????????????????????????????????????????????????????????????????????

let a = {},
    b = a

console.log(a==b); // В цих випадках a і b є об'єктами і рівні між собою.
console.log(a===b); // В цих випадках a і b є об'єктами і рівні між собою.
// Але
let c = {}
    d = {}

console.log(c===d); // - false. Тому що c і d посилаються на дві різні комірки пам'яті.Тому щоб поріняти об'єкти, треба порівняти ще ключі і довжину. 


/* Оголошення об'єкту через const */

const user = { // В об'єкті const властивості можна змінювати. Але не можна такий об'єкт переприсвоювати.
    name:"",
    age: 30,
}
//user = {} // так робити не можна.
user.name = "Vasyl" // Але властивості можна змінювати або видаляти.
delete user.name
delete user.age
console.log(user)// видаляться всі ключі але об'єкт всеодно лишиться const.

user.name = "Igor"
user.role = "manager"
console.log(user);

/* Методи об'єкта - іншими словами  функції які є в середині об'єкту */


let user = {
    name:"Ivan",
    age:30,
} // додамо йому метод.

// Створення - 1-ше пишемо об'єкт в якому буде метод, 2-ге назва функції.
user.sayHi = function (){  // створення через функціональний вираз. sayHi - назва змінної, function () - анонімна функція.
    console.log("Hi")
}
user.sayHi() // зверненя до функції.

// можна оголосити через function declaration.
function sayHi (){ // в дужках можуть бути якісь параметри
    console.log("Hi")
}

user.sayHi = sayHi // Звертаючись до об'єкту user, робиться ідентифікатор- sayHi, і потім туди присвоюється назва функції sayHi.
user.sayHi() // Викликається так само, по ключу sayHi.

/* Додавання методу у вже існуючий об'єкт, також метод може бути оголошенний в об'єкті і при створені */
let user = {
    name:"Ivan",
    age:30,
    // sayHi: function (){
    //     console.log("hi")
    // }
} 
user.sayHi()// викликається так само.

/* T H I S */
// T H I S - містить в собі в залежності від типу функціії, посилання на контекст з якого її було викликано.

function sayHi(){  // коли є function declaration, тоді можливо всередині функціії звернутися до this. 
    console.log(this) // для функціїї яка оголошена через function declaration, this буде рівний window (глобальному об'єкту), при не строгому режимі. При strict воно рівне undefined.
}
sayHi()

let sayHello = () => { //  Якщо стрілкова функція буде мати фігурі дужки, тоді теж все буде ок. 
    console.log(this)
} 
sayHello();

// Викликається в методі, console.log(this)

let user = {
    name:"Ivan",
    age:30,
    sayHi: function (){
        console.log(this) // тут this це посилання на об'єкт.
        console.log(user.name) 
        console.log(this.name) // отримання доступу до властивості  name і виведеться Ivan в console.log
    }
}

let customer ={} // створюеться пустий об'єкт

Object.assign(costumer,user) // в  costumer клонуємо user.
console.log(costumer,user) // тепер вони однаково наповнені і мають методи sayHi.

customer.name = "Dmytro" 
console.log(costumer,user) // тепер costumer має ім'я Dmytro, а в user залишився Ivan.
customer.sayHi() // викликаємо функцію в customer.

/* Варіант коли є функція окремо від методу і її треба присвоїти об'єкту */

let user = {
    name: "Ivan",
    age:30,
}

let customer ={
    name: "Dmytro",
    city:"Lviv"
}

function sayHi(){ // створили незалежну функцію function declaration.
    console.log(this.name)
}

user.sayHi = sayHi; // пресвоєння фукціїї sayHi() в об'єкт user
user.sayHi() // Ivan. // Виклик функції sayHi() в середині об'єкту user.

customer.sayHi = sayHi; // пресвоєння фукціїї sayHi() в об'єкт customer.
customer.sayHi() // Dmytro. // Виклик функції sayHi() в середині об'єкту customer.
