//import React from 'react';
import { Header } from './componentes/Header/Header';
import Footer from './componentes/footer/footer';
import { SectionPerfil } from './secoes/sectionPerfil/sectionPerfil';
import { SectionServicos } from './secoes/sectionServics/sectionServicos';
import { SectionTextos } from './secoes/sectionTexto/sectionTexto';
import { SectionTrabalho } from './secoes/sectionTrabalho/sectionTrabalho';

import './style/App.scss';



function App() { 
  return (
    <div className="App"> 
         <Header />
         <SectionPerfil />
         <SectionServicos />
         <SectionTextos />    
         <SectionTrabalho />     
         <Footer />    
    </div>
  )
}

export default App
