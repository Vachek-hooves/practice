import {useState, useEffect} from 'react';

function useWindowSize (){
    const [windowSize, setWindowSize]= useState ([0,0])

    // Далі логіка яка відповідає за компоненту коли компонента була вмонтована.(з Resize.js)
    useEffect(()=>{
        function updateWindowSize(){
            setWindowSize([window.innerWidth, window.innerHeight])
        }

        window.addEventListener('resize', updateWindowSize)

        updateWindowSize() // після того щоб коли компонента була вмонтована ці значення були відомі.

        return()=> window.removeEventListener('resize',updateWindowSize)
    },[])

    return windowSize;// повернення значення, щоб небуло помилки
}
export default useWindowSize;