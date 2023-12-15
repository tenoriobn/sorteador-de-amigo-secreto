import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro";
import './Formulario.css'

export default function Formulario() {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();
  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    adicionarNaLista(nome)

    setNome('');
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <div className="grupo-input-btn">
        <input 
          type="text" 
          placeholder="Insira os nomes dos participantes" 
          ref={inputRef}
          value={nome}
          onChange={evento => setNome(evento.target.value)}
        />
        <button disabled={!nome}>Adicionar</button>
      </div>

      {mensagemDeErro && <p className="alerta erro" role="alert">{mensagemDeErro}</p>}
    </form>
  )
}
