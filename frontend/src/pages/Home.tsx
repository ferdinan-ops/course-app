import { HeroImage, PrivilegeIllustration } from '@/assets'
import { CourseCard, HomeSection } from '@/components/organisms'
import { Button } from '@/components/ui/button'
import { useTitle } from '@/hooks'
import * as React from 'react'
import { HiArrowRight, HiCheck } from 'react-icons/hi2'

const privileges = [
  'Access the course forever',
  'Free materials and updates for each course',
  'Real-world projects Freelancer',
  'Other online course privileges'
]

export default function Home() {
  useTitle('Home')

  return (
    <React.Fragment>
      <HomeSection>
        <HomeSection.Container className="pb-20 pt-36 lg:pt-0">
          <HomeSection.Body>
            <HomeSection.SubTitle>#SpiritOfLearning</HomeSection.SubTitle>
            <HomeSection.Title>Your Dream Career Starts With Us</HomeSection.Title>
            <p className="mt-5 text-[15px] text-font md:text-base">
              We provide the best online learning experience for you to acquire new skills and knowledge.
            </p>
            <Button className="mt-5 gap-2.5 lg:rounded-full">
              <p className="text-[13px]">Get Started</p>
              <HiArrowRight className="text-base" />
            </Button>
          </HomeSection.Body>
          <HomeSection.Image src={HeroImage} alt="hero" className="hidden xl:flex xl:w-[45%]" />
        </HomeSection.Container>
      </HomeSection>

      <HomeSection className="bg-[#F6F8FD]">
        <HomeSection.Container className="flex-col-reverse xl:flex-row-reverse">
          <HomeSection.Body>
            <HomeSection.SubTitle className="mb-2">You Deserve Better Career</HomeSection.SubTitle>
            <HomeSection.Title>Privileges You've Got For Growth</HomeSection.Title>
            <ul className="mt-5 flex flex-col gap-2.5 text-[15px] text-font">
              {privileges.map((privilege, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 rounded-full bg-[#DEF6EE]">
                    <HiCheck className="m-auto text-sm text-[#22C58B]" />
                  </div>
                  <p className="text-[15px] md:text-base">{privilege}</p>
                </li>
              ))}
            </ul>
            <Button className="mt-8 gap-2.5 text-[13px] lg:rounded-full">Join Now</Button>
          </HomeSection.Body>
          <HomeSection.Image src={PrivilegeIllustration} alt="hero" className="w-[70%] md:w-1/2 xl:w-[45%]" />
        </HomeSection.Container>
      </HomeSection>

      <HomeSection className="flex-col items-start justify-start bg-[#181230] bg-[url('@/assets/images/grid.svg')] lg:py-36">
        <HomeSection.Container className="items-start justify-start xl:w-[1180px] xl:flex-col xl:gap-7 xl:px-0">
          <HomeSection.Body>
            <HomeSection.SubTitle className="mb-2">Become Experts</HomeSection.SubTitle>
            <HomeSection.Title className="text-white">Featured Course From Us</HomeSection.Title>
          </HomeSection.Body>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <CourseCard key={i} />
            ))}
          </div>
          <Button className="mx-auto gap-2.5 lg:rounded-full" variant="secondary">
            <p className="text-[13px]">See More</p>
            <HiArrowRight className="text-base" />
          </Button>
        </HomeSection.Container>
      </HomeSection>
    </React.Fragment>
  )
}
