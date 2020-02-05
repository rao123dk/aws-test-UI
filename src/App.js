import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
const URL = 'http://localhost:7777/getInfo'

function App() {
  const [userInfo, setUserInfo] = useState("DK");
  useEffect(() =>{
    axios.get(URL).then((res)=>{
      console.log(res.data)
      setUserInfo(res.data.name)
    })
  },[userInfo])

  return (
    <div className="App">
      <div>
        Hello {userInfo}
      </div>
    </div>
  );
}

export default App;
