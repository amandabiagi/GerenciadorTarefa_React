import { Check, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Tasks({tasks, onTaskClick, onDeleteTaskClick}){
    const navigate = useNavigate();

    function onSeeDetailsClick(task){
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`details?${query.toString()}`);
    }

    return(        
        <ul className={`space-y-4 p-6 bg-slate-200 rounded-md shadow ${tasks.length === 0 && "hidden"}` }>
            {tasks.map((task) => 
                <li key={task.id} className="flex gap-2">                    
                    <button className={
                        `text-left w-full truncate overflow-hidden bg-slate-400 flex text-white p-2 rounded-md
                        ${task.isCompleted && "line-through"}`    
                    }
                        onClick={() => {onTaskClick(task.id)}}>
                       {task.isCompleted && <Check /> }
                       {task.title}
                    </button>
                   
                    <Button 
                        onClick={() =>{ onSeeDetailsClick(task);}
                    }>
                        <ChevronRightIcon/>
                    </Button>
                   
                    <Button  
                        onClick={() => { onDeleteTaskClick(task.id)}}>
                        <TrashIcon />
                    </Button>
                </li>
            )}
        </ul>
    );
}