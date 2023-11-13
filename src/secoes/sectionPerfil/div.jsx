import { Container, Row,Col } from 'react-bootstrap';
import './DivPerfil.scss'

export function DivPerfil(){
    return(
        <Container className='d-flex'>
                <Row className='m-1'>
                    <Col>
                        <div className="custom-border p-4 shadow">
                            {/* Ícone usando FontAwesome */}
                        
                            <i className="fas fa-star fa-3x d-block my-3"> icone</i>
                            <h1 className='tituloPrincipal'>Seu Título</h1>
                            <hr className="my-4" />
                            <p className='textoPrincipal'   >Seu parágrafo abaixo da borda.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="custom-border p-4 shadow">
                            {/* Ícone usando FontAwesome */}
                        
                            <i className="fas fa-star fa-3x d-block my-3"> icone</i>
                            <h1 className='tituloPrincipal'>Seu Título</h1>
                            <hr className="my-4" />
                            <p className='textoPrincipal'>Seu parágrafo abaixo da borda.</p>
                        </div>
                    </Col>
                </Row>
        </Container>
    );
}


