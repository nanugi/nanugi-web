import { makeAutoObservable } from 'mobx';
import { fetchProfile, logOut, User } from './index';

class UserStore {
  profile: User | null = null;

  constructor() {
    makeAutoObservable(this);
    this.init()
  }

  async fetchProfile() {
    try {
      const res = await fetchProfile();
      if (!res?.success) throw new Error('Fail to fetch Profile');
      this.profile = res?.data ?? null;
      this.saveProfile();
      return true;
    } catch (e) {
      return false;
    }
  }

  logOut() {
    try {
      logOut();
      this.profile = null;
      sessionStorage.removeItem('profile')
      return true;
    } catch (e) {
      alert(e);
      return false;
    }
  }

  saveProfile() {
    if (this.profile)
      sessionStorage.setItem('profile', JSON.stringify(this.profile))
  }

  init() {
    const savedProfile = sessionStorage.getItem('profile')
    if (savedProfile == null) this.profile = null
    else this.profile = JSON.parse(savedProfile)
  }
}

export const userStore = new UserStore();
