import { makeAutoObservable } from "mobx";
import { User } from "./index";

class UserStore {
    profile: User | null = null

    constructor() {
        makeAutoObservable(this)
    }
}


export const userStore = new UserStore()