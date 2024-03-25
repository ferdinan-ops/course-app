import { Heading, RoadmapCard } from '@/components/organisms'
import { Button } from '@/components/ui/button'
import { roadmaps } from '@/pages/public/Roadmap'
import * as React from 'react'
import { HiOutlinePencilSquare, HiOutlinePresentationChartLine, HiOutlineTrash, HiPlus } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

export default function AdminRoadmap() {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <div className="flex items-center justify-between">
        <Heading className="flex items-center gap-5 text-font">
          <Heading.Icon icon={HiOutlinePresentationChartLine} />
          <div className="flex flex-col gap-1">
            <Heading.Title>All Roadmaps</Heading.Title>
            <Heading.SubTitle className="text-font/80">Manage all roadmaps in the platform</Heading.SubTitle>
          </div>
        </Heading>
        <Button className="gap-2.5" onClick={() => navigate('/admin/roadmap/create')}>
          <HiPlus className="text-xl" />
          <p className="text-xs">Create Roadmap</p>
        </Button>
      </div>
      <section className="mt-16 grid grid-cols-4 gap-8">
        {roadmaps.map((roadmap, i) => (
          <RoadmapCard key={i} title={roadmap} countClass={10} type="admin" className="bg-[#F7F9FB]">
            <div className="mt-3.5 flex w-full items-center gap-3">
              <Button variant="outline" className="flex-1 gap-2.5 text-xs text-font">
                <HiOutlinePencilSquare className="text-sm" />
                Edit
              </Button>
              <Button variant="destructive" className="flex-1 gap-2.5 text-xs">
                <HiOutlineTrash className="text-sm" />
                Delete
              </Button>
            </div>
          </RoadmapCard>
        ))}
      </section>
    </React.Fragment>
  )
}
