
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice';
import LikeDislike from './component/LikeDislike';
import ToDoList from './component/ToDoList';
import ThemeColor from './component/ThemeColor';

function App() {
  const count =useSelector(state=>state.counter.value);
   const dispatch = useDispatch()

  return (
    <div>
      <h1 className='text-3xl text-gray-800 font-bold'>React counter App</h1>
        <h3 className='text-pink-400'>{count}</h3>
      <div className='mt-5'>
          <button onClick={()=>dispatch(increment())} className='bg-amber-500 px-6 py-3 text-white font-bold rounded-2xl cursor-pointer'>increment</button>
        <button onClick={()=>dispatch(decrement())} className='bg-amber-500 px-6 py-3 text-white font-bold rounded-2xl cursor-pointer ml-2'>Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(5))} className='bg-amber-500 px-6 py-3 text-white font-bold rounded-2xl cursor-pointer ml-2'>Increment by 5</button>
      </div>
      <LikeDislike />
      <ToDoList />
      <ThemeColor />
    </div>
  )
}

export default App
