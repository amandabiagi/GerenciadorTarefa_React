export function Input(props){
    return(
        <input className={`rounded-md px-4 py-2 border border-slate-300 outline-slate-400 ${props.className}`}
               type={props.type} 
               placeholder={props.placeholder}
               value={props.value} 
               onChange={props.onChange}
               />
    )
}