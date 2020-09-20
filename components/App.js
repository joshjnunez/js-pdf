import React, { useEffect, useState } from 'react';
const { characters } = require('../characters.js');

const App = () => {
  const [time, setTime] = useState('');
  const [character, setCharacter] = useState(characters.nick);

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );

    // Object.keys, find next item 

    // let char;
    // for (let key in characters) {
    //   char = characters[key];
    // }
    const changeChars = setInterval(() => {
      setCharacter(char);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(changeChars);
    };
  }, []);

  return (
    <div className="app">
      <h1>New Girl Clock</h1>
      <div>{time}</div>
      <img src={character} />
      <p>It's always time for New Girl</p>
    </div>
  );
};
export default App;
