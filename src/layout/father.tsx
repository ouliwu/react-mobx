import React,{useState,useRef, createContext} from 'react'
import {Child, childRef } from './child'
import Brotehr from './borther'

export const TextContext = createContext<{
  username: string,
  setUserName: (username: string) => void
}| null>(null)

export default function Father() {
  const [count, setCount] = useState(0)
  const childRef = useRef<childRef>(null)
  const [username, setUserName] = useState('张三')
  
  function getFocus() {
    childRef.current?.getFocus()
  }
  function add() {
    setCount(count + 1)
  }
  
  return (
    <TextContext.Provider value={{username, setUserName}}>
      <Child ref={childRef} count={0}/>  
      <Brotehr/>
      <button onClick={add}>+</button>
      <button onClick={getFocus}>获取焦点</button>
    </TextContext.Provider>
  )
}
