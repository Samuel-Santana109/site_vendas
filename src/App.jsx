import React from 'react';

import Header from './componentes/Header/Header'
import { PaginaDevs } from './pages/desenvolvedores/PaginaDevs';
import { Footer } from './componentes/footer/footer';



//https://casapark.com.br/?gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaW5vEK36J8BHg2sX2DbJ4NtKx3HCL3fu6xGMY2RbTu0WWQJI0NRD74aAs4YEALw_wcB

import './global.css'

function App() { 

  return (
    <div>
      <Header />
      <PaginaDevs />
      <Footer />
     
    </div>
  )
}

export default App
