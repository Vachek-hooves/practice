import useWindowSize from '../hooks/useWindowSize';

function CloneResize(){

    const windowSize=useWindowSize();



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
export default CloneResize;