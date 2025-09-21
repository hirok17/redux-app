import { createSlice } from "@reduxjs/toolkit";

 const initialState= {
    darkMode: false
  };
const themeSlice =createSlice({
    name:'themeColor',
    initialState,
    reducers:{
        toggoleDarkMode:state=>{
            state.darkMode=!state.darkMode
        }
    }

})

export const {toggoleDarkMode} =themeSlice.actions;
export default themeSlice.reducer;
