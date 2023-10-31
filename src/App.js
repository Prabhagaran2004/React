import img1 from './images/download.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        hello
      </div>
      <div classname="app">
        hello
        <img src={img1} alt="image" height='100'/>
      </div>
    </div>
  );
}

export default App;
