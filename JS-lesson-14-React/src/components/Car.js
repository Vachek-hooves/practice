import React from 'react';

export default class Car extends React.Component {
    constructor(props){
        super (props)
    }

    // Варіант створення масив об'єктів. (див App.js)
    // Через перевірку в Garage.js, вивести в циклі компонент Car передати їй name та speed. та вивести іх в return.
    // Для того щоб вивести щось в циклі, в React.js користуємося методом map(). (який зручно застосовувати до масиву)

    render() {
        return (
             <div>
                <h3>{this.props.index +1}. Car: {this.props.name}</h3>
                {/* <p>speed is: {this.props.speed} km/hr</p> */}
                <p>speed is: {this.props.speed} km/hr</p> {this.props.index} 
             </div>
        );
    }
}