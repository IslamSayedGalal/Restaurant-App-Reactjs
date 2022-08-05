import React, { Fragment } from 'react';
import  Navbars  from './Components/Navbars/Navbars';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Navbars/>
        <Home />
      </Fragment>
    </div>
  );
}

export default App;
