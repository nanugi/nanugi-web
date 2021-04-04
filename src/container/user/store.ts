import { makeAutoObservable } from 'mobx';
import { fetchProfile, logOut, User } from './index';

class UserStore {
  profile: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProfile() {
    try {
      const res = await fetchProfile();
      if (!res?.success) throw new Error('Fail to fetch Profile');
      this.profile = res?.data ?? null;
    } catch (e) {
      alert(e);
    }
  }

  logOut() {
    try {
      logOut();
      this.profile = null;
      return true;
    } catch (e) {
      alert(e);
      return false;
    }
  }
}

export const userStore = new UserStore();
