import React, { Fragment , useEffect } from 'react';
import SearchBar from './Components/Layout/SearchBar';
import Logs from './Components/Logs/Logs';
import AddBtn from './Components/Layout/AddBtn';
import AddLogModal from './Components/Logs/AddLogModal';
import EditLogModal from './Components/Logs/EditLogModal';
import AddTechModal from './Components/Techs/AddTechModal';
import TechListModal from './Components/Techs/TechListModal';

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
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal/>
        <Logs/>
      </div>
    </Fragment>
  );
}

export default App;
