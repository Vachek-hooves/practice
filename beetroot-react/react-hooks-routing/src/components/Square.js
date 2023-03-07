import {useMemo} from 'react';

function Square ({a,title}){ //- Деструктуризація об'єкта (це взяти з об'єкту якесь значення і записати їх нове). // для того щоб не писати весь час props. На місці props робиться об'єкт і туди перелічується назва всіх пропсів з котрими буде робота.
    // Завдання вивести заголовок пропси і обрахувати сторону квадрату.
    // const sqrt= props.a * props.a;

    // useMemo
    const sqrt= useMemo(()=>a * a, [a]);

    return(
        <div>
            <h3>
                {title}</h3>
            <div>
                Side: {a}
            </div>
            <div>
                Area: {sqrt}
            </div>
        </div>
    )

}
export default Square;