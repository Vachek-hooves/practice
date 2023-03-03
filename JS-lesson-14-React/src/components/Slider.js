// import { createElement } from 'react' // коли говориться про якийсь метод якогось об'єкта, тоді вказується в дужках. Якщо методів декілька, то вони пишуться через кому.

function Slider(){  // Синтаксис JSX
    return (
        <>
            <h1>Tile</h1>
            <section>
            <div>
                Text
            </div>
            </section>

        </>
    )
};


// function Slider(){
//     return createElement(
//         'div',
//         {clasName: ''},
//         createElement(
//             'h1',
//             {},
//             'Title'
//         ),
//         createElement(
//             'div',
//             {className: 'test test-1'},
//             'Text'
//         )
//     )
// }

export default Slider;