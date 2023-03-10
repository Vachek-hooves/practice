// Ідея: Зробити під'єм стану. Коли з батька в дитину передається якесь значення, а потім в батькові це значення опряцьовувати відносно того що змінилося в дитині вказувати якийсь текст або інщі маніпуляціх. (така собі синхронізація).

// ParentHooks- функціональна компонента-це функція.

// Intro.
// фунцірнальні компоненти- це презентаційні компоненти, тобто (stateless component)
// Класовий компонент- повноцінний компонент з логікою (statefull component)
// Але в такому поділі була проблема. У ході доопрацювань або внесення змін в проєкт, в них доводилось додавати state. І починалася робота з state. Означає,що існуючу функціональну компоненту доводилося переносити на класову. Тому в React 16.8 ввели HOOKS. Hook- дозволили використовувати стани і всі інші можливості React, без використання класових компонентів. (по суті відмовились від классової компоненти) і весь функціонал який в ній дозволили робити у функціональній компоненті.

// Hooks-це вбудовані фунції в реакті які дозволяють у функціональній компонеті працювати зі State, із функціями життєвого циклу компоненти.
// Hooks - не працюють у класових компонентах. (Вся логіка яка була в class compoents відсутня в functional)

// У функціолнальній компоненті значення state побудоване на хуках.
// 1-й hook це хук стану (оголошення state).

// Є два хуки:

// useEffect (аналог componentDidUpdate) - його логіка ігнорується. React запускає логіку, будує DOM не чекаючи поки виконається useEffect.(При запиті на API, компонента "промальовується" не чекаючи завершеня запиту). Може використовуватись безліч разів.

// useLayoutEffect(componentDidMount) - Спочатку запускається все що всередині цього хука а потім будується DOM.( При запиті на API, компонента чекає поки запит відбудеться, данні отримаються а потім працює компонента). Використовується тільки один раз.

// Resize- тут буде приклад роботи з функціональною компонентою.

// UseMemo- ху який допомагая позбутися зайвих обчислень. І приймає в собі callback та масив залежностей(через кому перераховується всі залежності,зміну яких потрібно слухати). По простому то в масиві перераховується при зміні яких параметрів має виповнитися логіка в callback. Тобто не запискати функцію поки не зміниться параметр зазначений в масиві.

// ({a,title})- так замість такого варіанту (props) - Деструктуризація об'єкта (це взяти з об'єкту якесь значення і записати їх нове).

//  useContext- хук в функціональній компоненті який дозволяє пропускати проміжну компоненту( тобто перекидати пропсу далі).Приклад буде на ParentContext,IntermediateContext,ChildContext.
// {createContect}- метод який буде створювати контекст (записується в батька ParentContext).
// {useContext}- метод який дозволить використати цей контекст( запис в ChilsContext).

// .Provider- ????

// Хуки - не можна використовувати всередині циклів, if, swich case та циклів.
// Хуки можна виклткати всередині інших хуків(useEffect, useLayoutEffect)

// React дозволяє створювати свої хуки.
// useWindowSize - приклад створення універсального хука самостійно.(CloneResize буде використовуватись замість Resize, для того щоб не видаляти нічого з Resize).
// Пам'ятка!!!
// Хуки можна викликати тількі в функціональних компонентах.

///////////////////////////////////////////////////////////
// Router- встановлення- npm i react-router-dom
// Router- запуск- npm start
// react-router-dom- бібліотека яка дає можовість зробити client-side-routing. (маршрутизацію на стороні клієнта)- вона визначає за яким шляхом,який компонент показувати.
// 1-й шлях. Додавання в папку src всіх сторінок(home.js, about.js, contact.js) Зазвичай їх виносять в окрему папку (наприклад pages)
//Приклад - <a href="/about"><a/> - при посилані (слеш ебаут)на посилання відбувається перезавантаженя.

// Створення домашньої сторінки(Home.js), котра буде замість App.js

// Додатково є ще одна сторінка About.js
// Далі потрібно вмонтувати router. Зробити import деяких залежностей з react-router-dom, це - BrowserRouter
// BrowserRouter - для цієї залежності задають псевдонім при імпорті, просто пишеться 'as' і назва псевдоніма 'Router'.
// Routing- це процес коли прив'язується адреса ( котрі пишуться через слеш '/' ) до певної компоненти (джерела даних).
// Routers (залежність)-яка була замінена з switch.
// Routers- це залежність яка дозволяє маршрутам погрупувати і додати до них свої вкладеності.
// Route (залежність) - це певний маршрут "/".

// Всередині App.js модифікуємо вміст.
// Замість поверення версти, буде повернення <Router> (тобто повертаємо BrowserRouter), всередині нього лишається те що і було в App.js до модифікації, тільки без круглих дужок.
//  Routers (компонент)- який ставиться в місті де потрібна зміна контенту.
// Всередину Routers, додається прив'яка до кожного шляху (до кожного Route).
// <Route path='/' element={<Home/>}></Route>, <Home/>-назва компоненти.

// Приклад:
// В App.js - додати компоненту,при натискані на яку, контент відображався знизу, без перезавантаження сторінки.
// Ця компонента- Navigation.js
// Link (альтернатива <a><a/>) - підключення незалежності. Дає можливість сказати React, куди потрібно перейти, без перезавантаження сторінки.

// <Route path='/blog/:id' element={<Blogitem/>}></Route>
// '/blog/:id' - динамічний параметр, при переході на котрий буде відкриватися компонент <Blogitem/>.

// useParam- метод який повертає параметри з методу.