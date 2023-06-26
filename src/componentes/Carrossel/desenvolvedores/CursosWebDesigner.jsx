import { CarrosselProps } from "../CarrosselProps"

import Curso_web_designer from '../../../../public/cursosImagens/web_designer.png'

export function CursosWebDesigner(){
    return(
        <div>

            <h1>Cursos para desenovimento web designer</h1>
            
            <div>
                <CarrosselProps
                titulo1="Curso de desenvolvimento web designer"
                src1={Curso_web_designer}
                alt1="Imagem de curso de desenvolvimento web"

                titulo2="Curso de desenvolvimento web designer"
                src2={Curso_web_designer}
                alt2="Imagem de curso de desenvolvimento web"

                titulo3="Curso de desenvolvimento web designer"
                src3={Curso_web_designer}
                alt3="Imagem de curso de desenvolvimento web"

                titulo4="Curso de desenvolvimento web designer"
                src4={Curso_web_designer}
                alt4="Imagem de curso de web_designer"

                titulo5="Curso de desenvolvimento web designer"
                src5={Curso_web_designer}
                alt5="Imagem de curso de web_designer"

                titulo6="Curso de desenvolvimento web designer"
                src6={Curso_web_designer}
                alt6="Imagem de curso de web_designer"

                 />
            </div>
        </div>
    )
}