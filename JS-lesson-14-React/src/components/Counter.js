import React from 'react'

// function increase (){ до цієї функції можна звертатися без this.
//     console.log('external function')
// }

class Counter extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            value:0,
            show:false
        }

        // Варіант 1-й коли потрібно без додаткової обгортки функції, виконати якусь логіку (робота з props, state), тоді додатково всі методи які є , прописуються і додається (this) в кінці.
        // this.increase= this.increase.bind(this) 
        // Або варінт 2-й в самому render.

        this.handlerPressClick= this.handlerPressClick.bind(this)
    };

    increase (){
        // alert(123)
        // console.log(123)
        this.setState({
            value: ++this.state.value
        })
    }

    // Якщо потрібно викликати декілька методів, тоді потрібно створити метод який в собі буде містити виклик всіх інших методів.
    // Приклад, якщо окрім increase() потрібно виконати ще дію showMessage(). (Попередньо додамо в this.state , show:false ) 
    showMessage(){
        this.setState({
            show: !this.state.show // Ця логіка буде викликатися на click. Знечення show буде протилежне коли метод буде викликаний.
        })
    }

        handlerPressClick(){ // основна функція, що викликається на click.
            this.increase()
            this.showMessage()
        }

        handlerPressClickTwo(event, type=null){ // варіант якщо потрібно вивести event та ще якісь параметри (наприклад type- тип)
            event.preventDefault();
            console.log(event, type)
        }

    render(){
        return(
            <div>
                <div>
                    Value is:{this.state.value}
                </div>
                {/* варіант 1-й, виклик методу без додаткової обгортки */}
                {/* <div onClick={this.increase}> Press here to increase</div>  */}

                {/* варіант 2-й, з додатковою обгорткою */}
                {/* <div onClick={()=> this.increase()}> Pres here to increase</div>  */}

                {/* Виклик декількох методів одночасно (на click), тоді додатково створюється метод (в цьому випадку handlerPressClick), який буде викликати інші два методи - (showMessage та increase) */}
                <div onClick={this.handlerPressClick}> Pres here to increase</div> 


                {/* Робота з event. Якщо потрібно передати не тільки event а ще й аргумент, тоді теж потрбно робити через огортання*/}
                <div onClick={(e) => this.handlerPressClickTwo(e, '123')}> Press to see event in console.log</div> 

                {/* div в котрому буде відображатися статус showMessage(). Тавк як true, false виводитися не може, тому створюється  тернарний вираз в котрому виводиться статус this.state.show */}
                <div>show is: {this.state.show ? 'true' : 'false'}</div>

                {/* простий варіант логіки. Inline function */}
                <button onClick={()=> console.log('123')}>Click on me</button>

            </div>
        )
    }

}

export default Counter;
