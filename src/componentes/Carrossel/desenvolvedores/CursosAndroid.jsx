import React from 'react'
import { CarrosselTres } from '../CarrosselTres'

import cursoDeDesenvolvimentoAplicativosIos from "../../../../public/cursosImagens/cursoDeDesenvolvimentoAplicativosIos.png"


//Carrossel para desemvolvedores
export function CursosAndroid() {
 
      return(
        <div>
          <div>
            <h1>Cursos para desenovimento Ios</h1>
           
            <CarrosselTres  
                  titulo1="Curso do CursosAndroid"
                  src1={cursoDeDesenvolvimentoAplicativosIos}
                  alt1="imagem 1"

                  titulo2="Curso do gusavo guanabara"
                  src2={cursoDeDesenvolvimentoAplicativosIos}
                  alt2="imagem 2"

                  titulo3="Curso do CursosAndroid"
                  src3={cursoDeDesenvolvimentoAplicativosIos}
                  alt3="imagem 3"

                  titulo4="Curso do CursosAndroid"
                  src4={cursoDeDesenvolvimentoAplicativosIos}
                  alt4="imagem 4"

                  titulo5="Curso do CursosAndroid"
                  src5={cursoDeDesenvolvimentoAplicativosIos}
                  alt5="imagem 5"

                  titulo6="Curso do CursosAndroid"
                  src6={cursoDeDesenvolvimentoAplicativosIos}
                  alt6="imagem 6"
                  />
          </div>
  
       </div>
      )
  }