import '../../style/sectionTextos.scss'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export function SectionFormulario(){

    return (
        <section className='SectionFormulario d-flex flex-wrap align-center justify-content-center'>   
            <Form className='Form m-3'>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite o seu email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Nome Completo ou Nome da Empresa</Form.Label>
                        <Form.Control type="text" placeholder="Digite aqui..." />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Tipo de Projeto</Form.Label>
                    <Form.Control placeholder="Exemplo: Site, Aplicativo, Planilha ou Chatbot" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Número para Contato</Form.Label>
                    <Form.Control placeholder="Numero de Celular ou Fixo" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control placeholder="Digite a cidade" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Estado</Form.Label>
                        <Form.Select defaultValue="Escolher...">
                            <option>Escolher...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>

            </Form>
        </section>
      );
}
