document.addEventListener('DOMContentLoaded', ()=>{

    let btn=document.getElementById('btn');
    let textarea=document.getElementById('textarea');
    

    btn.addEventListener('click', ()=>{

        let location=textarea.value;
        

        const API=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=63d689eb42ea5d0375664ab1719e9fae`


        geocode(API)

        function geocode(API){
            fetch(API)
            .then(response=>{
                return response.json()
            })
            .then(data=>{
                console.log(data)

                console.log('temperature data')
                for(let temp in data.main){
                    console.log(`${temp} : ${data.main[temp]}`)
                }
                console.log('wind data')

                for(let wind in data.wind){
                    console.log(`${wind} : ${data.wind[wind]}`)
                }

                for (let i=0; i<data.weather.length; i++){
                    console.log(data.weather[i])

                    let iconPic=data.weather[i].icon
                    let iconURL=`http://openweathermap.org/img/wn/${iconPic}@2x.png`
                    let icon=document.createElement('div');
                    icon.classList.add('weather-icon');
                    
                    let resultDiv=document.getElementById('result');
                    resultDiv.innerHTML=''; // перезапис даних

                    icon.innerHTML=`<div>
                                        <img src=${iconURL} alt="png">
                                    <div>`

                    resultDiv.append(icon)
                }


                // console.log()
                // let name=data.name
                // let main=data.main
                // let feel=data.main.feels_like
                // let humidity=data.main.humidity
                // let pressure=data.main.pressure
                // let temp=data.main.temp
                // let tempMax=data.main.temp_max
                // let tempMin=data.main.temp_min
                // console.log(name,feel,humidity,pressure,temp,tempMax,tempMin)

                // let API1=`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=5b1d100a7c113c31f1c1159098ab6deb`
                // weather(API1)
            })

            // function weather(API1){
            //     fetch(API1)
            //     .then(response=>{
            //         return response.json()
            //     })
            //     .then(data=> console.log(data))

                
            // }

        }
    })
})