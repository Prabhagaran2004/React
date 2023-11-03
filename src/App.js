import './App.css'
import {useState} from "react"
function App() {
  const [name, setName]= useState("");
  const [location, setLocation]= useState("");
  const [fathername, setFatherName]= useState("");

function onSubmit(){
  const n=document.getElementById('name').value;
  const l=document.getElementById('location').value;
  const f=document.getElementById('fathername').value;
  console.log(name);
}


  return (
    <div>
      <form>
        <input type='text' onChange={(e)=> (setName())}
         id="name" placeholder="Enter your name"/>
        <input type='text' onChange={(e)=> (setLocation())}
        id="location" placeholder="Enter your location"/>
        <input type='text' onChange={(e)=> (setFatherName())} 
        id="fathername" placeholder="Enter your fathername"/>
        <button className='text' onClick={onSubmit}>Submit</button>
      </form>
      <div>
        <p>
          {name}
        </p>
        <p>
          {location}
        </p>
        <p>
          {fathername}
        </p>
      </div>
    </div>
  );
}

export default App;
