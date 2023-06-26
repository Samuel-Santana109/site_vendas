import React from "react";
import Style from "./header.module.css"

//Formulario
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//Imagens
import ImagemLogo from '../../../public/imagens/techWorld.png'

//Icones
import { RiSearchLine } from 'react-icons/ri';

function Header(){
    return(
        <header className={Style.header}>

            <div className={Style.subMenuUm}>

                <div className={Style.divImgInput}>
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/181/658/desktop-wallpaper-future-and-technology-blue-hologram-backgrounds-with-world-map-1835259-vector-art-at-vecteezy-tech-world-logo-thumbnail.jpg"
                    alt="Logo da casaPark"
                    className={Style.img} />
                    
                    <input
                    className={Style.input}
                    placeholder="O que voce esta procurando"
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    addonBefore={<RiSearchLine />}
                        />
               
                </div>

                <div className={Style.divEscritos}>
                    <h3>Sobre a empresa</h3>
                    <h3>Login</h3>
                    <h3>Inscreva-se</h3>
                </div>
            </div>

          
            <div className={Style.divLista}>
                <ul className={Style.menu}>
                    <li> Cusos para desenvolvedores</li>
                    <li> | Markenting Digitial</li>
                    <li> | Vendas </li>
                    <li> | Ingles</li>
                    <li> | Afiliados e Plr</li>
                    <li> | Dropshipp</li>
                    <li> | Produtos de tecnologia</li>
                </ul>
            </div>
        </header>
    )   
}

export default Header

//Pegando como base o header desse link

//https://www.alura.com.br/formacoes?gclid=CjwKCAiAuaKfBhBtEiwAht6H7-__ba__g4jP0ZLI_goMWA_N-QX1yOew_JS43BthSFnjpmcjew7XJBoC188QAvD_BwE