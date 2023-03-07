import './App.css';
import Parent from './components/Parent';
import ParentHooks from './components/ParentHooks'
import Resize from './components/Resize';


function App() {
  return (
    <div className="App">
      <Parent/>
      <ParentHooks/>
      <Resize/>
    </div>
  );
}

export default App;
