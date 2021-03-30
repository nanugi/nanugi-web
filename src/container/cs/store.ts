import { makeAutoObservable } from 'mobx'

class CsStore {

  constructor() {
    makeAutoObservable(this)
  }

}

export const csStore = new CsStore()
