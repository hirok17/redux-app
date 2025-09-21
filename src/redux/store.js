import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter/counterSlice'
import likeDislikeReducer from '../redux/features/likeDislike/likeDislikeSlice'
import toDoReducer from '../redux/features/todolist/todoSlice'
import themeReducer from '../redux/features/themecolor/themeSlice'
 
const store =configureStore({
    reducer:{
        counter:counterReducer,
        likeDislike:likeDislikeReducer,
        toDos:toDoReducer,
        themeColor:themeReducer,
    }
})

export default store;