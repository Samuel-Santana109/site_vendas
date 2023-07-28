import './CarrosselComBotao.scss';

//import { useRef } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export function CarrosselComBotao(props) {
    //const carrosselRef = useRef(null);
  
    function FunçaoLadoEsquerdo() {
      carrosselRef.current.scrollLeft -= carrosselRef.current.offsetWidth;
    }
  
    function FunçaLadoDireito() {
      carrosselRef.current.scrollLeft += carrosselRef.current.offsetWidth;
    }
  
    const items = [
      { titulo: props.titulo1, src: props.src1, alt: props.alt1, href: props.link1 },
      { titulo: props.titulo2, src: props.src2, alt: props.alt2, href: props.link2 },
      { titulo: props.titulo3, src: props.src3, alt: props.alt3, href: props.link3 },
      { titulo: props.titulo4, src: props.src4, alt: props.alt4, href: props.link4 },
      { titulo: props.titulo5, src: props.src5, alt: props.alt5, href: props.link5 },
      { titulo: props.titulo6, src: props.src6, alt: props.alt6, href: props.link6 }
    ];
  
    return (
      <>
         <h1 className="tituloCurso">{props.tituloCurso}</h1>
        <div className="carousel_container">
          <div className='carousel'>

            {items.map((item, index) => (
              <div key={index} className="carousel_item">
                <h4>{item.titulo}</h4>
                <a href={item.link}>
                  <img src={item.src} alt={item.alt} className="img" />
                </a>
              </div>
            ))}

          </div>
        </div>
        
        <div className="divBotoes">
              <button className="button" onClick={FunçaoLadoEsquerdo}><BsChevronLeft /></button>
              <button className="button" onClick={FunçaLadoDireito}><BsChevronRight /></button>
          </div>
     </>
    );
  }
  