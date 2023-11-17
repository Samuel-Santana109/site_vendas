import '../../style/sectionTrabalho.scss'
import img from  '../../../public/imagens/logoTecnologico.png'
import {Col, Image} from 'react-bootstrap'

export function SectionQuemSomosNos(){
    return(
        <section className='SectionTrabalho d-flex align-items-center justify-content-center'>    

                <div className='divImagemTexto text-center'>
                    <h1 className="tituloPrincipal">Quem Somos Nós</h1>
                
                    {/*Tamanho 6 em telas pequenas (xs) e 4 em médias (md)*/}
                    <Col className="m-auto" xs={8} md={12}>
                        <Image src={img} className='imagem' />
                    </Col>
                </div>

                <div className='text-center p-4'>

                    <div>
                        <h1 className="tituloPrincipal">Somos uma Referência em Desenvolvimento de Software</h1>
                        <p className="textoPrincipal">A TechWorld é líder no setor de desenvolvimento de software, proporcionando soluções digitais de alta qualidade para empresas de todos os tamanhos. Nosso compromisso é oferecer serviços personalizados e inovadores, impulsionando o crescimento e o sucesso de nossos clientes no ambiente digital.</p>
                    </div>

                    <div className='divTitulos d-flex'>
                        <div>
                        <h3 className="tituloSecundario">Sites</h3>
                        <p className="textoPrincipal">Criamos e oferecemos serviços de manutenção em sites</p>
                        </div>
                        <div>
                        <h3 className="tituloSecundario">Aplicativos</h3>
                        <p className="textoPrincipal">Criamos e damos manutenção em aplicativos</p>
                        </div>
                        <div>
                        <h3 className="tituloSecundario">Chatbot</h3>
                        <p className="textoPrincipal">Criamos e oferecemos serviços de manutenção em automações de atendimento</p>
                        </div>
                        <div>
                        <h3 className="tituloSecundario">Planilhas</h3>
                        <p className="textoPrincipal">Criamos e oferecemos serviços de manutenção em planilhas</p>
                        </div>
                    </div>

                </div>


        </section>
    );
}
