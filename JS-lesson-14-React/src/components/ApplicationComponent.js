import React from 'react';
import moment from 'moment';

class ApplicationComponent extends React.Component{
    constructor(props){
        super(props)

        // this.state={
        //     isDay: moment().isSame(this.props.date, 'minute') ? 'today' : moment().isBefore(this.props.date) ? 'past' : 'future',
        // }

        // Або варіант коли немає дати взагалі (undefined)
        this.state={
            isDay: this.props.date ? (moment().isSame(this.props.date, 'minute') ? 'today' : moment().isBefore(this.props.date) ? 'past' : 'future') : null 
            // тлумачення=> Якщо дата вказана (this.props.date) ? тоді дія виконується, : в іншому випадку (null)-нічого.
        }
        /*

        // console.log(moment().format('DD MM / YYYY')) 
        console.log(this.props.date) // дата встановлена в props ApplicationComponent
        console.log(moment().isBefore(this.props.date)) // - true, тому що потчна дата перед встиановленою датою в props.
        console.log(moment().isSame(this.props.date), moment(), this.props.date) // варінт коли дата збігається. (Але години, хвилини або секунди можуть бути різні)
        console.log(moment().isSame(this.props.date, 'minute'), moment(), this.props.date) // перевірка по хвилинах (чи однакові).

        // Тепер потрібно зробити перевірку ,чи дата збігається, якщо ні то більше чи менше.
        */
    }

    render(){
        // today
        // past
        // future
        // План:
        // 1-Присвоєння одне зі значень в змінну, для того щоб потім зробити тернарну перевірку. 
        // 2-Робота з if.
        // 1-й Для того щоб не писати велику перевірку (тернері в return), вона виноситься в змінну і як значення буде присвоюватися одне з 3-х. Потім значення перевіряється в тернарному, і відносно перевірки виводиться одне з 3-х повідомлень.

        // FIRST method
        // let isDay= null;
        // if (moment().isSame(this.props.date, 'minute')){ // якщо день сьогоднішній 
        //     isDay= 'today'
        // }else if(moment().isBefore(this.props.date)){ // Минула дата. якщо поточна йде пере якою передали. 
        //         isDay='past'
        // }else{
        //     isDay='future'
        // }
        // console.log(isDay)

        // // після можна написати тернер.
        // return(
        //     // <div>Date {moment().format ('DD MM / YYYY')}</div>
        //     <div>{isDay=== 'today' ?'Today' : isDay==='past' ? 'Past' : 'Future!' }</div>
        //     // якщо IsDay = 'today' тоді виводиться 'Today' :- (інший випадок) Якщо isDay= 'past' тоді виводиться Past а в іншому випадку виводиться 'Future'
        // )
        // }

        // SECOND method
        // Інший варінт, щоб не робити таких довгих перевірок як зверху.
        // const isDay= moment().isSame(this.props.date, 'minute') ? 'today' : moment().isBefore(this.props.date) ? 'past' : 'future';
        // return(
        //     <div>{isDay==='today' ? 'Today' : isDay==='past' ? 'Past' : 'Future'}</div>
        // )

        // THIRD method
        // інший метод - робота з this state/
        // в такому випадку це значення доступно і в вновому методі. Перенесемо в This.State
        // return(
        //         <div>{this.state.isDay==='today' ? 'Today' : this.state.isDay==='past' ? 'Past' : 'Future'}</div>
        // )

        // FOURTH method
        // 
        // if(this.state.isDay==='today'){
        //     return <div>Today</div>           // Можна повертати будь що, іншу компоненту, іншу змінну і т.і.
        // }else if(this.state.isDay==='past'){
        //     return <div>Past</div>
        // }else{
        //     return<div>Future</div>
        // }

        // FIFTH method
        // Коли відсутня дата (тобто повертає undefined)
        if(this.state.isDay==='today'){
            return <div>Today</div>           // Можна повертати будь що, іншу компоненту, іншу змінну і т.і.
        }else if(this.state.isDay==='past'){
            return <div>Past</div>
        }else if(this.state.isDay==='future'){
            return<div>Future</div>
        }else {
            return <div>Date is not defined</div>
        }

    }
}

export default ApplicationComponent;