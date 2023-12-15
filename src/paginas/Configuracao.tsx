import React from 'react'
import Formulario from '../componentes/Formulario';
import ListaParticipantes from '../componentes/ListaParticipantes';
import Rodape from '../componentes/Rodape';
import Card from '../componentes/Card';

const Configuracao = () => {
  return (
    <Card>
      <section>
          <h2>Vamos começar!</h2>
          <Formulario />
          <ListaParticipantes />
          <Rodape />
      </section>
    </Card>
  )
}

export default Configuracao;