import React, { useEffect, useState } from 'react';
import '../Style.css';
const { characters } = require('../characters.js');

const App = () => {
  const [time, setTime] = useState('');
  const [character, setCharacter] = useState(characters[0].gif);
  const [alarmTime, setAlarmTime] = useState('');

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    // console.info(characters);
    let index = 1;
    const changeChars = setInterval(() => {
      if (index === 9) {
        setCharacter(characters[0].gif);
        index = 0;
      }
      setCharacter(characters[index++].gif);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(changeChars);
    };
  }, []);

  const setAlarm = () => {
    console.info('clicked');
  };

  const handleChange = (e) => {
    setAlarmTime(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="app">
      <h1>New Girl Clock</h1>
      <p>It's always time for New Girl</p>
      <div className="time">{time}</div>
      <img src={character} />
      <h3>Set ALARM:</h3>
      <input onChange={(e) => handleChange(e)} placeholder="00:00"></input>
      <button size="lg" onClick={() => setAlarm()}></button>

      {/* <div>{alarmTime}</div> */}
    </div>
  );
};
export default App;
