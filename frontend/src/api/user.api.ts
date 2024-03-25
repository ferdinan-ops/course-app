import api from './axiosInstance'
import { UserType } from '@/lib/types/user.type'
import { ChangePasswordType, ChangeProfilePicType, EditUserType } from '@/lib/validations/user.validation'

export const updateMeFn = async (data: EditUserType): Promise<UserType> => {
  const response = await api.put('/users', data)
  return response.data?.data
}

export const changePasswordFn = async (data: ChangePasswordType) => {
  if (data.confirmPassword) {
    return await api.put('/users/change-password', data)
  }
}

export const updateEmailFn = async (email: string) => {
  return await api.put('/users/change-email', { email })
}

export const uploadProfilePicFn = async (data: ChangeProfilePicType): Promise<UserType> => {
  const formData = new FormData()
  if (Array.isArray(data.photo) && data.photo.length > 0) {
    formData.append('photo', data.photo[0])
  }

  const response = await api.put('/users/change-photo', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  return response.data?.data
}
