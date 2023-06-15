import React, {useContext, useRef} from 'react';
import {observer} from 'mobx-react-lite';
import StoreProvider, {Store, Todo} from './store';

const TodoListView: React.FC = observer(function TodoListView() {
  const { todoStore } = useContext(Store)
  console.log("渲染了TodoListView")
  return (
    <div>
      <ul>
        {todoStore.todos.map((todo, index) => (
          <TodoView todo={todo} key={index} />
        ))}
      </ul>
    </div>
  )
})

const TodoListLeft: React.FC = observer(function TodoListLeft(){
  const { todoStore } = useContext(Store)
  return(
    <>
      left: {todoStore.unfinishedTodoCount}
    </>
  )
})


const TodoView: React.FC<{todo: Todo}> = observer(function TodoView({todo}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onChange={() => todo.toggle()}
      />
      {todo.title}
    </li>
  )
})

const LoginUser: React.FC = observer(function LoginUser() {
  const { userStore } = useContext(Store)
  const ref = useRef<HTMLInputElement>(null)

  return(
    <>  
      <p>{userStore.isLogin ? `当前登录的用户是： ${userStore.name}` :'当前没有用户登录'}</p>
      <p>
        <input ref={ref} type="text"/>
        <button onClick={() => userStore.login(ref.current!.value)}>登录</button>
        <button onClick={() => userStore.loginOut()}>退出</button>
      </p>
    </>
  )
})

const App = () => {
  return (
    <StoreProvider>
      <TodoListLeft />
      <TodoListView />
      <LoginUser />
    </StoreProvider>
  )
}

export default App