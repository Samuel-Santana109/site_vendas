import React from "react";

//importaçao do react router dom
import { Route, BrowserRouter } from "react-router-dom";


//Importaçao de paginas 
import { Home } from "../pages/Home/Home";
import { PaginaDevs } from "../pages/PaginaDevs/PaginaDevs";
import { Internet } from "../pages/Internet/Internet";
import { Investimentos } from "../pages/Investimentos/Investimentos";
import { Linguas } from "../pages/Linguas/Linguas";
import { Login } from "../pages/Login/Login";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { PaginaDevs }  path="/PaginaDevs" />
           <Route component = { Internet }  path="/Internet" />
           <Route component = { Investimentos }  path="/Investimentos"  />
           <Route component = { Linguas }  path="/Linguas" />
           <Route component = { Login }  path="/Login" />
       </BrowserRouter>
   )
}

export default Routes;