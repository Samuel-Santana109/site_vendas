import React from "react";
import { CarrosselSemBotao } from "../../../Carrossel_props_styles/CarrosselSemBotao";
import chatboot from "../../../Imagens/cursosImagens/chatboot.png"


//Carrossel para desemvolvedores
export function MarkentingDigital() {
 
    return(
      <div>
          <CarrosselSemBotao  
                tituloCurso="Vendas"

                titulo1="Curso do Vendas"
                src1={chatboot}
                alt1="imagem 1"

                titulo2="Curso do Vendas"
                src2={chatboot}
                alt2="imagem 2"

                titulo3="Curso do Vendas"
                src3={chatboot}
                alt3="imagem 3"

                titulo4="Curso do Vendas"
                src4={chatboot}
                alt4="imagem 4"

                titulo5="Curso do Vendas"
                src5={chatboot}
                alt5="imagem 5"

                titulo6="Curso do Vendas"
                src6={chatboot}
                alt6="imagem 6"
                />

     </div>
    )
}