import { UserType } from '@/lib/types/user.type'
import { create } from 'zustand'

interface UserInfoStore {
  user: UserType
  setUser: (user: UserType) => void
}

export const useUserInfo = create<UserInfoStore>((set) => ({
  user: JSON.parse(localStorage.getItem('user-info') ?? '""'),
  setUser: (user) => {
    localStorage.setItem('user-info', JSON.stringify(user))
    set({ user })
  }
}))
