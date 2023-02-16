// API for HW from https://www.omdbapi.com/
// http://www.omdbapi.com/?i=tt3896198&apikey=88af89ab

// const { default: axios } = require("axios");

// const { default: axios } = require("axios")




// const API='https://www.omdbapi.com/?i=tt3896198&apikey=88af89ab'
// const API1='https://api.themoviedb.org/3/movie/550?api_key=691dcac8237e8c909d5680894f452152'

document.addEventListener('DOMContentLoaded',()=>{

    let btn=document.getElementById('btn');
        textarea=document.getElementById('textarea');
    
        btn.addEventListener('click', ()=>{
            let filmname=textarea.value;
            let pagenumb; // &page=${pagenumb}
            const API=`https://www.omdbapi.com/?s=${filmname}&apikey=88af89ab`

            startFetch(API);
            
            function startFetch(API){
                fetch(API)
                .then(response=>{
                    return response.json()
                    
                })
                .then(res=>{
                    console.log(res)
                    
                })
            }
            

        });
        

})


/*працює, але пагінація не залежить від списку фільмів

function startFetch(API){
        fetch(API)
        .then(response=>{
            // console.log(response)
            return response.json();
            // console.log(response.json())
        })
        .then(resp=>{
            console.log(resp)
            console.log(resp.Search);
            let section=document.getElementById('test')
            let ul=document.getElementById('pagination')
            let li=document.createElement('li')
            let link=document.createElement('div')
            let pages=document.getElementById('pages')
            if(resp.Search){
                
                for(let i=0; i<resp.Search.length;i++){
                    let div=document.createElement('div');
                    let title=resp.Search[i].Title;
                    let Year=resp.Search[i].Year;
                    div.innerHTML= `<p>Title:${title}</p><p>Year:${Year}</p>`
                    div.classList.add('movie-style')
                    li.append(div)
                    ul.append(li)
                }

            let pagenum=(Math.ceil(resp.totalResults /10))
            for (i=1; i<=pagenum; i++){
                console.log("all in");
                let pagesDiv=document.createElement('div');
                pagesDiv.innerHTML=`<div>${i}</div>`
                pages.append(pagesDiv)
                pagesDiv.classList.add("page")
                }
            }
        })
    }

*/



/* AXIOS  */

// action в HTML означає звідки йде запит

window.addEventListener('DOMContentLoaded',()=>{

    let form = document.getElementById('search-form');

    if(form){
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            
            findFilms(undefined, form)
        })
    }
})

function findFilms(page =1, form){

    // console.log(form)
    // console.log(e);

    let titleField= form.querySelector('input[type=search]'); // поле input.
    // console.log(titleField)
    let typeField= form.querySelector('select[name=type]'); // тип input в котрому (movie,series,episode)
    // console.log(typeField)

    // відчіюетсья випадки коли input порожній.
    // if(titleField.value.length > 0){
    //     console.log("filled")
    // }else{
    //     console.log('field empty')
    // }
    if(titleField.value.length === 0){
        return
    }
    console.log('axios start sending');
    // console.log(typeField.value)
    // console.log(e.target.action)
    // console.log(e.target.method)
    axios({
        url: form.action, // form.getAttribute('action')
        method: form.method, // form.getAttribute('method')
        params:{
            s: titleField.value, // пошук за фільму title
            type: typeField.value, // обираєтсья тип фільму
            page: page,
        },
        responseType: 'json'
    })
    .then((res)=> { // якщо все добре, тоді результати будуть додаватись в цей блок.
        let resultBlock= document.getElementById('search-results')
        console.log(res.data)

        if(!resultBlock){
            return;
        }

        resultBlock.innerHTML='';
        if(res.data.Error){ // в разі помилки, то сповіщення прийде в HTML.
            resultBlock.innerHTML=res.data.Error
        } else if(res.data.Search && res.data.totalResults) {  
            for(let i=0; i< res.data.Search.length; i++){
                // console.log(res.data.Search)
                resultBlock.append(createFilmItem(res.data.Search[i]))
                
            }
            addListenerToDeteilsBtn(resultBlock); //в resultBlock додаються item і в межах resultBlock  пошук кнопки details.
            createPagin(res.data.totalResults);
            addListenerForPagin();
        }
        // console.log(res)
    }) 
    // .catch(()=> console.log('Error!')) 
}

function createFilmItem(item){

    let el=document.createElement('div'),
                            elTitle=document.createElement('h4'),
                            elYear=document.createElement('h4'),
                            elButton=document.createElement('span');

                        el.classList.add('film-item')
                        elTitle.classList.add('film-item__title')
                        elYear.classList.add('film-item__year')
                        elButton.classList.add('film-item__btn')

                        elTitle.innerHTML= "Title: " + item.Title
                        elYear.innerHTML="Year: " + item.Year ?? "-" // якщо року не буде, тоді буде прочерк.
                        elButton.innerHTML= 'Details';

                        el.append(elTitle)
                        el.append(elYear)
                        el.append(elButton)

                        // console.log(el)

                        return el
}

function createPagin(amount){
    let ul=document.getElementById('search-page');
    
    // if(!ul){
    //     return;
    // }
    ul.innerHTML='';

    // console.log(amount % 10)



    for (let i=0; i< amount/10; i++){
        // console.log(i);
        let el= document.createElement('li');

        el.innerHTML= i+1; // для того щоб пагінація починалась не з 0.

        ul.append(el)
    }
}

function addListenerForPagin(){
    let ulItems=document.querySelectorAll('#search-page li');
    form= document.getElementById('search-form')

    if(ulItems.length=== 0){
        return
    }
    // console.log(ulItems)

    ulItems.forEach(item=> {
        
        item.addEventListener('click',(e)=>{
            findFilms(e.target.innerHTML, form)
            // console.log(e.target.innerHTML)
        })
    })
}

function addListenerToDeteilsBtn(block){
    // має шукати всі кнопки details та додавати слухачі на клік.
    let detailsBtn= block.querySelectorAll('.film-item__btn');
    if (btn.length==0){
        return;
    }
    detailsBtn.forEach(btn=> 
        btn.addEventListener('click', showFielmDetails)
    )
}

function showFielmDetails(e){
    // функція,що буде отримувати детальну інформацію.
    console.log(e.target.closest('.film-item')) // вивести event
    // завданнґ: доробити виведення детальний опис.!!!!
}