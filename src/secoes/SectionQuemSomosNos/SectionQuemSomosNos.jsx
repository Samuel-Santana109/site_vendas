import '../../style/sectionTrabalho.scss'
import { Tituloh1, Tituloh3 } from '../../componentes/titulos/titulo';
import img from  '../../../public/imagens/logoTecnologico.png'
import {Col, Image} from 'react-bootstrap'

export function SectionQuemSomosNos(){
    return(
        <section  id='about' className='SectionTrabalho d-flex align-items-center justify-content-center'>  

            <div className='col-6 d-flex flex-column align-items-center justify-content-center'>
              
                <Tituloh1  valueUm="Tech World" />

                <div className='divImagemTexto text-center'>
                     {/*Tamanho 6 em telas pequenas (xs) e 4 em médias (md)*/}
                    <Col className="m-auto" xs={10} md={12}>
                        <Image src={img} className='imagem' fluid />
                    </Col>
                </div>
            </div>

            <div className='col-6 pe-4'>

                <div>
                    <div>
                        <Tituloh1 valueUm="Desenvolvedora de Software"/>
                    </div>

                    <div>
                        <p className="textoPrincipal">A TechWorld atua no setor de desenvolvimento de software, proporcionando soluções digitais de alta qualidade para empresas de todos os tamanhos. </p>
                    </div>
                </div>

                <div className='divTitulos d-flex'>
                    <div>
                    <Tituloh3 valueTres="Sites" />
                    <p className="textoPrincipal">Criação e Manutenção em sites</p>
                    </div>
                    <div>
                    <Tituloh3 valueTres="Aplicativos" />
                    <p className="textoPrincipal">Criação e manutenção em aplicativos</p>
                    </div>
                    <div>
                    <Tituloh3 valueTres="Chatbot" />
                    <p className="textoPrincipal">Criação e manutenção em automações de atendimento</p>
                    </div>
                    <div>
                    <Tituloh3 valueTres="Planilhas" />
                    <p className="textoPrincipal">Criação e manutenção em planilhas</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
