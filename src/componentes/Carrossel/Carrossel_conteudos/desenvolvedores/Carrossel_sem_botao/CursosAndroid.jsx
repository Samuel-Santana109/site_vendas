import { CarrosselSemBotao } from "../../../Carrossel_props_styles/CarrosselSemBotao";

import cursoDeDesenvolvimentoAplicativosIos from "../../../Imagens/cursosImagens/cursoDeDesenvolvimentoAplicativosIos.png"

//Nesse arquivo eu so passo os valores a estrutura em si esta no arquivo carrossel 3


//Carrossel para desemvolvedores
export function CursosAndroid() {
 
      return(
        <div>
            <CarrosselSemBotao  

                  tituloCurso="Curso android"

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
      )
  }