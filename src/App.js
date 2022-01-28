import React, {useState, useEffect} from 'react';

import './App.css';
import Activity from './components/Activity';

function App() {
  const [activity, setActivity] = useState([]);
  const [loadingActivity, setLoadingActivity] = useState(false);
  const [participants, setParticipants] = useState(0);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    setLoadingActivity(true)
    const url =`http://www.boredapi.com/api/${participants === 0 ? `activity` : `activity?participants=${participants}`}`
    const response = await fetch(url)
    const data = await response.json()
    setActivity(data)
    setLoadingActivity(false)
  }


 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Activity</h1>
        <div className='selectBox'>
        <label className='partiSelect' htmlFor='participantSelect'>Choose between 1-5 and 8 or leave unchanged if you wanna get random activity</label>
        <div>
        <select id="participantSelect" onChange={(e) => {setParticipants(+e.target.value)}}>
          <option value="">Choose amount</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="8">8</option>
        </select>
        <button onClick={() => fetchdata()}>Get Activity</button>
        </div>
        </div>
        {!loadingActivity ? <Activity activity={activity} /> : <h3>Loading activity... Please wait!</h3>}
      </header>
    </div>
  );
}

export default App;
