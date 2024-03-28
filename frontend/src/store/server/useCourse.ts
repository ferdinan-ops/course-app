import {
  createCourseFn,
  deleteCourseFn,
  getCourseByIdFn,
  getCoursesFn,
  getVideosByCourseIdFn,
  joinCourseFn,
  publishCourseFn,
  updateCourseFn
} from '@/api/course.api'
import { toast } from '@/components/ui/use-toast'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export const useCreateCourse = () => {
  const queryClient = useQueryClient()

  return useMutation(createCourseFn, {
    onSuccess: () => {
      queryClient.invalidateQueries('courses')
      toast({
        title: 'Course created',
        description: 'Course has been created successfully'
      })
    }
  })
}

export const useUpdateCourse = () => {
  const queryClient = useQueryClient()

  return useMutation(updateCourseFn, {
    onSuccess: () => {
      queryClient.invalidateQueries('courses')
      toast({
        title: 'Course updated',
        description: 'Course has been updated successfully'
      })
    }
  })
}

export const useDeleteCourse = () => {
  const queryClient = useQueryClient()

  return useMutation(deleteCourseFn, {
    onSuccess: () => {
      queryClient.invalidateQueries('courses')
      toast({
        title: 'Course deleted',
        description: 'Course has been deleted successfully'
      })
    }
  })
}

export const usePublishCourse = () => {
  const queryClient = useQueryClient()

  return useMutation(publishCourseFn, {
    onSuccess: () => {
      queryClient.invalidateQueries('courses')
      toast({
        title: 'Course published',
        description: 'Course has been published successfully'
      })
    }
  })
}

export const useGetCourses = (search: string, page: number) => {
  return useQuery(['courses', search, page], () => getCoursesFn(search, page))
}

export const useGetCourse = (id: string) => {
  return useQuery(['course', id], () => getCourseByIdFn(id))
}

export const useGetVideosByCourseId = (id: string) => {
  return useQuery(['course', 'videos', id], () => getVideosByCourseIdFn(id))
}

export const useJoinCourse = () => {
  const queryClient = useQueryClient()

  return useMutation(joinCourseFn, {
    onSuccess: () => {
      queryClient.invalidateQueries('courses')
      toast({
        title: 'Course joined',
        description: 'You have successfully joined the course'
      })
    }
  })
}

export const useLeaveCourse = () => {
  const queryClient = useQueryClient()

  return useMutation(joinCourseFn, {
    onSuccess: () => {
      queryClient.invalidateQueries('courses')
      toast({
        title: 'Course left',
        description: 'You have successfully left the course'
      })
    }
  })
}
