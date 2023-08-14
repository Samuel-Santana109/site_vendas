import './CarrosselSemBotao.scss';

export function CarrosselSemBotao(props){

    const items = [
        { titulo: props.titulo1,/*img*/src: props.src1,/*img*/alt: props.alt1, href: props.link1 },
        { titulo: props.titulo2,/*img*/src: props.src2,/*img*/alt: props.alt2, href: props.link2 },
        { titulo: props.titulo3,/*img*/src: props.src3,/*img*/alt: props.alt3, href: props.link3 },
        { titulo: props.titulo4,/*img*/src: props.src4,/*img*/alt: props.alt4, href: props.link4 },
        { titulo: props.titulo5,/*img*/src: props.src5,/*img*/alt: props.alt5, href: props.link5 },
        { titulo: props.titulo6,/*img*/src: props.src6,/*img*/alt: props.alt6, href: props.link6 }
      ];


    return(
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
        </> 
    )
}