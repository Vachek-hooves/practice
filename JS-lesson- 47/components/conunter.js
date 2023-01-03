import React from 'react';

class Counter extends React.Component{
    constructor (props){
        super(props);

        this.state ={
            value 0
        }
        
    }
    increase(){
        console.log(123)
    }
    render (){
        return(
            <div>
                <div>
                    Value is: {this.state.value}
                </div>
                <div> onClick={(this.increase)}Press here to increase</div>
            </div>
        )
    }
}
export default Counter;