import React from 'react'
import Style from './PaginaDevs.module.css'

//import { Textos } from './textos e imagens/textos'
import { CursosIos } from '../../componentes/Carrossel/desenvolvedores/CursosIos'
import { CursosWeb } from '../../componentes/Carrossel/desenvolvedores/CursosWeb'
import { CursosWebDesigner } from '../../componentes/Carrossel/desenvolvedores/CursosWebDesigner'
import { CursosAndroid } from '../../componentes/Carrossel/desenvolvedores/CursosAndroid'
import { FrontEnd } from '../../componentes/Carrossel/desenvolvedores/CursosFrontEnd'
import { CursosBancoDeDados } from '../../componentes/Carrossel/desenvolvedores/CursosBancoDeDados'
import { CursosBackEnd } from '../../componentes/Carrossel/desenvolvedores/CursosBackEnd'

//Carrossel para desemvolvedores
export function PaginaDevs() {
 
      return(
        <div className={Style.div}>
          <div>
            <CursosIos />
          </div>
            <hr></hr>
          <div>
             <CursosAndroid />
          </div>
          <hr></hr>
          <div >
            <CursosWeb />
          </div>
          <hr></hr>
          <div>
            <CursosWebDesigner />
          </div>
          <hr></hr>
          <div>
            <FrontEnd />
          </div>
          <hr></hr>
          <div>
            <CursosBackEnd /> 
          </div>
          <hr></hr>
          <div>
            <CursosBancoDeDados />
          </div>
       </div>
      )
  }