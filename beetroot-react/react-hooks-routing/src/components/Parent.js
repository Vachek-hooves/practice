import React from 'react';
import Child from './Child'

class Parent extends React.Component{
     constructor(props){
        super(props)

        this.state={
            originValue:1
        }
     }

    changeOriginValue(e){ // в батькові (Parent) за допомогою цієї функції отримали значення з дитини (Child) за допомогою (e).
        console.log(e)
        // тепер є значення котре можна додати в originValue:
        this.setState({
            originValue:e
        })
    }

    render (){
        return (
            <div>
                {/* треба зробити так,щоб  елемен на клік в Child змінювався і синхронно з ним змінювалось Double value*/}
                <div>
                    Double value: {this.state.originValue * 2}
                </div>
                {/* На першому етапі, потрібно передати це значення як props у дитячу компоненту Child */}
                <Child 
                origin={this.state.originValue}
                onOriginChange={(e)=> this.changeOriginValue(e)}/>
            </div>
        ) 
    }

}
export default Parent;