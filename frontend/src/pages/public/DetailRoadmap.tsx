import { Container, CourseCard, Heading } from '@/components/organisms'
import * as React from 'react'
import { HiArrowDown } from 'react-icons/hi2'

export default function DetailRoadmap() {
  return (
    <section className="bg-[#F6F8FD] lg:pb-20">
      <Heading className="bg-[#FAFAFA] bg-[url('@/assets/images/bg-roadmap.png')] bg-contain px-4 py-16 text-center">
        <Heading.Title className="text-font">Frontend</Heading.Title>
        <p className="mx-auto mt-2.5 max-w-[720px] text-[15px] leading-relaxed text-font/90">
          Step by step guide to becoming a modern frontend developer in 2024
        </p>
      </Heading>
      <Container>
        <div className="flex flex-col items-center gap-3">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <CourseCard containerClassName="max-w-[600px]" type="row" />
              {i < 5 && <HiArrowDown className="text-5xl" />}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  )
}
