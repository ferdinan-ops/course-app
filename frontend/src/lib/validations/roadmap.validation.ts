import * as Yup from 'yup'

export const createRoadmapValidation = Yup.object({
  title: Yup.string().required('Title is required'),
  courses: Yup.array().of(Yup.string()).required('Courses is required')
})

export type CreateRoadmapType = Yup.InferType<typeof createRoadmapValidation>
