import { useState } from "react";
import ListaCorridas from "./ListaCorridas";
import CriarUsuario from "./CriarUsuario";

function App() {
  const [usuario, setUsuario] = useState(null);
  const [corridaSelecionada, setCorridaSelecionada] = useState(null);

  const selecionarCorrida = (corrida) => {
    setCorridaSelecionada(corrida);
  };

  let content;

  if (usuario) {
    content = (
      <div>
        <h2>Bem-vindo, {usuario.name}!</h2>
        <p>Você está inscrito na corrida: {corridaSelecionada.nameRace}</p>
      </div>
    );
  } else if (!corridaSelecionada) {
    content = <ListaCorridas onCorridaSelecionada={selecionarCorrida} />;
  } else {
    content = <CriarUsuario setUsuario={setUsuario} corrida={corridaSelecionada} />;
  }

  return (
    <div className="container">
      <h1>RunGo!</h1>
      {content}
    </div>
  );
}

export default App;
