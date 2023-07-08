import React from 'react'
import './PaginaDevs.scss'

//import { Textos } from './textos e imagens/textos'

//Carrossel com botao
import { CursosBancoDeDados } from '../../componentes/Carrossel/Carrossel_conteudos/desenvolvedores/Carrossel_com_botao/CursosBancoDeDados'
import { CursosFullStack } from '../../componentes/Carrossel/Carrossel_conteudos/desenvolvedores/Carrossel_com_botao/CursosFullStack'
import { CursosWebDesigner } from '../../componentes/Carrossel/Carrossel_conteudos/desenvolvedores/Carrossel_com_botao/CursosWebDesigner'

//Carrossel sem botao
import { CursosIos } from '../../componentes/Carrossel/Carrossel_conteudos/desenvolvedores/Carrossel_sem_botao/CursosIos'
import { CursosAndroid } from '../../componentes/Carrossel/Carrossel_conteudos/desenvolvedores/Carrossel_sem_botao/CursosAndroid'
import { FrontEnd } from '../../componentes/Carrossel/Carrossel_conteudos/desenvolvedores/Carrossel_sem_botao/CursosFrontEnd'
import { CursosBackEnd } from '../../componentes/Carrossel/Carrossel_conteudos/desenvolvedores/Carrossel_sem_botao/CursosBackEnd'

//Carrossel para desemvolvedores
export function PaginaDevs() {
 
      return(
        <div class="div">
          <div>
            <CursosIos />
          </div>
            <hr></hr>
          <div>
             <CursosAndroid />
          </div>
          <hr></hr>
          <div >
            <CursosFullStack />
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