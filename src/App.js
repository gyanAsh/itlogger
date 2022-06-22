import React, { Fragment , useEffect } from 'react';
import SearchBar from './Components/Layout/SearchBar';
import Logs from './Components/Logs/Logs';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    //Init Materialize js
    M.AutoInit();
  },[])
  return (
    <Fragment className="App">
      <SearchBar />
      <div className="container">
        <Logs/>
      </div>
    </Fragment>
  );
}

export default App;
