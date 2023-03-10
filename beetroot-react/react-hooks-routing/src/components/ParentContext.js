import{createContext} from 'react';
// import ChildContext from './ChildContext';
import IntermediateContext from './IntermediateContext';
 
export const TextContext = createContext('without provider') // можна передати null, string або якийсь текст.

function ParentContext (){
// для того щоб перестрибнути компонет потрібно використати хук useContext.
// 1-ше метод який буде створювати контекст.
    return(
        <div>
            ParentContext
            {/* IntermediateContext- потрібно огорнуту в конструкцію. В const -TextContext */}
            <TextContext.Provider value="Parent text">
                <IntermediateContext/>
            </TextContext.Provider>
        </div>
    )

}
export default ParentContext