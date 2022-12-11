/* MINIMUM */


let carInfo = {
    maker: "ZAZ",
    model: "zapor",
    year: 1978,
    speed: 60,
    "fuel tank (ltr's)": 56,
    avarage: 11,
    driver: null,
}

/* 1. Метод, який виводить на екран ігформацію про авто */

console.log(carInfo);

/* 2. Зміна імені водія */

carInfo.driver = prompt("What driver name do you want to add");
console.log("driver name changed to"+" "+carInfo.driver);

/* 3.Метод перевірки імені водія */

if ("driver" in carInfo){
    let find = prompt("enter driver name what you want to check is it available")
    if (carInfo.driver === find ){
        console.log("driver"+" "+find +" for car  "+"'"+ carInfo.model+"'" + " is available")
    }else if(carInfo.driver !== find  ){
        console.log("driver"+" "+find +" for car  "+"'"+ carInfo.model+"'" + " is not available")
    }
}

/* 4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. */

// let carInfo = {
//     maker: "ZAZ",
//     model: "zapor",
//     year: 1978,
//     speed: 60,
//     "fuel tank (ltr's)": 56,
//     avarage: 11,
//     driver: null,
    
// }
// console.log(carInfo);

function distance (dist){
    fuelPerKm = ((this.avarage) / 100) * (dist);
    // console.log(fuelPerKm +" required litters per your distance");
    timing = (dist) / (this.speed);
    if (timing > 4){
    hoursCorrection = timing / 4;
    console.log("you need"+" "+ (timing + hoursCorrection ).toFixed(1) + "(every 4 hrs, 1 hr break already included )"+" "+"& you will consume"+" "+`${fuelPerKm}`+" ltr's of fuel")
    } else if(timinge <= 4) {
    console.log("you need"+" "+ (timing).toFixed(1) + " hrs to reach finish point without break"+" "+"& you will consume"+" "+`${fuelPerKm}`+" ltr's of fuel");
    }
}

carInfo.distance=distance;
carInfo.distance(+prompt("enter your distance"));


/* NORMA */

/* Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом */

let time = {
    hours: "",
    min: "",
    sec: "",
}
console.log(time);

/* Для виведення часу на екран. */
let today = new Date();
time.hours= today.getHours();
time.min=today.getMinutes();
time.sec=today.getSeconds();
// console.log(today)

function showTime(){
    // console.log((this.hours)+":"+(this.min)+":"+(this.sec));
    newTime= ((this.hours)+":"+(this.min)+":"+(this.sec));
}
time.showTime=showTime;
time.showTime();
console.log(newTime+"-"+" this is result of function, show time generated from object 'time'")

/* Зміни часу на передану кількість секунд. */

function addSeconds( newSec){
    today.setSeconds(this.sec + newSec)
    // console.log(today);
    let newToday=today;
    console.log(newToday.getHours()+":"+newToday.getMinutes()+":"+newToday.getSeconds()+"-"+"you have made time correction  "+(newSec)+ " seconds");
}
time.newSec=addSeconds;
time.newSec(+prompt("how many seconds do you want to add"))

/* Зміни часу на передану кількість хвилин.*/

function addMinutes(newMins) {
    today.setMinutes(this.min+ newMins);
    // return today
    // console.log(today)
    let newToday2 =today;
    console.log(newToday2.getHours()+":"+newToday2.getMinutes()+":"+newToday2.getSeconds()+"-"+"you have made time correction  "+(newMins)+ " minutes");
}
time.newMins=addMinutes;
time.newMins(+prompt("how many minutes do you want to add"))

/* Зміни часу на передану кількість годин. */

function addHours(newHours) {
    today.setHours(this.hours+ newHours);
    // return today
    let newToday3 = today;
    console.log(newToday3.getHours()+":"+newToday3.getMinutes()+":"+newToday3.getSeconds()+"-"+"you have made time correction  "+(newHours)+ " hours");
    // console.log(today);
}
time.newHours=addHours;
time.newHours(+prompt("how many hours do you want to add"))












