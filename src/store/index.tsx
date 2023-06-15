import { createContext } from 'react';
import todoStore from './todos';
import userStore from './user';

export const Store = createContext({todoStore, userStore})

const StoreProvider:React.FC<{
  children: React.ReactNode[]
}> = (props) => {
  return (
    <Store.Provider value={{todoStore, userStore}}>
      {props.children}
    </Store.Provider>  
  )
}

export { Todo } from './todos/todo'
export default StoreProvider