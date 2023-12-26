import '../../style/sectionPerfil.scss';
import Button from 'react-bootstrap/Button';
import Img from '../../../public/imagens/creative.png'
import { Container, Row, Image,Col } from 'react-bootstrap';
import { DivPerfil } from '../sectionPerfil/div.jsx'

export function SectionPerfil(){
    return(
        <section className='SectionPerfil d-flex align-items-center justify-content-center' id='Home'>
            
            <div className='divImagem'>
                {/*Tamanho 6 em telas pequenas (xs) e 4 em médias (md)**/}
                <Col className="m-auto" xs={10} md={12}>
                    <Image src={Img} className='imagem' fluid />
                </Col>
            </div>
    
            <div>
            <Container>
            <Row>
                <Col>
                    <div className="custom-border text-center p-4">
                        
                        <h1 className='tituloPrincipal'>Tech World</h1>
                        <hr className="my-4" />
                        <p className='textoPrincipal'>Construímos soluções tecnológicas que impulsionam o seu negócio!</p>
                        <Button variant="outline-dark" className='button'>
                            Fale conosco
                        </Button>
                    </div>
                </Col>
            </Row>  
             <DivPerfil />
        </Container>

                 

              
            </div>
            </section>
    );
}


