/*
    入口js
*/
import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
import App from './App';

function tick(){
    const element = (
      <div>
        <h1>Hello World --a react</h1>
        <h2>It is{new Date().toLocaleTimeString()}.</h2>
      </div>  
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  setInterval(tick,1000);

ReactDOM.render(<App />,document.getElementById('root'));