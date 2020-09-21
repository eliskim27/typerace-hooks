import React from 'react';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [userText, setUserText] = useState('');

  const updateUserText = e => {
    setUserText(e.target.value)
    console.log('current userText', userText)
  }

  return (
    <div>
      <h2>Type Race</h2>
      <input value={userText} onChange={updateUserText}/>
    </div>
  )
}


export default App;
