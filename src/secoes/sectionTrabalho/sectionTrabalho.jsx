import Img from '../../../public/imagens/app.png'
import '../../style/sectionTrabalho.scss'

export function SectionTrabalho(){
    return(
        <section className='SectionTrabalho d-flex flex-wrap align-items-center justify-content-evenly'>    

                <div>
                    <h1>Nossos  <br></br> Serviços</h1>
                    <img src={Img} alt=".." className='imagem'/>
                </div>

                <div>
                    <div>
                        <h1>Endereço</h1>
                        <p>xxxxxxxxxxxxxxxxxxxxxxx</p>
                    </div>
                    <div>
                        <h1>Telefone</h1>
                        <p>xxxxxxxxxxxxxxxxxxxxxxx</p>
                    </div>
                    <div>
                        <h1>E-mail</h1>
                        <p>xxxxxxxxxxxxxxxxxxxxxxx</p>
                    </div>
                </div>
        </section>
    );
}