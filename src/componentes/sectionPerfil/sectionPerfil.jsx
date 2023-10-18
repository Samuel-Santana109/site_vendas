import '../../style/sectionPerfil.scss'
import Button from 'react-bootstrap/Button';


import Img from '../../../public/imagens/app.png'

export function SectionPerfil(){
    return(
        <section className='section d-flex justify-content-center align-items-center m-auto'>

           
                <div className="m-5">
                    <img src={Img} alt="..." className='imagem' />
                </div>

                <div className="m-5 w-50">
                    <h1>Perfil da Empresa</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ea tenetur dignissimos corrupti quibusdam, nobis exercitationem fuga facere accusantium delectus obcaecati libero deserunt consequuntur quam aliquam minus enim fugiat aperiam?</p>
                    <Button variant="outline-light " className='button'>Clique aqui e va para o nosso whathsapp</Button>
                </div>
         
        </section>
    );
}


/*<div>
             <img src={Img} classNameName='' />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perspiciatis consequuntur fugiat reprehenderit voluptatum aut eaque necessitatibus labore eveniet architecto? Commodi ipsam pariatur repellendus labore, rerum minima quo. Assumenda, dicta?    </p>
            </div>*/