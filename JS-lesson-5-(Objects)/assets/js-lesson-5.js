let carInfo = {
    maker: "Mazda",
    model: "CX-5",
    year: 2018,
    "avarege speed": 100,
    "fuel tank (ltr's)": 56,
    "avarege consamprion (ltr's)": 9,
    driver: "",
}
console.log(carInfo);
carInfo['driver 2']="Tamara"; // adding new key (driver2) & value ("Tamara");
Object.assign(carInfo,{driver:"Slava"}); //add name to key (driver).

if (carInfo.driver){
    console.log(carInfo.driver," - driver name is available");
}

if ( "driver" in carInfo) {
    console.log(carInfo.driver, " - another way method find the value");
}

