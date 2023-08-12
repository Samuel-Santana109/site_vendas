//import React from 'react';
import { BrowserRouter as Router,  Route, Routes,  } from 'react-router-dom';

import Header from "./componentes/Header/Header";
import { Home } from './pages/Home';
import { PaginaDevs } from './pages/desenvolvedores/PaginaDevs';
import { Investimentos } from './pages/Investimentos/Investimentos';
import Footer from './componentes/footer/Footer';

// Define um componente chamado 'Routeamento'
export function Routeamento() {
  return (
    // Um container div para envolver todo o conteúdo do componente
    <div>
      {/* Componente 'Router' que atua como o recipiente para as rotas */}
      <Router>
        <Header />
        {/* Componente 'Routes' para definir as rotas */}
        <Routes>
          {/* Define uma rota para o caminho raiz ('/') e renderiza o componente 'Home' */}
          <Route exact path="/site_vendas/Home" element={<Home />} />
          
          {/* Define uma rota para o caminho '/PaginaDevs' e renderiza o componente 'PaginaDevs' */}
          <Route path="/site_vendas/PaginaDevs" element={<PaginaDevs />} />
          
          {/* Define uma rota para o caminho '/contact' e renderiza o componente 'Investimentos' */}
          <Route path="/site_vendas/Investimentos" element={<Investimentos />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

//Tem que pegar pelo meu caminho do package.json







 


