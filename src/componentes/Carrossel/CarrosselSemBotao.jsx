import Style from './style_carrossel/CarrosselSemBotao.module.css';

export function CarrosselSemBotao(props){


    return(
        <div>
             <h1>{props.tituloCurso}</h1>
    

                <div className={Style.carousel_container}>

                    <div className={Style.carousel}>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo1}</h4>
                            <img src={props.src1} alt={props.alt1} className={Style.img} />
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo2}</h4>
                            <img src={props.src2} alt={props.alt2} className={Style.img}/>
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo3}</h4>
                            <img src={props.src3} alt={props.alt3} className={Style.img}/>
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo4}</h4>
                            <img src={props.src4} alt={props.alt4} className={Style.img}/>
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo5}</h4>
                            <img src={props.src5} alt={props.alt5} className={Style.img}/>
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo6}</h4>
                            <img src={props.src6} alt={props.alt6} className={Style.img}/>
                        </div>

                    </div>    
                </div>
        </div>
    )
}