import { CourseSearch, Pagination } from '@/components/atoms'
import { Container, CourseCard, Heading } from '@/components/organisms'

export default function Course() {
  return (
    <Container className="lg:pb-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <Heading>
          <Heading.SubTitle className="mb-2">#LearnFromExpert</Heading.SubTitle>
          <Heading.Title>All Featured Course</Heading.Title>
        </Heading>
        <CourseSearch />
      </div>
      <div className="mt-10 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(9)].map((_, i) => (
          <CourseCard key={i} />
        ))}
      </div>
      <Pagination />
    </Container>
  )
}
