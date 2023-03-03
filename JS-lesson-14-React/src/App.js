// import './assets/css/App.css';
// import Slider from './components/Slider.js'
import './assets/css/scss/App.scss'

// import NewsItemFunc from './components/NewsItemFunc.js' // підключення функціональної компоненти.
import NewsItemClass from './components/NewsItemClass.js' // підклдючення классового компоненту.
import ApplicationComponent from './components/ApplicationComponent';
import moment from 'moment';
import Garage from './components/Garage';
import Counter from './components/Counter';
import Feedback from './components/Feedback';


// щоб не нагромаджувати HTML стилями, їх можна виносити у змінну. Приорітентність буде вища ніж через .css або .scss
// let stylingObject= {
//   header:{
//     color:'red',
//     backgroundColor:'pink',
//   },
//   p:{
//     color:'orange'
//   }
// }

// Масив об'єктів (робота з Car.js)
const cars =[ // умова пишеться перед функцією App.js
  {
    name:'Ford',
    speed:70
  },
  {
    name:'Audi',
    speed:150
  },
  {
    name:'Toyota',
    speed:120
  },
  
]

// function App() {
//   return (
//     <div className="App" style={{"color":"red"}}>
//       {/* <header className="App-header" style={stylingObject.header}> */}
//       <header className="App-header" >
//         <img className='App-logo' alt='logo'></img>
//         <p>Lorem ipsum
//         </p>
//         <a className='App-link'
//         href='htpps://reactjs.org'
//         target='_blank'
//         rel='noopener noreferrer'
//         >
//           Learn React
//         </a>
//       <Slider/>
//       <Slider/>
//       <div className="App-header">some text can be implemented here </div>
//       </header>
//     </div>
//   )
// }

function App() { // на прикладі Monticcelo в попередніх завданнях
    return (
      <div>
        {/* <NewsItemFunc title="SEE UNMATCHED BEAUTY OF THE GREAT" text="Free directories: derictories are perfect.."/> */}
        {/* <NewsItemFunc title="EFFECTIVE ADVERTISING POINTERS." text="Having a home based bussined is a wonderfull asset to you life..."/> */}
        {/* <NewsItemFunc title="HYPNOTIZE YOURSELF INTO THE GHOST" text="There are many things that are important..."/> */}
        {/* <NewsItemClass title="HYPNOTIZE YOURSELF INTO THE GHOST" text="There are many things that are important..."/> */}
        <NewsItemClass title="HYPNOTIZE YOURSELF INTO THE GHOST" text="There are many things that are important..."/>
        {/* <NewsItemClass/> */}
        {/* <ApplicationComponent date={moment().add(1, 'month')}/> */}
        <ApplicationComponent date={moment()} note='варіант коли день сьогодні'/> 
        <ApplicationComponent date={moment().add(1, 'days')} note='варіант коли день додається - в данному випадку минуле'/>
        <ApplicationComponent date={moment().subtract(1, 'days')} note='варіант коли день віднімається- в данному випадку майбутнє'/>
        <ApplicationComponent />
        
        
        {/* <Garage cars={['Ford', 'Audi','Toyota']}/> */}
        {/* <Garage cars={[]}/> */}

        <Garage cars={cars}/>
        <Garage cars={[]}/>

        <Counter/>

        <Feedback/>
      </div>

    )
  }

export default App;
