// import { useState } from "react";
// import axios, { AxiosResponse } from "axios";
import "./App.css";

// type Tarefa = {
//   id: number,
//   titulo: string;
//   concluido: boolean;
// };

// const ListaDeTarefas = () => {
//   const [tarefas, setTarefas] = useState([]);
//   const escutarCliqueAcessarAPI = () => {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then((resposta: AxiosResponse) => {
//       const dados = resposta.data.map((item: { id: number; title: string; completed: boolean; }) => {
//         return {
//           id: item.id,
//           titulo: item.title,
//           concluido: item.completed,
//         };
//       });
//       setTarefas(dados);
//     });
//   };
  
//   return (
//     <>
//       <h4>Tarefas</h4>
//       <div>
//         <button onClick={escutarCliqueAcessarAPI}>Atualizar lista de tarefas</button>
//       </div>
//       <ul>
//         {
//           tarefas.map((item: Tarefa) => {
//             return <ItemTarefa key={item.id} titulo={item.titulo} />
//           })
//         }
//       </ul>
//     </>
//   );
// }

// const ItemTarefa = (props: {titulo: string}) => {
//   return (<li>{props.titulo}</li>);
// }

const App = () => {
  return (
    <div className="aplicacao">
      <h1>Infoweb - React</h1>

    </div>
  );
}

export default App;
