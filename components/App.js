import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';

const App = () => {
  const characters = {
    jess: 'https://media2.giphy.com/media/Jw04x38aIQqOs/giphy.gif',
    nick:
      'https://media1.tenor.com/images/78db32f1cb6fca9f89343a53a0ea7dde/tenor.gif?itemid=9572014',
    schmidt:
      'https://media1.tenor.com/images/fd09894b538eeb29b9f50bdf77dfe739/tenor.gif?itemid=5777113',
    cece: 'https://thumbs.gfycat.com/GrandioseShyImpala-size_restricted.gif',
    winston:
      'https://media1.popsugar-assets.com/files/thumbor/MUW4cBw92119kcy5IdPiiQiwClM/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/04/16/973/n/1922283/fd6053c833f31ead_Winston-Bishop-cat-New-Girl/i/bonded-fast-weird-ways.gif',
    aly:
      'https://64.media.tumblr.com/2e5358c3e284d72b8d5b568ee09bd54b/tumblr_onjyhc5ffX1qfx9mto2_500.gif',
    coach:
      'https://33.media.tumblr.com/d4a71d9915bd12f4566404f210984884/tumblr_nd3rigzRhs1rlpdfuo1_250.gif',
    tran:
      'https://38.media.tumblr.com/05ff84ac166bc4b77984f5b7c347e037/tumblr_mqo3v4Np6p1r9jqg5o3_250.gif',
    dave:
      'https://64.media.tumblr.com/703aa033a565cd679153e903dfafad76/tumblr_mus9ezTWOO1r9jqg5o8_250.gif',
    fat_schmidt:
      'https://64.media.tumblr.com/21c3fb57c98bd2d7bc8fbf9a7f1076e7/tumblr_mve68enbY41s7gykyo1_400.gif',
    college_nick:
      'https://64.media.tumblr.com/6c0eb492e9b592479021496ed7b2e1d2/tumblr_mxawcmQIwX1t5n2quo2_250.gif',
    ball_winston:
      'https://imgix.bustle.com/lovelace/uploads/361/bf4e06c0-bc9c-0133-8212-0ed2e059c4cf.gif',
  };

  const [value, setValue] = useState('');
  const [character, setCharacter] = useState(characters.jess);

  useEffect(() => {
    const interval = setInterval(() => setValue(`${new Date()}`), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  //changeCharacter()

  return (
    <div className="app">
      <h1>New Girl Clock</h1>
      <div>{value}</div>
      <img src={character} />
      <p>It's always time for New Girl</p>
    </div>
  );
};
export default App;
