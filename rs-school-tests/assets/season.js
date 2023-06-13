let date=new Date(2019, 11, 22, 23, 45, 11, 500);
// let date=new Date(2018, 4, 17, 11, 27, 4, 321);
// let date=new Date(2017, 6, 11, 23, 45, 11, 500);
// let date=new Date(1994, 8, 26, 3, 0, 11, 500);
console.log(date.getMonth())

function getSeason(date){
    
    if (!date){
        console.log('Unable to determine the time of year!')
        return('Unable to determine the time of year!')
    }
    
    let checkDate=date.getMonth()
    console.log(checkDate)

    console.log(date.getMonth())

    if(date.getMonth()>=2 && date.getMonth()<=5){
        console.log("spring");
    }else if(date.getMonth()>=5 && date.getMonth()<8){
        console.log('summer');
    }else if(date.getMonth()>=8 && date.getMonth()<11){
        console.log('fall');
    }else{
        console.log('winter');
    }

}
getSeason(date)