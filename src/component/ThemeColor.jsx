import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toggoleDarkMode } from "../redux/features/themecolor/themeSlice";


const ThemeColor = () => {
  const darkMode =useSelector(state=>state.themeColor.darkMode);
  const dispatch =useDispatch();

  useEffect(()=>{
      if(darkMode){
        document.body.classList.add('dark')
      }else{
        document.body.classList.remove('dark')
      }
  }, [darkMode])
  return (
    <div className="mt-6 space-y-4">
        <h2 className="text-2xl font-bold text-blue-600">Theme color</h2>
        <p className="text-xl">Dark mode:{darkMode ? 'Enabled' : 'Disabled'} </p>
        <button onClick={()=>dispatch(toggoleDarkMode())} className="bg-blue-700 text-white px-3 py-1.5 rounded-xs cursor-pointer">Toogle Dark mode</button>
    </div>
  )
}

export default ThemeColor