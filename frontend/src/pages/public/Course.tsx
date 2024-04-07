import { CourseSearch, Loading, Pagination } from '@/components/atoms'
import { Container, CourseCard, Heading } from '@/components/organisms'
import { useQueryParams, useTitle } from '@/hooks'
import { useGetCourses } from '@/store/server/useCourse'
import { useGetMyCourses } from '@/store/server/useUser'
import { useLocation } from 'react-router-dom'

const PATH = '/me/course'

export default function Course() {
  useTitle('Course')
  const location = useLocation()
  const isMyCourse = location.pathname === PATH

  console.log(isMyCourse)

  const { params, createParam } = useQueryParams(['page'])
  const { data: courses, isLoading: loadingCourse } = useGetCourses({
    page: Number(params.page) || 1,
    enabled: !isMyCourse
  })

  const { data: myCourses, isLoading: loadingMy } = useGetMyCourses({
    page: Number(params.page) || 1,
    enabled: isMyCourse
  })

  console.log({ courses, myCourses })

  return (
    <Container className="lg:pb-20">
      {(loadingCourse || loadingMy) && <Loading />}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <Heading>
          <Heading.SubTitle className="mb-2">#LearnFromExpert</Heading.SubTitle>
          <Heading.Title>All Featured Course</Heading.Title>
        </Heading>
        <CourseSearch />
      </div>
      <div className="mt-10 grid grid-cols-1 gap-16 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {isMyCourse
          ? myCourses?.data.map((course) => <CourseCard key={course.id} course={course} />)
          : courses?.data.map((course) => <CourseCard key={course.id} course={course} />)}
      </div>
      {courses?.meta && courses?.meta?.total > 10 ? (
        <Pagination
          pageSize={courses?.meta.limit as number}
          totalCount={courses?.meta.total as number}
          currentPage={params.page !== '' ? parseInt(params.page) : 1}
          onPageChange={(page) => createParam({ key: 'page', value: page.toString() })}
        />
      ) : null}
    </Container>
  )
}
