import { CarrosselComBotao } from "../CarrosselComBotao"
import ImagemCurso from "../../../../public/cursosImagens/desenvolvimentoWeb.png"


export function CursosWeb(){
    return(
        <div >
            <CarrosselComBotao

                tituloCurso="Cursos Web"
                title="Curso Web"
                src={ImagemCurso}

                title2="Curso Web"
                src2={ImagemCurso}

                title3="Curso Web"
                src3={ImagemCurso}

                title4="Curso Web"
                src4={ImagemCurso}

                title5="Curso Web"
                src5={ImagemCurso}

                title6="Curso Web"
                src6={ImagemCurso}

                title7="Curso Web"
                src7={ImagemCurso}
            />

            
        </div>
    )
}