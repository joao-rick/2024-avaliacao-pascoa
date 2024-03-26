import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import "./App.css";

type Tarefa = {
  id: number;
  titulo: string;
  concluido: boolean;
};

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; title: string; completed: boolean }) => {
        return {
          id: item.id,
          titulo: item.title,
          concluido: item.completed,
        };
      });
      setTarefas(dados);
    });
  };
  
  return (
    <>
      <h4>Tarefas</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar lista de tarefas</button>
      </div>
      <ul>
        {tarefas.map((item: Tarefa) => (
          <ItemTarefa key={item.id} titulo={item.titulo} />
        ))}
      </ul>
    </>
  );
};

const ItemTarefa = (props: {titulo: string}) => {
  return (<li>{props.titulo}</li>);
};

const ListaDePublicacoes = () => {
  const [publicacoes, setPublicacoes] = useState([]);

  const carregarPublicacoes = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((resposta: AxiosResponse) => {
      setPublicacoes(resposta.data);
    });
  };

  return (
    <>
      <h4>Publicações</h4>
      <div>
        <button onClick={carregarPublicacoes}>Atualizar lista de publicações</button>
      </div>
      <ul>
        {publicacoes.map((publicacao: any) => (
          <li key={publicacao.id}>{publicacao.title}</li>
        ))}
      </ul>
    </>
  );
};

const ListaDeUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const carregarUsuarios = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resposta: AxiosResponse) => {
      setUsuarios(resposta.data);
    });
  };

  return (
    <>
      <h4>Usuários</h4>
      <div>
        <button onClick={carregarUsuarios}>Atualizar lista de usuários</button>
      </div>
      <ul>
        {usuarios.map((usuario: any) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </>
  );
};

const ListaDeAlbuns = () => {
  const [albuns, setAlbuns] = useState([]);

  const carregarAlbuns = () => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((resposta: AxiosResponse) => {
      setAlbuns(resposta.data);
    });
  };

  return (
    <>
      <h4>Álbuns</h4>
      <div>
        <button onClick={carregarAlbuns}>Atualizar lista de álbuns</button>
      </div>
      <ul>
        {albuns.map((album: any) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </>
  );
};

const App = () => {
  return (
    <div className="avaliacao">
      <h1>Infoweb - React</h1>
      <ListaDeTarefas />
      <ListaDePublicacoes />
      <ListaDeUsuarios />
      <ListaDeAlbuns />
    </div>
  );
};

export default App;
