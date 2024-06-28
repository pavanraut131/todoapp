import { createContext, useContext } from "react";


 export const Todocontext = createContext({
    todos:[{
             id:1,
             todo:"msg",
             completed: false
}], 
addtodo : (todo) =>{},
updatetodo : (id, todo)=>{},
deltetodo :(id)=> {},
toggletodo : (id)=>{}

})


 export const Todoprovider  = Todocontext.Provider;

 export const useTodo = ()=>{
    return useContext(Todocontext);
}