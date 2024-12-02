import { XIcon } from "lucide-react";

export function Modal(){

    let titleModal = 'Essa modal tem um titulo';
    let mensagem = "Gostaria de deletar essa tarefa??"
    return(  
         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className=" rounded-lg bg-white w-[500px]">
                <div className="flex justify-between text-slate-600">
                    <h2 className="text">{titleModal}</h2>
                    <div className="p-1">
                        <button><XIcon></XIcon></button>    
                    </div>
                </div> 
                <div className="flex justify-center items-center min-h-32">
                    <p>{mensagem}</p>
                </div>                       
                <div className="flex justify-center gap-10 py-5">
                    <button className="px-7 py-1 rounded-md text-slate-600 hover:inset-y-40">Não</button>
                    <button className="bg-red-400 px-7 py-1 rounded-md text-slate-200">Sim</button>
                </div>                       
            </div>  
         </div>     
    );
}