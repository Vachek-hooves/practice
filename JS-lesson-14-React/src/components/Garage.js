import React from 'react';
import Car from './Car.js';

class Garage extends React.Component{
    constructor(props){
        super(props)

        // this.state + {
        //     space:'1',
        //     // show: false, // Приклад: модальне вікно закрите (потім всередині componentDidMount(), має знову відкритися як тільки компонент буде вмонтований)
        // }

    }

    componentDidMount(){ // метод призначений для того щоб робити запити і отримування данних (з back-end), тоді вся логіку налаштовується в цьому методі. Цей метод відпрацює тоді коли буде вмонтована компонента.
        //Метод дозволяє змінювати стейт (присвоювати якісь значення)
        
        // console.log(1111)
        this.setState({
            // show:true, // Приклад: Відкрити модальне вікно.
        })

    }
    componentDidUpdate(prevProps){ // prevProps- значення для перевірки (За замовченням, коли нічого не оновилося, вони undefined)
        // console.log(prevProps, this.props)
        // поріняємо 2 масиви
        // console.log(JSON.stringify(prevProps.cars))
        // console.log(JSON.stringify(this.props.cars))
        if(JSON.stringify(prevProps.cars) !== JSON.stringify(this.props.cars)){
            
        }
    }

    // render(){// потрібно вивести повідомлення які є машини або нема їх
    //     if(this.props.cars.length){
    //         return (
    //             <div>
    //                 <h2>Garage</h2>
    //                 <div>You have {this.props.cars.length} cars</div>
    //             </div>
    //         )
    //     }else {
    //         return (
    //             <div>
    //                 <h2>Garage</h2>
    //                 <div>You don't have any cars</div>
    //             </div>
    //         )
    //     }
        
    // }

    //  АБО 

    render(){// потрібно вивести повідомлення які є машини або нема їх
        return (
            <div>
                <h2>Garage</h2>
                {this.props.cars.length > 0 && <div>You have {this.props.cars.length} cars</div>}
                    
                {/* {this.props.cars.map(car  => <Car name={car.name} speed={car.speed}/>)}  */}
                {this.props.cars.map((car, index)  => <Car key={index} name={car.name} speed={car.speed} index={index}/>)} 
            </div>
        )
        // В console.log видасть помилку, що кожен елемент мсиву має мати унікальне значення "key". Коли йде мова про метод map(), обов'язково все що виводиться через map() (верстка або компонент) має мати "key". Для того щоб пришвидшити оновлення данних у циклі,тому і використовується аттрибут "key". Вказується він для того щоб React при оновлені елементу в масиві, не оновлював всі елементи масиву (рендерив всі значення),  а для того щоб він точно знав що змінити. Коли змінюється якийсь елемент map(), шукає його по ключу і змінює тільки його, ключ має бути унікальним в межах цього map(). Це для того щоб реакт ідентифікував його. Ключем може бути все що буде валідним: індекс ( коли прохомося циклом), або текстовим значенням, може бути id при роботі з back-end або дата (time stamp). Приклад буде з index.
        // Ключ- спеціальний рядковий "аттрибут" або унікальне ім'я, який призначенний для точкового оновлення реактом елементів у списку.

        
    }
}
export default Garage;