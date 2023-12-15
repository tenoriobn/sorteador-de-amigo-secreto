import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

const Rodape = () => {
  const participantes = useListaDeParticipantes();

  return (
    <footer>
      <button disabled={participantes.length < 3}>Iniciar brincadeira</button>
    </footer>
  )
}

export default Rodape;