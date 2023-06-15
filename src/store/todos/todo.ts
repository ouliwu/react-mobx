import { makeAutoObservable  } from "mobx";

export class Todo {
  title = ''
  finished = false
  constructor(title: string) {
    this.title = title
    makeAutoObservable(this)

    this.title = title
  }
    
  toggle() {
    this.finished = !this.finished
  }

}