import React from 'react'
import { CarrosselProps } from '../../componentesBases/CarrosselProps/CarrosselProps';


import Style from './CursosIos.module.css'

import cursoDeDesenvolvimentoAplicativosIos from "../../../public/cursosImagens/cursoDeDesenvolvimentoAplicativosIos.png"
import cursoDeIngles from "../../../public/cursosImagens/cursoDeIngles.png"
import desenvolvedorDeAplicativosAndroid from "../../../public/cursosImagens/desenvolvedorDeAplicativosAndroid.png"
import desenvolvimentoWeb from "../../../public/cursosImagens/desenvolvimentoWeb.png"
import web_designer from "../../../public/cursosImagens/web_designer.png"

//Carrossel para desemvolvedores
export function cursosIos(props) {
 
      return(
        <div>
          <div class={Style.carousel_container}>
            <h1>Cursos para desenovimento Ios</h1>
           
            <div class={Style.carousel}>
              <CarrosselProps  
                  class={Style.carousel_item}
                  titulo="Curso do gustavo guanabara"
                  src={cursoDeDesenvolvimentoAplicativosIos} alt="imagem 1"
              />

              <CarrosselProps  
                  class={Style.carousel_item}
                  titulo="Curso fulano"
                  src={cursoDeDesenvolvimentoAplicativosIos} alt="imagem 1"
              />

               <CarrosselProps  
                  class={Style.carousel_item}
                  titulo="Curso beltrano"
                  src={cursoDeDesenvolvimentoAplicativosIos} alt="imagem 1"
              />

               <CarrosselProps  
                  class={Style.carousel_item}
                  titulo="Curso etc"
                  src={cursoDeDesenvolvimentoAplicativosIos} alt="imagem 1"
              />

               <CarrosselProps  
                  class={Style.carousel_item}
                  titulo="Curso etc"
                  src={cursoDeDesenvolvimentoAplicativosIos} alt="imagem 1"
              />

               <CarrosselProps  
                  class={Style.carousel_item}
                  titulo="Curso etc"
                  src={cursoDeDesenvolvimentoAplicativosIos} alt="imagem 1"
              />

               <CarrosselProps  
                  class={Style.carousel_item}
                  titulo="Curso etc"
                  src={cursoDeDesenvolvimentoAplicativosIos} alt="imagem 1"
              />
              </div>
          </div>

        
       
       </div>
      )
  }