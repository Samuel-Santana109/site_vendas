import Style from './style_carrossel/CarrosselComBotao.module.css';
import { useRef } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export function CarrosselComBotao(props){

    const carrosselRef = useRef(null)

    function FunçaoLadoEsquerdo(){
        carrosselRef.current.scrollLeft -= carrosselRef.current.offsetWidth
    }

    function FunçaLadoDireito(){
        carrosselRef.current.scrollLeft += carrosselRef.current.offsetWidth
    }

    return(
        <div className={Style.divPai}>
            
                <h1 className={Style.tituloCurso}>{props.tituloCurso}</h1>

                <div className={Style.carousel_container} ref={carrosselRef}>

                    <div className={Style.carousel}>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo1}</h4>
                            <img src={props.src1} alt={props.alt1} className={Style.img} />
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo2}</h4>
                            <img src={props.src2} alt={props.alt2} className={Style.img} />
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo3}</h4>
                            <img src={props.src3} alt={props.alt3} className={Style.img}/>
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo4}</h4>
                            <img src={props.src4} alt={props.alt4} className={Style.img}  />
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo5}</h4>
                            <img src={props.src5} alt={props.alt5} className={Style.img} />
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo6}</h4>
                            <img src={props.src6} alt={props.alt6} className={Style.img} />
                        </div>

                    </div>    
                </div>

                <span className={Style.divBotoes}>
                     <button onClick={FunçaoLadoEsquerdo} className={Style.button}>
                        <BsChevronLeft className={Style.icones} />
                    </button>
                     <button onClick={FunçaLadoDireito} className={Style.button}> 
                       <BsChevronRight className={Style.icones} />
                     </button>
                </span>
           
        </div>
    )
}