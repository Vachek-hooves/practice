import './App.css';
import Parent from './components/Parent';
import ParentHooks from './components/ParentHooks';
import Resize from './components/Resize';
import Square from './components/Square';


function App() {
  return (
    <div className="App">
      <Parent/>
      <ParentHooks/>
      <Resize/>
      {/* В square додамо дві пропси а-сторона квадрату. title-просто тайтл */}
      <Square a={4} title={'Square title'}/>
    </div>
  );
}

export default App;
