import React from 'react';
import './style/App.scss';
import Header from './componentes/Header/Header';

import { 
  Route,
  Routes 
  } from 'react-router-dom';

import { Home } from './pages/Home';
import { PaginaDevs } from './pages/desenvolvedores/PaginaDevs';
import { Investimentos } from './pages/Investimentos/Investimentos';
import Footer from './componentes/footer/Footer';

//https://casapark.com.br/?gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaW5vEK36J8BHg2sX2DbJ4NtKx3HCL3fu6xGMY2RbTu0WWQJI0NRD74aAs4YEALw_wcB

function App() { 
  return (

      <div className="App"> 
        <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/site_vendas" element={<PaginaDevs />} />
            <Route path="/Investimentos" element={<Investimentos />} />
          </Routes>
        <Footer/>
      </div>
   
  )
}

export default App
