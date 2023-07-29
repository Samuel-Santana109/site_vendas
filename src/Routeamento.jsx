import {  Route, Routes } from "react-router-dom";

import Header from "./componentes/Header/Header";
import { Home } from './pages/Home';
import { PaginaDevs } from './pages/desenvolvedores/PaginaDevs';
import { Investimentos } from './pages/Investimentos/Investimentos';
import Footer from './componentes/footer/Footer';


export function Routeamento() { 
    return (
      <div > 
      <Header />
     
          <Routes>
            <Route index element={<Home />} />
            <Route path="/paginaDevs" element={<PaginaDevs />} />
            <Route path="/investimentos" element={<Investimentos />} />
          </Routes>

      <Footer/>
    </div>
    )
  }


