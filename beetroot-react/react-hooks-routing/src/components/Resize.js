import {useEffect, useState} from "react";

function Resize (){

    // windowSize - змінна в котру записується розмір вікна.
    // useState його значення будуть масив в котрому висота і ширина будуть "0"
    const [windowSize, setWindowSize]= useState ([0,0]); // функція готова

    useEffect(()=>{

        function updateWindowSize(){
            setWindowSize([window.innerWidth, window.innerHeight])
        }

        window.addEventListener('resize', updateWindowSize)

        updateWindowSize() // після того як компонента була вмонтована ці значення були відомі.

        return()=> window.removeEventListener('resize',updateWindowSize)
    },[])

    return (
        <div>
            <div>
                Window width: {windowSize[0]}
            </div>
            <div>
                Window height: {windowSize[1]}
            </div>
            {/* на місті <p>Desktop</p> та <p>Mobile</p>, можуть бути буль-які хуки */}
            {windowSize[0]> 1024 ? <p>Desktop</p>:<p>Mobile</p>}
        </div>
        
    )

}
export default Resize;