import { Container, Row,Col } from 'react-bootstrap';
import './DivPerfil.scss'

export function DivPerfil(){
    return(
        <Container className='d-flex'>
               <Row className='m-1'>
    
               <Col>
            <div className="custom-border p-4 shadow">
                <h1 className='tituloPrincipal'>Quem Somos Nós</h1>
                <hr className="my-4" />
                <p className='textoPrincipal'>
                    A Tech World é uma equipe apaixonada por inovação e tecnologia. Nosso objetivo é impulsionar o sucesso do seu negócio, oferecendo soluções digitais personalizadas e de alta qualidade.
                </p>
                <p className='textoPrincipal'>
                    Combinamos criatividade, expertise técnica e dedicação para criar sites, aplicativos, chatbots e planilhas que atendam às necessidades específicas de cada cliente, agregando valor e promovendo a excelência em cada projeto.
                </p>
                <p className='textoPrincipal'>
                    Estamos comprometidos em fornecer serviços excepcionais, focados na satisfação do cliente e na busca constante pela inovação. Nossa missão é ser um parceiro confiável na jornada digital do seu negócio, contribuindo para o seu crescimento e sucesso.
                </p>
            </div>
        </Col>
           
            </Row>
        </Container>
    );
}


