import { makeAutoObservable } from "mobx";

import { Todo } from "./todo";

class TodoList {
  todos: Todo[] = []
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }

  constructor(todos: Todo[]) {
    makeAutoObservable(this)
    this.todos = todos
  }

  add(todo: Todo) {
    this.todos.push(todo)
  }
}

const todoStore = new TodoList([])

export default todoStore