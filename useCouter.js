import {useState} from 'react'

export const useCouter = (initialState= 10) => {
 const [counter, setCounter] = useState(initialState),
       increment=()=>setCounter(counter + 1),
       decrement=()=>setCounter(counter - 1),
       reset=_=>setCounter(initialState);

 return{
   counter,
   increment,
   decrement,
   reset
 }
}
