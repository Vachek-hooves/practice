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
                // console.log(data)
                let str='GenGenesisTech';
                console.log(str.slice(3,10),str.substr(3,10),str.substring(3,10))
                
                console.log('temperature data')
                for(let temp in data.main){
                    // console.log(`${temp} : ${data.main[temp]}`)
                    // console.log(`${data.main["temp"]}`) // only data view
                    // console.log(`${data.main["temp"]}`)
                }

                console.log('wind data')
                for(let wind in data.wind){
                    // console.log(`${wind} : ${data.wind[wind]}`)
                }

                for (let i=0; i<data.weather.length; i++){
                    // console.log(data.weather[i])

                    // let prognose= document.getElementById('prognose')

                    let iconPic=data.weather[i].icon
                    let iconURL=`http://openweathermap.org/img/wn/${iconPic}@2x.png`
                    // let icon=document.createElement('div');
                    // icon.classList.add('weather-icon');
                    li=document.createElement('li')
                    // li.classList.add('city-weather')
                    li.id='city-weather'
                    
                    let show=document.getElementById('show');
                    let result=document.getElementById(('result'))

                    // resultDiv.innerHTML=''; // перезапис даних
                    console.log(show)
                    

                    li.innerHTML= `<div>
                        <h3>${data.name}</h3>
                            <div class="details">
                            <p>temp: ${data.main["temp"]} C</p>
                            <p>wind speed: ${data.wind["speed"]} m/s</p>
                            <p>humidity: ${data.main["humidity"]} %</p>
                            </div>
                        <div>
                            <img class=image src=${iconURL} alt="clouds"></img>
                            <p>${data.weather[i].description}</p>
                        </div>
                    </div><br>`

                    show.append(li)
                    // let str;
                    // let i=0;
                    // console.log(str+i)
                    // show.append(icon)

                }
            })
        }
    })
})