import { CourseSearch, Loading, Pagination } from '@/components/atoms'
import { Container, CourseCard, Heading } from '@/components/organisms'
import { useQueryParams } from '@/hooks'
import { useGetCourses } from '@/store/server/useCourse'

export default function Course() {
  const { params, createParam } = useQueryParams(['page'])
  const { data: courses, isSuccess } = useGetCourses({ page: Number(params.page) || 1 })

  if (!isSuccess) return <Loading />

  return (
    <Container className="lg:pb-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <Heading>
          <Heading.SubTitle className="mb-2">#LearnFromExpert</Heading.SubTitle>
          <Heading.Title>All Featured Course</Heading.Title>
        </Heading>
        <CourseSearch />
      </div>
      <div className="mt-10 grid grid-cols-1 gap-16 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {courses.data.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
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
