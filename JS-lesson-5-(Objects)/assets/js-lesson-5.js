let carInfo = {
    maker: "ZAZ",
    model: "zapor",
    year: 1978,
    "avarege speed": 60,
    "fuel tank (ltr's)": 56,
    "avarege consamprion (ltr's)": 11,
    driver: "",
}

/* 1. Метод, який виводить на екран ігформацію про авто */
console.log(carInfo);

/* 2. Зміна імені водія */
carInfo.driver = "Bro";
console.log(carInfo.driver+" "+"driver name changed");
/* 3.Метод перевірки імені водія */

if ("driver" in carInfo){
    let find = prompt("enter driver name")
    if (carInfo.driver === find ){
        console.log("driver"+" "+find +" for car  "+"'"+ carInfo.model+"'" + " is available")
    }else if(carInfo.driver !== find  ){
        console.log("driver"+" "+find +" for car  "+"'"+ carInfo.model+"'" + " is not available")
    }
}

function distance (){
    
}













carInfo['driver 2']="Tamara"; // adding new key (driver2) & value ("Tamara");
Object.assign(carInfo,{driver:"Slava"}); //add name to key (driver).

if (carInfo.driver){
    console.log(carInfo.driver," - driver name is available");
}

if ( "driver" in carInfo) {
    console.log(carInfo.driver, " - another way to find the value");
}

