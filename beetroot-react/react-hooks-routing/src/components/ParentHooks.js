// function ParentHooks(){
//     return <div>ParentHooks</div>

// }
// export default ParentHooks

// Або інший запис

// export default ()=>{ // проблемно для дебагінгу
//     return <div>ParentHooks</div>
// }

// або такий модифікований запис

// const ParentHooks =()=>{
//     return <div>ParentHooks</div>
// }
// export default ParentHooks;

import {useEffect, useState} from 'react';

function ParentHooks(){

    // оголошення hooks
    // Перше значення, це змінна з якою буде робота.(вона наз-ся змінною стану)
    // Друге значення, це функція яка буде змінювати це значення.(це замінить виклик setState в якому передається об'єкт з новим значенням.В даному випадку замінить функцію changeOriginValue в Parent.js). Ця функція буде прив'язана до пеного значення і буде знати,що змінювати (сюди передається нове значення)

    // У виклику useState() - передається значення за замовченням. Так як originValue має "1", то і передається 1.
    const [originValue, setOriginValue]= useState(12);

    // Example 
    // const [fruit, setFruit]= useState('banana');

    // Тут в checkList передається масив об'єктів.
    const [checkList, setCheckList]= useState([
        {
            title:'Check 1',
            checked: false
        },
        {
            title: 'Check 2',
            checked: true
        }
    ])

    // в цьому випадку,якщо відбудиться зміна fruit або checkList, тоді спрацює виконання callback// в цьому випадку,якщо відбудиться зміна fruit або checkList, тоді спрацює виконання callback.
    // useEffect(()=>{ 
        
    //      },[fruit,checkList])

    //Синтаксис component did mount
    // тут передається без аргументів.Всередині описується все що має статися коли компонента була вмонтована.
    useEffect(()=>{ 
        // console.log('componentDidMount')
    },[])

    // Приклад коли логіка запускається якщо якийсь параметр було оновлена.Тоді робиться знову useEffect.

    useEffect(()=>{
        // console.log('componentDidUpdate')
    }, [originValue])// вписується змінна, яку потрібно відслідковувати. Як тільки вона змінюється виконується callback.

    // останній метод коли компонента була демонтована. (імітація componentWillUnmount), це видозмінити логіку coponentDidMount
    useEffect(()=>{// це всередині callback повернути callback.
        // console.log('componentDidMount')
        return ()=>{ // тут описується вся логіка коли компонент був демонтований
            // console.log('componentWillUnmount')
        }
    },[originValue])


    return (
        <div>
            <div>
                ParentHooks
            </div>
            {/* далі div буде виводити значення зі state тільки на хуках */}
            <div>
                {/* зверення до змінної- фігурні дужки і назва змінної */}
                Value is {originValue}
            </div>
            {/* а тут значення Value is буде змінюватись. Викликається фун-я setOriginValue і в ній передається нове значення змінної.*/}
            <button onClick={()=>setOriginValue(originValue+1)}>
                Increase value 
            </button>
        </div>
    )

}
export default ParentHooks