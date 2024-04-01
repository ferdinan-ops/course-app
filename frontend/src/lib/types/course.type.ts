export type CourseType = {
  id: string
  title: string
  thumbnail: string
  description: string
  is_published: boolean
  created_at: string
  updated_at: string
}

export type MetaType = {
  current_page: number
  limit: number
  total: number
}

type CourseCountType = {
  _count: {
    videos: number
    members: number
  }
}

type CourseListType = CourseType & CourseCountType

export type CourseResponseType = {
  message: string
  data: CourseListType[]
  meta: MetaType
}
