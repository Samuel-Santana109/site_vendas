import { NavBar } from "../NavBar/NavBar";
import '../../style/header.scss';

export function Header(){
    return(
        <header className='header'>
              
            <div>
                <NavBar />
            </div>
               
            <div className="divh1">
                <h1 className="h1"> Tech world</h1>
                <p>Innovation and Creativity</p>
            </div>

            <div className="divLista">
                <ul className="Lista">
                    <li>Aplicativos</li>
                    <li>Sites</li>
                    <li>ChatBot</li>
                    <li>Planilhas</li>
                </ul>
            </div>
            
        </header>
    );
}

