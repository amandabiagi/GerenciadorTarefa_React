export function Button(props){
    return(
        <button className="text-white p-2 rounded-md bg-slate-500"
                {...props}>
                      {props.children}      
        </button>
    );
}