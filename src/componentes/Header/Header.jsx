import React from "react";
import Style from "./header.module.css"

//Formulario
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//Icones
import { RiSearchLine } from 'react-icons/ri';

function Header(){
    return(
        <header className={Style.header}>
            <img src="https://casapark.com.br/wp-content/themes/casapark-theme/assets/img/logo.svg" 
            alt="Logo da casaPark"
            className={Style.img} /> 

            <InputGroup className={Style.divBuscar}>
                   <Button >
                         Buscar
                    </Button>
                    <Form.Control 
                    className={Style.input}
                    placeholder="O que voce esta procurando" 
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    addonBefore={<RiSearchLine />}
                       />
            </InputGroup>

          

            <ul className={Style.menu}> 
                <li> Lojas e Alimentação</li>
                <li> | Notícias</li>
                <li> | Cinema </li>
                <li> | Agenda</li>
                <li> | Casapark</li>
                <li> | shopcasapark</li>
            </ul>
        </header>
    )   
}

export default Header