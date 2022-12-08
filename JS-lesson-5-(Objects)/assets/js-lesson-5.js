/* MINIMUM */

/*
let carInfo = {
    maker: "ZAZ",
    model: "zapor",
    year: 1978,
    speed: 60,
    "fuel tank (ltr's)": 56,
    avarage: 11,
    driver: null,
}*/

/* 1. Метод, який виводить на екран ігформацію про авто */
// console.log(carInfo);

/* 2. Зміна імені водія */
// carInfo.driver = "Bro";
// console.log(carInfo.driver+" "+"driver name changed");
/* 3.Метод перевірки імені водія */

// if ("driver" in carInfo){
//     let find = prompt("enter driver name")
//     if (carInfo.driver === find ){
//         console.log("driver"+" "+find +" for car  "+"'"+ carInfo.model+"'" + " is available")
//     }else if(carInfo.driver !== find  ){
//         console.log("driver"+" "+find +" for car  "+"'"+ carInfo.model+"'" + " is not available")
//     }
// }

/* 4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. */
/*
let carInfo = {
    maker: "ZAZ",
    model: "zapor",
    year: 1978,
    speed: 60,
    "fuel tank (ltr's)": 56,
    avarage: 11,
    driver: null,
    distance: function(dist){
        fuelPerKm = ((this.avarage) / 100) * (dist);
        console.log(fuelPerKm +" required litters per your distance");
        time = (dist) / (this.speed);
        if (time > 4){
        hoursCorrection = time / 4;
        console.log("you need"+" "+ (time + hoursCorrection ).toFixed(1) + "(every 4 hrs, 1 hr break already included )"+" "+"& you will consume"+" "+`${fuelPerKm}`+" ltr's of fuel")
        } else if(time <= 4) {
        console.log("you need"+" "+ (time).toFixed(1) + " hrs to reach finish point without break"+" "+"& you will consume"+" "+`${fuelPerKm}`+" ltr's of fuel");
        }
    }
    
}
carInfo.distance(+prompt("enter your distance"));
*/


/* NORMA */

/* Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом */

let time = {
    hours: "",
    min: "",
    sec: "",
}
console.log(time)

/* Для виведення часу на екран. */

time.hours=new Date().getDate()+1;
time.min=new Date().getMinutes();
time.sec=new Date().getSeconds();

function showTime (){
    console.log(time.hours,time.min,time.sec);
}
showTime();

/* Зміни часу на передану кількість секунд. */

function plusSecond (){
    console.log(time.sec+(100));
}
time.sec= plusSecond();

/* Зміни часу на передану кількість хвилин. */

/* Зміни часу на передану кількість годин. */












// carInfo['driver 2']="Tamara"; // adding new key (driver2) & value ("Tamara");
// Object.assign(carInfo,{driver:"Slava"}); //add name to key (driver).

// if (carInfo.driver){
//     console.log(carInfo.driver," - driver name is available");
// }

// if ( "driver" in carInfo) {
//     console.log(carInfo.driver, " - another way to find the value");
// }

