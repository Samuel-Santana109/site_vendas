import Img from '../../../public/imagens/app.png'
import '../../style/sectionServicos.scss'

export function SectionServicos(){
    return(
        <section className='SectionServicos text-center  d-flex flex-wrap align-items-center justify-content-center'>    

            <div className="">
                <h1>Nossos  <br></br> Serviços</h1>
                <img src={Img} alt=".." className='imagem'/>
            </div>

            <div className="text-center">
                <div>
                    <h1>Sites</h1>
                    <p>Criamos e damos manutençao em sites</p>
                </div>

                <div>
                    <h1>Aplicativos</h1>
                    <p>Criamos e damos manutençao em Aplicativos</p>
                </div>

                <div>
                    <h1>Chatbot</h1>
                    <p>Criamos e damos manutençao em automaçoes de atendimento</p>
                </div>

                <div>
                    <h1>Planilhas</h1>
                    <p>Criamos e damos manutençao em planilhas</p>
                </div>
            </div>
        </section>
    );
}