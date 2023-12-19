import { useState } from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";
import './Sorteio.css'
import Card from "../componentes/Card";

const Sorteio = () => {
  const participantes = useListaDeParticipantes();
  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  }
  
  return (
    <Card>
      <section>
        <h2>Quem vai tirar o papelzinho?</h2>

        <form onSubmit={sortear}>
          <select 
            required
            name="participanteDaVez" 
            id="participanteDaVez" 
            placeholder="Selecione o seu nome" 
            value={participanteDaVez}
            onChange={evento => setParticipanteDaVez(evento.target.value)}
          >
            <option>Selecione o seu nome</option>
            {participantes.map(participante => <option key={participante}>{participante}</option>)}
          </select>

          <p>Clique em sortear para ver quem é seu amigo secreto!</p>

          <button className="botao-sortear">Sortear</button>
        </form>

        {amigoSecreto && <p className="resultado" role="alert">{amigoSecreto}</p>}

        <footer className="sorteio">
          <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
        </footer>
      </section>
    </Card>
  )
}

export default Sorteio;