import { Container, Heading, RoadmapCard } from '@/components/organisms'
import { useGetRoadmaps } from '@/store/server/useRoadmap'

export default function Roadmap() {
  const { data: roadmaps, isSuccess } = useGetRoadmaps()

  if (!isSuccess) {
    return <p>Loading...</p>
  }

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
          {roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.id} title={roadmap.title} countClass={roadmap.courses.length} />
          ))}
        </section>
      </Container>
    </section>
  )
}
