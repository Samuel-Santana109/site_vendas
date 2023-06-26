import Style from './carrosselProps.module.css';
import { useRef } from 'react';

export function CarrosselProps(props){

    const carrosselRef = useRef(null)

    function FunçaoLadoEsquerdo(){
        carrosselRef.current.scrollLeft -= carrosselRef.current.offsetWidth
    }

    function FunçaLadoDireito(){
        carrosselRef.current.scrollLeft += carrosselRef.current.offsetWidth
    }

    return(
        <div>
           
                <div className={Style.carousel_container} ref={carrosselRef}>

                    <div className={Style.carousel}>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo1}</h4>
                            <img src={props.src1} alt={props.alt1} />
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo2}</h4>
                            <img src={props.src2} alt={props.alt2} />
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo3}</h4>
                            <img src={props.src3} alt={props.alt3} />
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo4}</h4>
                            <img src={props.src4} alt={props.alt4} />
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo5}</h4>
                            <img src={props.src5} alt={props.alt5} />
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo6}</h4>
                            <img src={props.src6} alt={props.alt6} />
                        </div>

                    </div>    
                </div>

                <span className={Style.divBotoes}>
                     <button onClick={FunçaoLadoEsquerdo} className={Style.button}>Lado Esquerdo</button>
                     <button onClick={FunçaLadoDireito} className={Style.button}> Lado Direito</button>
                </span>
           
        </div>
    )
}