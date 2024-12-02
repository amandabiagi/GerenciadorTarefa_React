import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Title } from "./Title";

 export function TaskDetails(){
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
    <div className="h-screen w-screen bg-slate-500 p-6">
        <div className="w-[500] space-y-4">

            <div className="flex justify-center relative mb-4">
               <button className="absolute left-0"
                       onClick={() => navigate(-1)}>
                  <ChevronLeftIcon className="text-slate-100" /> 
               </button>
                <Title>
                  Detalhes da Tarefa
                </Title>
            </div>
           
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
            <h1 className="text-xl text-slate-700 font-bold">
                {title}
            </h1>
            <p className="text-slate-600">
               {description} 
            </p>
        </div>
    </div>
    )
 }