

//Carrossel com botao
import {InvestimentosLongo} from '../../componentes/Carrossel/Carrossel_conteudos/Investimentos/Carrossel_com_botao/InvestimentosLongo'

//Carrossel sem botao
import {InvestimentosCurto} from '../../componentes/Carrossel/Carrossel_conteudos/Investimentos/Carrossel_sem_botao/InvestimentosCurto'


export function Investimentos(){
    return(
      <>

        <InvestimentosLongo />
        <hr></hr>
        <InvestimentosCurto />
        <hr></hr>
      </>
    )
}