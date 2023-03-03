import React from 'react';

class NewsItemClass extends React.Component {

    // Правила побудови

    // Конструктор - робиться вся оснавна логіка (оголошення props, state.... )
    constructor(props){
        super(props)

        this.state={
            titleBig: this.props.title, // не завжди працює як треба.
            space:'1',
            isSpanClicked: false // зміна яка в подальшому буде відповідати за span і за її click.
            
        }
        // console.log(this.state.titleBig)
        // console.log(this.state.space) // переприсвоювати значення state не можна. this.state.sace= '2' - так не можна!!!!! Для того щоб змінити значення змінної зі state існує свій метод - setState.
    }

    // Проміжні методи (які будуть зміненні в ході роботи або які потім будуть викликатися в render)

    handleClick(){
        this.setState({
            space: '2'
                // якщо треба змінити декілька значень, тоді вони прописуються через кому. Всі решта значень залишаються незміними, такими як і були.
            })
        // console.log(this.state.space)  
    }

    spanClick(){
        this.setState({
            // isSpanClicked: this.state.isSpanClicked ? false : true // коли isSpanClicked true, потрібно поставити false. А в іншому випадку true.
            isSpanClicked: !this.state.isSpanClicked // набагато простіший варіант. !- ні те, ні це.
            
        })
        // console.log(this.state.isSpanClicked)
    }

    // Останій метод- це render з якоюсь версткою всередині.

    render(){ 
        return(
            <div>
                <h3 onClick={()=> this.handleClick()}>{this.props.title}{this.state.space}</h3> 
                <p>{this.props.text}</p> 
                <span onClick={()=> this.spanClick()}> Click on me to see changes ({this.state.isSpanClicked ? 'true' : 'false'}) </span>
                
            </div>
        )
    }
}

export default NewsItemClass;