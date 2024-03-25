import { Container, Heading, RoadmapCard } from '@/components/organisms'

export const roadmaps = [
  'Frontend',
  'Backend',
  'DevOps',
  'Fullstack',
  'Android',
  'PostgreSQL',
  'AI and Data Scientist',
  'Blockchain',
  'Quality Assurance',
  'Software Architect',
  'ASP.NET Core',
  'C++',
  'Flutter',
  'Cyber Security',
  'UX Design',
  'React Native',
  'Game Developer',
  'Technical Writer',
  'Machine Learning Ops'
]

export default function Roadmap() {
  return (
    <section className="bg-[#F6F8FD]">
      <Container>
        <Heading className="text-center">
          <Heading.Title>#RoadmapToFuture</Heading.Title>
          <p className="mx-auto mt-2.5 max-w-[720px] text-[15px] leading-relaxed text-font">
            Your roadmap to becoming a great programmer. This roadmap has been designed in accordance with roadmap.sh
            which has been recognized by many developers around the world.
          </p>
        </Heading>
        <section className="mt-20 grid grid-cols-4 gap-8">
          {roadmaps.map((roadmap, i) => (
            <RoadmapCard key={i} title={roadmap} countClass={10} />
          ))}
        </section>
      </Container>
    </section>
  )
}
