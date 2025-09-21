import { createSlice } from "@reduxjs/toolkit";

const initialState={
    likes:10,
    dislikes:0
}

const likeDislikeSlice =createSlice({
    name:'likeDislike',
    initialState,
    reducers:{
        increaseLike:(state)=>{
            state.likes +=1;
        },
        decreaseLike:(state)=>{
            state.dislikes +=1;
        },
        resets:(state)=>{
            state.likes=0;
            state.dislikes=0;
        }

    }
})

export const {increaseLike, decreaseLike, resets} =likeDislikeSlice.actions
export default likeDislikeSlice.reducer