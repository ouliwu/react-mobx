import { makeAutoObservable } from "mobx";

class User {
  name: string
  get isLogin() {
    return this.name.length > 0
  }

  constructor(name: string) {
    makeAutoObservable(this)
    this.name = name
  }

  login(name: string) {
    this.name = name
  }
  loginOut() {
    this.name = ''
  }
}

const userStore = new User('')

export default userStore