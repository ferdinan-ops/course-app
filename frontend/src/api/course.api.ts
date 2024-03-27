import { CreateCourseType } from '@/lib/validations/course.validation'
import api from './axiosInstance'
import { CourseResponseType, CourseType } from '@/lib/types/course.type'
import { VideoType } from '@/lib/types/video.type'

export const createCourseFn = async (fields: CreateCourseType) => {
  const formData = new FormData()
  formData.append('title', fields.title)
  formData.append('description', fields.description)
  if (Array.isArray(fields.thumbnail) && fields.thumbnail.length > 0 && fields.thumbnail[0] instanceof File) {
    formData.append('thumbnail', fields.thumbnail[0])
  }

  return await api.post('/course', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const updateCourseFn = async (id: string, fields: CreateCourseType) => {
  const formData = new FormData()
  formData.append('title', fields.title)
  formData.append('description', fields.description)
  if (Array.isArray(fields.thumbnail) && fields.thumbnail.length > 0 && fields.thumbnail[0] instanceof File) {
    formData.append('thumbnail', fields.thumbnail[0])
  }

  return await api.put(`/course/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const deleteCourseFn = async (id: string) => {
  return await api.delete(`/course/${id}`)
}

export const publishCourseFn = async (id: string) => {
  return await api.put(`/course/${id}/publish`)
}

export const getCoursesFn = async (search: string, page: number, limit: number): Promise<CourseResponseType> => {
  const response = await api.get('/course', {
    params: {
      search,
      page,
      limit
    }
  })

  return response.data
}

export const getCourseByIdFn = async (id: string): Promise<CourseType> => {
  const response = await api.get(`/course/${id}`)
  return response.data?.data
}

export const getVideosByCourseIdFn = async (id: string): Promise<VideoType[]> => {
  return await api.get(`/course/${id}/videos`)
}

export const joinCourseFn = async (id: string) => {
  return await api.post(`/course/${id}/join`)
}

export const leaveCourseFn = async (id: string) => {
  return await api.delete(`/course/${id}/leave`)
}
