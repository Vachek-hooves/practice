// в JS - можна встановлювати читати і видаляти cookies. ( мають помітку,що вони є сек'юрні і видалчяти їх не можна.)
// Звіеренення до cookie - document.cookie

// Cookies- основна ідея, збережнення як зі сторони користувача так і зі сторони сервера. Таким чином можливо обмінюватися данними із сервером. При виконані запиту, в результаті сервер ставорив запис і помістив туди інформацію а користувач може знайти, прочити і використати цей запис.

// cookies -HTTP cookies are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user's web browser. Cookies are placed on the device used to access a website, and more than one cookie may be placed on a user's device during a session.

// Name - назва cookies
// Value - значення
// Domain- домене ім'я сайту з якого відкрито вікно. Визначає звідки доступні cookies. Не існує способу зробити доступними для сайту другого рівня, наприклад iframe вбудований в сайт, і має інший domain , і задано, що тільки на певному domain такий запит джоступний, тоді на цьому іншому domain, cookies не будуть доступні.
// Path - шлях на кореневу папку(дерикторію). Якщо ( / ), означає, що сайт доступний для всіх. (/admin)- доступний тільки для всіх admin.
// Expires/Max-Age - час життя cookies(після якого браузер автоматично видалить cookies).
// Size - розмір Value.

// Як повернути cookies.
// в console.log ввести- document.cookie

// Прості функції ,що створюють, видаляють, зберігають cookie.

// Видалення cookies 
// function deleteCookie(name) {
//     setCookie(name, "", {
//       'max-age': -1
//     })
// }

function delCookie(name){
    setCookie(name, " ", 0) // 
}
// name- це назва cookie

// Встановлення cookie (на прикладі із днями).

function setCookie(name, value, days){ //  
    let expires=''; // сюди буде зберігатися час життя cookie
    if (days){  // якщо кількість днів буде вказано, тоді виконуєтсья if
        let date = new Date();
        // console.log(date) // повернеться поточна дата.
        // date.setTime() // метод, що встановлює час.
        // console.log(date.getTime()) // метод,що поверне мілісекунди (поточнгого часу "Date stamp").
        // підрахунок часу життя cookie. Від date.getTime() порахувати 2 дні.
        date.setTime(date.getTime()+(days*24*60*60*1000)) // date.setTime(date.getTime()-поточгий час + (кількіть днів * 24 -години * 60-хвилин * 60- секунд * 1000-мілісекунд))
        expires= '; expires =' + date.toUTCString(); // переведення дати в стрічку toUTCString()
        console.log(expires)
        
    // }else{ // коли days буде дорівнювати 0
        // expires= '; expires = Thu, 01 Jan 1900 00:00:01 GTM;'
    }else {
        expires = '; expires = Thu, 01 Jan 1900 00:00:01 GTM;' // при присвоєні пройдешньої дати , cookies автоматично видаляються.
    }
    document.cookie= name+"="+value+expires+"; path=/"
}


setCookie('test', '222', 1);
setCookie('test1', '123', 2);
setCookie('test2','321', 3)
setCookie('test3', '444', 2)
delCookie('test') // видалив cookie з name => test


// ОТримання cookie

function getCookie(name){
    let cookieValue=document.cookie.split(';'); // розділені по ';' тоді можна зробити split() і утвориться масив. Але в такому випадку перед ключем буде пробіл.

    console.log(cookieValue)

    for(let i=0; i<cookieValue.length; i++){
        // console.log(cookieValue[i].charAt(0)) // вивести перший символ
        // console.log(cookieValue[i])
        let cookieValueItem= cookieValue[i]
        // console.log(cookieValueItem.length)
        while(cookieValueItem.charAt(0)===' '){ // Якщо перший символ дорінює пробілу (порожній)- ' '.
            cookieValueItem= cookieValueItem.substring(1, cookieValueItem.length ) // або можна через slice(), а можливо cookieValueItem.length- не вказувати.
        }
        // console.log(cookieValue[i])
        // console.log(cookieValueItem)

        // далі потрібно повернути значення cookie.
        // варіант розбити.
        let splittedValue=cookieValueItem.split('=') // розбивається по знаку '=' (приберає цей знак) утворюючи підрядок.
        console.log(splittedValue)
        // console.log(typeof(splittedValue))
        console.log(splittedValue, name)

        if(splittedValue[0]===name){
            return splittedValue[1]
        
        }
    }
}
console.log(getCookie('test3'))
getCookie('test')
// getCookie('test2')


// ще одна особливість ,що куки будуть відправлятися із даннимию Коли треба залогінитися на ресурсі якомусь.

// Local Storage 
// Session Storage.
// обидва призанченні також для збереження даних тільки без часу життя.  
// Вони є більшими по об'єму до 2 mb.
// Вони не відпраляютсья з запитами (сервер не може ними маніпулювати)
// Простіше працювати з cookie/

/* 
Відмінність Local від Session - це область видимості, (Session)- можна зберегти в одній вкладці, коли відкривається сайт в іншій вкладці, то цих даних вже немає. 
Local storage- сховище прив'язене до оригінального сайту (domain , protocol). Тому можна переносити данні між вкладками. Мають вбудовані методи.
Local storage методи:
setItem- зберігає пару - ключ,значення.
getItem-отримання значення за ключем
removeItem- видалити данні за ключем.
clear- дропнути повністю все.
key- приймає індекс, щоб отримати ключ в заданій позиції
length- отримати кідькість збережених данних.
*/

console.log(localStorage)// звернення до local/

// localStorage.setItem()// приймає ключ згачення.

/* Local Storage та  Session storage - працюють як і cookie, тобто приймають тільки стрічки.
Якщо потрібно записати об'єкт або масив робиться json() або stringify() та додаються туди.
*/

localStorage.setItem('test1', '222');
console.log(localStorage.getItem('test'))

/*З Local Storage можна працювати як і з звичайним об'єктом*/

console.log(localStorage.test);

// видалити
// delete localStorage.test

// Видалення по ключу (key) чекрез removeItem.
// localStorage.removeItem('test') // test- ключ.


//Варіант як можна знайти key, якщо lOcal storage має декілька cookie.

for (let i=0; i<localStorage.length; i++){
    let key= localStorage.key(i);
    console.log(key, localStorage.getItem(key))
}

// Session storage - працює з такими свмими методами.

// Зверення

console.log(sessionStorage)