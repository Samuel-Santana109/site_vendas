//import React from 'react'

//Carrossel com botao
import {InvestimentosLongo} from '../../componentes/Carrossel/Carrossel_conteudos/Investimentos/Carrossel_com_botao/InvestimentosLongo'
import {InvestimentosMedio} from '../../componentes/Carrossel/Carrossel_conteudos/Investimentos/Carrossel_com_botao/InvestimentosMedio'


//Carrossel sem botao
import {InvestimentosCurto} from '../../componentes/Carrossel/Carrossel_conteudos/Investimentos/Carrossel_sem_botao/InvestimentosCurto'
import {Traders} from '../../componentes/Carrossel/Carrossel_conteudos/Investimentos/Carrossel_sem_botao/Traders'


export function Investimentos(){
    return(
      <div>
          <h1></h1>
          <InvestimentosLongo />
          <hr></hr>
          <InvestimentosCurto />
          <hr></hr>
          <InvestimentosMedio />
          <hr></hr>
          <Traders />
      </div>
    )
}