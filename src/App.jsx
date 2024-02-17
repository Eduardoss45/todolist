import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Marcar presença na reunião",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Praticar esportes",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Trabalho da faculdade",
      category: "Seminario",
      isCompleted: false,
    },
  ]);
  return <div>React</div>;
}

export default App;
