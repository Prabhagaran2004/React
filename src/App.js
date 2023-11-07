import { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [location, setLocation] = useState('');
  const [fathername, setFatherName] = useState('');
  const [detail, setDetail] = useState([]);

  const onsubmit = (e) => {
    console.log(name,fathername,location);
    e.preventDefault();
    const newDetail = {
      name,location,fathername
    }
    console.log(newDetail);
    setDetail([...detail, newDetail]);
    console.log(detail);
  }

  const deleteDetail = (index) => {
    const update = detail.filter((_,i) => i !== index);
    setDetail(update);
  }
  
  return (
    <div className=''>
      <form className='flex flex-col gap-4'>
        <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter your name' required></input>
        <input type='text' onChange={(e) => setLocation(e.target.value)} placeholder='Enter your location' required></input>
        <input type='text' onChange={(e) => setFatherName(e.target.value)} placeholder='Enter your father name' required></input>
        <input type='submit' onClick={onsubmit} value={'Submit'} />
      </form>
      <div>
        {detail.map((info, index) => (
          <div key={index}>
              <h1>Detail</h1>
              <p>Name: {info.name}</p>
              <p>Location: {info.location}</p>
              <p>Father Name: {info.fathername}</p>
              <button onClick={() => deleteDetail(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;