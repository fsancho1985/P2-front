import { useEffect, useState } from "react";
import axios from "axios";

export default function ListaCorridas({ onCorridaSelecionada }) {
  const [corridas, setCorridas] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/races`)
      .then((resposta) => {
        setCorridas(resposta.data);
      })
      .catch((erro) => {
        console.error(erro);
      });
  }, []);

  return (
    <div>
      <h3>Selecione o card da corrida que deseja se cadastrar</h3>
      <ul>
        {corridas.map((corrida) => (
          <li key={corrida._id} onClick={() => onCorridaSelecionada(corrida)}>
            <img src={corrida.imageUrl} alt={corrida.nameRace} class="race-image"/>
            <h3>{corrida.nameRace}</h3>
            <p>{new Date(corrida.date).toLocaleDateString()} - {corrida.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}