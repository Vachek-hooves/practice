import React from 'react';

const fruits = [
    {
        title:'Apple',
        value: 'apple'
    },
    {
        title:'Orange',
        value: 'orange'
    },
    {
        title:'Banana',
        value: 'banana'
    },
    {
        title:'Coconut',
        value: 'coconut'
    }
]
class Feedback extends React.Component{

    constructor(props){
        super(props)

        this.state={
            name:"",
            // створюється об'єкт для роботи з помилками. Він буде пустим і коли буде помилка туди буде додаватися нове значення. 
            comment:'', // поле для textarea
            fruit: 'banana',
            errors:{
                nameError:'', // для подальшої роботи (щоб в return знайти цю зміну)
                commentError:'', // поле данних для textarea.
            }
        }
    }

    handleSubmit(event){ // для опрацювання event submit для форми.
        event.preventDefault() // сксувати дефолтну дію брацзера, при натискані button, нічого не робити.
    }

    handleChange(event){ // данні не будуть відображатися без this.setState().
        console.log(event.target)

        this.setState({ // змінити state
            name: event.target.value // name котрий раніше був вказаний в this.state тепер буде дорівнювати значенню (value) target.
        })
        // console.log(this.state.name)
            // Перевірка і наповнити state.errors значенням відповідним до того що буде в валідації.
    //     if(this.state.name.length < 4 ){
    //         this.setState({
    //                errors:{
    //                 nameError: 'name too short' // буде виводитися у разі, якщо довжина буде менше 4. Тоді робиться else.
    //             }
    //         })
    //     }else {
    //         this.setState({
    //             errors:{
    //             nameError: '' //  Данні про довжину будуть перезаписуватися.
    //          } // Але так перевірка виглядає дуже довгою!!!! Можна спростити. Нижче написана спрощена перевірка.
    //      })
    //     }
    // }
            this.setState({
                errors:{
                nameError:  this.state.name.length < 4 ? 'name to short' : ''
            }
        })
    }

    handleCommentChange(event){
        this.setState({ 
            comment: event.target.value 
        })
    }

    handleFruitChange(event){ // функція для того щоб спиок змінював своє значення.
        this.setState({
            fruit:event.target.value
        })
    }

    render (){
        return (
            
            <form onSubmit={(event)=> this.handleSubmit(event)}> 
                {/* Додамо onChange для того щоб опрацьовувались зміни */}
                <input type="text" value={this.state.name} onChange={(event)=> this.handleChange(event)}/>

                {/* робиться додатковий span, який буде використовуватися для виведення помилки.  */}
                {this.state.errors.nameError.length > 0 && <span> {this.state.errors.nameError}</span>}

                {/* До вказаного вище span додамо textarea. Попередньо під нього в this.state прописати поле coments:''  та поле данних commentError:'',  для того щоб вносилися данні */}
                {/* Робота з textarea в React інша ніж HTML. в React вона спрощенна. Значення textarea міститься в аттрибуті value. Так як і для input додається метод onChange  */}
                <textarea value={this.state.comment} onChange={(event) => this.handleCommentChange(event)}/>

                {/* перевірка на commentError */}
                {this.state.errors.commentError.length > 0 && <span> {this.state.errors.commentError}</span>}

                {/* Варіант коли є select (коли потрібно щось вибрати). попередньо створюється масив fruits. В реакті option прописується так само як і в HTML. Selected- не додається як аттрибут, а задається як значення зї state, але state-статичне значення, і параметри не змінюються, тому додається подія onChange. */}
                <select value={this.state.fruit} onChange={(event)=> this.handleFruitChange(event)}>
                    {/* Для того щоб усі можливі option не писати винеи виводяться через масив */}
                    {/* fruits-масив з котрим буде робота. map()-викликає функцію один раз для кожного елемента в масиві. index- для масиву потрібен ключ(в продовжені index буде ріний key). В стандартний option додається key,(а key це index).Замість value буде fruit.value Як значення задається {fruits.title}, тому що це масив об'єктів.*/}
                    {fruits.map((fruits, index) => <option key={index} value={fruits.value}>{fruits.title}</option>)}
                </select>
                    
                <button type="submit">
                    Send
                </button>
            </form>
        )
    }
}

export default Feedback;