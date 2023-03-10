import {useContext} from 'react';
import {TextContext} from './ParentContext'


function ChildContext(){ // для того,щоб отримати useContext з import, потрібно.
        const context= useContext(TextContext) // тут хочемо отримати контекст (вміст) змінної  TextContext.

    return (
        <div>
            Child text: {context}
        </div>
    )
}
export default ChildContext