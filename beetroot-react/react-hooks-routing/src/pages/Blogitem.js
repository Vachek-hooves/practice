import {useParams} from 'react-router-dom';

function Blogitem(){

    const {id}= useParams(); // useParams поверне об'єкт, тому з цього об'єкту треба отримати об'єкт.

    console.log(id)

    return <div>Blog item id:{id} </div>
}
export default Blogitem