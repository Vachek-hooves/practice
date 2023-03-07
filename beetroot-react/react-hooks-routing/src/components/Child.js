import React from "react";

class Child extends React.Component{
    handleClick(){
        // звернення до пропсів і створюється подія підьйому стану наверх. onNameChange-(on-приставка Name-назва того,що змінюється Change-закінчення.). Всередину передається значення яке потрібно змінити.Це може бути значення пропси (this.props.origin) або робота з event, тоді можна взяти event.target.innerHTML і його змінене передати. Або будь-яке інше значення.
        // this.props.onOriginChange(2) // - після цього подію потрібно опрацювати в Parent.js. І через = присвоюється метод який буде опрацьовувати подію onOriginChange. І той метод описується перед render.
        this.props.onOriginChange(this.props.origin+1) // тепер передається значення пропси (але само по собі воно не змінне) тому потрібно додати значення.
    }


    render (){
        return (<div>
                <div>Child components</div>
                {/*додається подія кліку щоб опрацьовувати значення при кліку на button. Робиться onClick в обгортці,щоб не додавати this до функції. */}
                <button onClick={()=>this.handleClick()}>
                    {/* origin-назва пропси в Child */}
                    Increase value {this.props.origin}
                </button>
            </div>
        )
    }

}
export default Child;