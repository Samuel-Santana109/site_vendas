import React from 'react'
import Style from './PaginaDevs.module.css'

import { CursosIos } from '../../Carrossel/desenvolvedores/CursosIos'
import { CursosWeb } from '../../Carrossel/desenvolvedores/CursosWeb'
import { CursosWebDesigner } from '../../Carrossel/desenvolvedores/CursosWebDesigner'
import { CursosAndroid } from '../../Carrossel/desenvolvedores/CursosAndroid'



//Carrossel para desemvolvedores
export function PaginaDevs(props) {
 
      return(
        <div className={Style.div}>
          <div >
              <CursosIos />
          </div>
            <hr></hr>
          <div>
              <CursosWebDesigner />
          </div>
          <hr></hr>
          <div >
              <CursosWeb />
          </div>
          <div>
              <CursosAndroid />
          </div>
       

       </div>
      )
  }