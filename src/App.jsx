import React from 'react';
import './style/App.scss';

import { Routeamento } from './Routeamento';
import { BrowserRouter } from 'react-router-dom';

//https://casapark.com.br/?gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaW5vEK36J8BHg2sX2DbJ4NtKx3HCL3fu6xGMY2RbTu0WWQJI0NRD74aAs4YEALw_wcB

function App() { 
  return (
    <div className="App"> 
        <BrowserRouter>
          <Routeamento />
        </BrowserRouter>  
       
    </div>
  )
}

export default App
