import { useState } from "react";
import axios from "axios";

export default function CriarUsuario({ setUsuario, corrida }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const registrar = (evento) => {
    evento.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, { username, email, password, name })
      .then((resposta) => {
        alert(resposta.data.message);
        setUsuario(resposta.data.user);
      })
      .catch((erro) => {
        console.error(erro);
        alert("Erro ao registrar usuário");
      });
  };

  return (
    <form onSubmit={registrar}>
      <h2>{corrida.nameRace}</h2>
      <p><b>Cadastre-se no site para se inscrever na maratona!</b></p>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" value={name} onChange={(evento) => setName(evento.target.value)} required />
      </div>
      <div>
        <label htmlFor="username">User :</label>
        <input type="text" id="username" value={username} onChange={(evento) => setUsername(evento.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(evento) => setEmail(evento.target.value)} required />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" value={password} onChange={(evento) => setPassword(evento.target.value)} required />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
}
