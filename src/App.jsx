import { useEffect, useState } from "react";
import { AddTask } from "./components/AddTasks";
import { Tasks } from "./components/Tasks";
import { v4 } from "uuid"
import { Title } from "./components/Title";

function App(){

  
  const [tasks, setTasks] = useState(
    //Pegando valores que estao armazenados no local storage
    JSON.parse(localStorage.getItem("tasks")) || []
  );
 
  //Essa função é executada todas as vezes que as propriedades que estão dentro do array sofrem alguma alteração
  useEffect(() => {
    //Adicionando valores no local storage toda vez que o parametro sofrer um alteração
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); 
 
  //Essa função é executada uma unica vez, que é quando o componente é chamado, isso por que o array está vazio
  useEffect(() => {

    //precisa criar uma função para deixar async
    async function fetchTasks(){
        const response = await fetch("http://jsonplaceholder.typicode.com/todos?_limit=10", {
        method:'GET'
    });  
    const data = await response.json();
    setTasks(data);
    }
    //Chama-lá no final.
    fetchTasks();
   
  }, []); 

  function onTaskClick(taskId){
    const newTasks = tasks.map((task) => {
      if(taskId === task.id){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task
    });
    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId){   
    const newTasks = tasks.filter((item) => taskId !== item.id);
    setTasks(newTasks);
  }
 
  function onAddTaskClick(title, description){    
    const newTask =    {
        id:v4(),
        title,
        description,
        isCompleted:false
      }
    setTasks([...tasks, newTask]);
  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
     <div className="w-[500px] space-y-4">
       <Title>
                        Gerenciador de tarefas
        </Title>
      {/* pasando propriedades ou funções pelos componentes */}
      {/* as funções devem ser declaradas e não chamadas, para não serem executadas como no exemplo onAddTaskClick() */}
      <AddTask 
        onAddTaskClick={onAddTaskClick}
      />
      <Tasks 
        tasks={tasks} 
        onTaskClick={onTaskClick}
        onDeleteTaskClick={onDeleteTaskClick}
        />
     </div>
    </div>
  )
}

export default App; 