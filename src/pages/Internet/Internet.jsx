import React from 'react'

//Carrossel com botao
import {Vendas} from '../../componentes/Carrossel/Carrossel_conteudos/Internet/Carrossel_com_botao/Vendas'

//Carrossel sem botao
import {MarkentingDigital} from '../../componentes/Carrossel/Carrossel_conteudos/Internet/Carrossel_sem_botao/MarkentingDigital'

export function Investimentos(){
    return(
      <div>
          <Vendas />
          <hr></hr>
          <MarkentingDigital />
      </div>
    )
}