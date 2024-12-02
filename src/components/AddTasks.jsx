import { useState } from "react";
import { Input } from "./Input";

export function AddTask({onAddTaskClick}) {
   const [title, setTitle] = useState(""); 
   const [description, setDescription] = useState(""); 
   const [isValid, setIsValid] = useState(true); 

   function validated(){
        if(title && description){
            setIsValid(true);
            onAddTaskClick(title, description);
            setTitle("");
            setDescription(""); 
        }else{
            setIsValid(false);
        }              
   }
   
  return (
    <div className="space-y-2 p-6 bg-slate-200 rounded-md shadow flex flex-col ">
       <Input type="text" placeholder="Digite o título da tarefa"
              value={title} 
              onChange={(event) => setTitle(event.target.value)}
              
               />

       <Input type="text" placeholder="Digite a descrição da tarefa"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              />

        <p className={`text-red-500 ${isValid && "invisible"}`}> Precisa preencher todos os campos</p>      

        <button className="bg-slate-500 text-white font-medium px-4 py-2 rounded-md hover:bg-slate-600"
                onClick={() => {
                    validated()
                    }}>                    
            Adicionar
        </button>      
    </div>
  );
}
