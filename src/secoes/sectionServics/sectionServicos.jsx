import '../../style/sectionServicos.scss'

export function SectionServicos(){
    return(
        <section className='SectionServicos '>    

            <div className="divTitulo">
                <h1>Nossos Serviços</h1>
            
            </div>

            <div className="divLista">
                <div>
                    <h1>Sites</h1>
                    <p>Criamos e damos manutençao em sites</p>
                </div>

                <div>
                    <h1>Aplicativos</h1>
                    <p>Criamos e damos manutençao em Aplicativos</p>
                </div>

                <div>
                    <h1>Chatbot</h1>
                    <p>Criamos e damos manutençao em automaçoes de atendimento</p>
                </div>

                <div>
                    <h1>Planilhas</h1>
                    <p>Criamos e damos manutençao em planilhas</p>
                </div>
            </div>
        </section>
    );
}