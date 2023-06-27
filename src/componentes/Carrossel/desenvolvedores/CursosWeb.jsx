import { CarrosselComBotao } from "../CarrosselComBotao"
import ImagemCurso from "../../../../public/cursosImagens/desenvolvimentoWeb.png"


export function CursosWeb(){
    return(
        <div >
            <CarrosselComBotao

                tituloCurso="Cursos Web"
                
                titulo="Curso Web"
                src={ImagemCurso}

                titulo2="Curso Web"
                src2={ImagemCurso}

                titulo3="Curso Web"
                src3={ImagemCurso}

                titulo4="Curso Web"
                src4={ImagemCurso}

                titulo5="Curso Web"
                src5={ImagemCurso}

                titulo6="Curso Web"
                src6={ImagemCurso}

                titulo7="Curso Web"
                src7={ImagemCurso}
            />

            
        </div>
    )
}