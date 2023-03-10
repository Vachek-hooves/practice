import '../App.css';
import Parent from '../components/Parent';
import ParentContext from '../components/ParentContext';
import ParentHooks from '../components/ParentHooks';
import Resize from '../components/Resize';
import Square from '../components/Square';
import CloneResize from '../components/CloneResize';



function App() {
  return (
    <div className="App">
      <Parent/>
      <ParentHooks/>
      <Resize/>
      {/* В square додамо дві пропси а-сторона квадрату. title-просто тайтл */}
      <Square a={4} title={'Square title'} text={'123456789'}/>
      <ParentContext/>
      <CloneResize/>
    </div>
  );
}

export default App;
