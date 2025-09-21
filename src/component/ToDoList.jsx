import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, toggleTdodo } from "../redux/features/todolist/todoSlice";

const ToDoList = () => {
    const todolist =useSelector(state=>state.toDos);
    const [text, setText]=useState('');
    const disPatch =useDispatch();
    
    const handeltodo=()=>{
        if(text.trim()){
            disPatch(addTodo(text))
            setText('');
        }
    }
   
  return (
     <section className="mt-12">
        <h2 className="text-2xl font-bold text-orange-600">To Do App</h2>
        <div className="space-x-2 mt-3">
            <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="Add to list" value={text} className="border border-gray-500 py-2 px-3 rounded-2xl placeholder:text-orange-400" />
            <button onClick={handeltodo} className="py-2 px-4 bg-pink-400 text-white rounded-2xl cursor-pointer">Add</button>
        </div>
        <div className="mt-6">
            <ul className="space-y-4">
                {
                todolist.length> 0 ? (
                    todolist.map(todo=>(
                         <li key={todo.id} className="flex justify-center items-center gap-8">
                    <span onClick={()=>disPatch(toggleTdodo(todo.id))} className={`${todo.completed ? 'line-through' : ''}`}>{todo.title}</span>
                    <button onClick={()=>disPatch(removeTodo(todo.id))} className="bg-red-500 px-2 py-1.5 rounded-xl text-white cursor-pointer">Delete</button>
                </li>
                    ))
                ) 
                :
                (<p>No To do list</p>)
                }
               
            </ul>
        </div>
     </section>
  )
}

export default ToDoList