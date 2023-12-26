//import React from 'react';
import { Header } from './componentes/Header/Header';
import Footer from './componentes/footer/Footer';
import { SectionPerfil } from './secoes/sectionPerfil/sectionPerfil';
import { SectionServicos} from './secoes/sectionServics/sectionServicos';
import { SectionFormulario } from './secoes/SectionFormulario/SectionFormulario';
import { SectionQuemSomosNos } from './secoes/SectionQuemSomosNos/SectionQuemSomosNos';
import { SectionParallax } from './secoes/sectionParallax/sectionParallax';
import './style/App.scss';

function App() { 
  return (
    <div className="App"> 
         <Header />
         <SectionPerfil />
         <SectionServicos />
         <SectionQuemSomosNos /> 
         <SectionParallax />  
         <SectionFormulario />  
         <Footer />    
    </div>
  )
}

export default App
