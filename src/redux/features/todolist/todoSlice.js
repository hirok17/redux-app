import { createSlice } from "@reduxjs/toolkit";

const todoSlice =createSlice({
    name:'todo', 
    initialState:[],
    reducers:{
        addTodo:(state, action)=>{
            state.push({
                id:Date.now(),
                title:action.payload,
                completed:false
            })
        },
        removeTodo:(state, action)=>{
            return state.filter(todo=>todo.id !== action.payload)
        },
        toggleTdodo:(state, action)=>{
            const todo =state.find(todo=>todo.id ===action.payload);
            if(todo){
                todo.completed=!todo.completed
            }
        }


    }
});

export const {addTodo, removeTodo, toggleTdodo} = todoSlice.actions
export default todoSlice.reducer;