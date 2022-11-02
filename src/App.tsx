/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import axios from 'axios';

const getter = () => axios.get('/api/v1/hello').then(console.log);

function App(): JSX.Element {
  useEffect(() => {
    getter();
  }, []);
  return (
    <div className="App">
      Start with my own server
    </div>
  );
}

export default App;
