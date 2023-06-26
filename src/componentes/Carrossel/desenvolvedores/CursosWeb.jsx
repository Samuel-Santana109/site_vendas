import { CarrosselDois } from "../CarrosselDois"
import ImagemCurso from "../../../../public/cursosImagens/desenvolvimentoWeb.png"


export function CursosWeb(){
    return(
        <div >
            <CarrosselDois
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

            />

            
        </div>
    )
}