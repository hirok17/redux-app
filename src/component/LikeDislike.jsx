import { useDispatch, useSelector } from "react-redux"
import { decreaseLike, increaseLike, resets } from "../redux/features/likeDislike/likeDislikeSlice";

const LikeDislike = () => {
    const {likes, dislikes} =useSelector(state=>state.likeDislike);
 
    const dispatch =useDispatch();
  return (
   <section className="mt-12">
         <div className="w-[350px] mx-auto bg-gray-900 text-white space-y-5 p-3 rounded-2xl">
            <h1 className="text-2xl font-bold text-blue-600">Like Dislike App</h1>
            <div className="space-y-2">
                <p>Like: {likes}</p>
                <p className="text-red-500">DisLike: {dislikes}</p>
            </div>
            <div>
                <button onClick={()=>dispatch(increaseLike())} className="bg-orange-400 px-4 py-3 rounded-full cursor-pointer">Add to Like</button>
                <button onClick={()=>dispatch(decreaseLike())} className="bg-pink-400 px-4 py-3 rounded-full cursor-pointer ml-3">Add to DisLike</button>
              
            </div>
              <button onClick={()=>dispatch(resets())} className="bg-pink-400 px-4 py-3 rounded-xl cursor-pointer ml-3">Reset</button>
        </div>
   </section>
  )
}

export default LikeDislike