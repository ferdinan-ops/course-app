import { CreateVideoType } from '@/lib/validations/video.validation'
import api from './axiosInstance'
import { VideoType } from '@/lib/types/video.type'

export const createVideoFn = async (fields: CreateVideoType) => {
  return await api.post('/video', fields)
}

export const updateVideoFn = async (fields: CreateVideoType & { id: string }) => {
  const { id, ...rest } = fields
  return await api.put(`/video/${id}`, rest)
}

export const deleteVideoFn = async (id: string) => {
  return await api.delete(`/video/${id}`)
}

export const getVideoByIdFn = async (id: string): Promise<VideoType> => {
  const response = await api.get(`/video/${id}`)
  return response.data?.data
}
