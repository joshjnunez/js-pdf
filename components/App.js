import React, { useEffect, useState } from 'react';
import '../Style.css';

const { jsPDF } = require("jspdf");
const App = () => {
  // const [time, setTime] = useState('');
  // const [character, setCharacter] = useState(characters[0].gif);
  // const [alarmTime, setAlarmTime] = useState('');


  const createPDF = () => {

    if(document.getElementById("name").value == "" || document.getElementById("number").value == ""){
      alert("Please enter all fields");
    } else {

      const doc = new jsPDF();
      
      doc.text(document.getElementById("name").value, 10, 10);
      doc.text(document.getElementById("number").value, 25, 25);
      doc.save("output.pdf");

    }
  };



  return (
    <div>
      <input id="name"></input>
      <input id="number"></input>
      <button onClick={()=> createPDF()}>SUBMIT</button>
    </div>


  );
};
export default App;
