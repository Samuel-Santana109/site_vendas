import { NavBar } from "../navBar/navBar";
import Card from 'react-bootstrap/Card';
import Img from '../../../public/imagens/fundos/fundoTecnologico.jpg'
import '../../style/header.scss'


export function Header(){
    return(
        <header className="header">
            <NavBar />

            <Card className="text-white">
            <Card.Img src={Img} alt="Card image" />

            <Card.ImgOverlay>
                <Card.Title className="display-1"> Tech World</Card.Title>
                <Card.Text className="h-4">
                Nossa empresa desenvolve criaçao e manutenção de Sites,Aplicativos,Chatbots e Planilhas
                </Card.Text>
                <Card.Text className="h-4">Estamos sempre em busca de evoluçao</Card.Text>
                <Card.Text className="cantoInferior">Entre em contato para mais informaçoes</Card.Text>
            </Card.ImgOverlay>
            
            </Card>
 
        </header>
    );
}