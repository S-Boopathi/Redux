import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { increment } from './Redux/Counters';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.counter.value)
  console.log(count +" " + "data");
  return (
    <div>
      <h2>{count}</h2>
       <button onClick={()=>dispatch(increment())}>ADD</button>
    </div>
  )
}

export default App