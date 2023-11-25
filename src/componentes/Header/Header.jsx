import { NavBar } from "../NavBar/NavBar";
import { Tituloh1, Paragrafo } from "../titulos/titulo";
import { Lista } from "../lista/lista";
import '../../style/header.scss';

export function Header(){
    return(
        <header className='header'>
              
            <div>
                <NavBar />
            </div>
               
            <div className="divh1">
               <Tituloh1 valueUm="Tech world" /> 
               <Paragrafo paragrafo="Innovation and Creativity" />
            </div>

            <div className="divLista">
                <Lista 
                itensUm="Aplicativos"
                itensDois="Sites"
                itensTres="ChatBot"
                itensQuatro="Planilhas"
                />
            </div>
            
        </header>
    );
}

