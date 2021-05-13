import React from 'react';
import ReactDOM from 'react-dom';



function Greeting() {
  return <h4>This is first comit </h4>
}



ReactDOM.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>,
  document.getElementById('root')
);

