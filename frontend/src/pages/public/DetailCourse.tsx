import { CommentCard, CommentForm, Container, Heading } from '@/components/organisms'
import { Button } from '@/components/ui/button'
import { useToken } from '@/store/client'
import { HiArrowLeft, HiArrowRight, HiLockClosed, HiPlayCircle } from 'react-icons/hi2'

const courseDummy = [
  { title: 'Semantic HTML', duration: '11:25' },
  { title: 'Forms and Validations', duration: '10:32' },
  { title: 'Accessibility', duration: '12:45' },
  { title: 'Basics of SEO', duration: '13:25' },
  { title: 'CSS Basics', duration: '14:25' },
  { title: 'Making layouts', duration: '15:25' },
  { title: 'Responsive Web Design', duration: '16:25' }
]

export default function DetailCourse() {
  const token = useToken((state) => state.accessToken)

  return (
    <Container className="xl:pb-56">
      <section className="flex items-center justify-between">
        <Heading>
          <Heading.SubTitle className="mb-2">How to be a Frontend Developer</Heading.SubTitle>
          <Heading.Title>HTML Basics</Heading.Title>
        </Heading>
        {token ? (
          <div className="flex items-center gap-4">
            <Button className="gap-3" variant="outline">
              <HiArrowLeft />
              <p>Prev</p>
            </Button>
            <Button className="gap-3" variant="outline">
              <p>Next</p>
              <HiArrowRight />
            </Button>
          </div>
        ) : (
          <Button className="gap-3">
            <p>Join Now</p>
            <HiArrowRight />
          </Button>
        )}
      </section>
      <section className="mt-6 grid grid-cols-6 gap-8">
        <div className="col-span-4">
          <div className="h-[400px] w-full rounded-md bg-black"></div>
          <div className="mt-8">
            <h1 className="text-2xl font-semibold text-font">About Course</h1>
            <p className="mt-2.5 text-[15px] leading-relaxed text-font">
              HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For
              example, content could be structured within a set of paragraphs, a list of bulleted points, or using
              images and data tables. As the title suggests, this article will give you a basic understanding of HTML
              and its functions.
            </p>
            <p className="mt-2.5 text-[15px] leading-relaxed text-font">
              HTML is the beginning of everything you need to know to create engaging web pages! Take-Away Skills: You
              will learn all the common HTML tags used to structure HTML pages, the skeleton of all websites. You will
              also be able to create HTML tables to present tabular data efficiently.
            </p>
          </div>
          <div className="mt-8">
            <h1 className="mb-5 text-2xl font-semibold text-font">Comments</h1>
            <div className="flex w-full flex-col gap-5">
              <CommentForm />
              <h3 className="px-4 text-sm font-semibold">20 comments</h3>
              <div className="flex flex-col gap-4 px-4">
                {[...Array(10)].map((_, i) => (
                  <CommentCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="col-span-2 max-h-[400px] rounded-lg border">
            <div className="border-b p-4">
              <h3 className="text-[15px] font-semibold text-font">8 Lessons [1.5 Hours]</h3>
            </div>
            <div className="scroll-custom flex max-h-[calc(400px-56px)] flex-col gap-2.5 overflow-y-auto p-4">
              <div className="flex cursor-pointer items-center gap-3 rounded-md bg-primary px-3 py-2 text-white">
                <HiPlayCircle className="text-xl" />
                <p className="text-sm">HTML Basics</p>
                <p className="ml-auto text-sm text-white/70">11:25</p>
              </div>
              {courseDummy.map((course, i) => (
                <div className="flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2 text-font" key={i}>
                  <HiLockClosed className="text-xl text-font/60" />
                  <p className="text-sm">{course.title}</p>
                  <p className="ml-auto text-sm text-font/70">{course.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
