import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante";

export default function Formulario() {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    adicionarNaLista(nome)

    setNome('');
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <input 
        type="text" 
        placeholder="Insira os nomes dos participantes" 
        ref={inputRef}
        value={nome}
        onChange={evento => setNome(evento.target.value)}
      />
      <button disabled={!nome}>Adicionar</button>
    </form>
  )
}
