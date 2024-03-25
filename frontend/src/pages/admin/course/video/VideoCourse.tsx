import { Heading } from '@/components/organisms'
import { Button } from '@/components/ui/button'
import * as React from 'react'
import { HiPlus } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

export default function VideoCourse() {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Heading className="flex items-center gap-5 text-font">
        <div className="flex flex-col gap-1">
          <Heading.Title>Frontend Development Videos</Heading.Title>
          <Heading.SubTitle className="text-font/80">
            Manage all videos in the course <span className="font-semibold">Frontend Development</span>
          </Heading.SubTitle>
        </div>
      </Heading>
      <div className="mt-16 flex items-center justify-between">
        <Button className="gap-3" onClick={() => navigate('/admin/course/1/video/create')}>
          <HiPlus className="text-xl" />
          <span className="text-[13px]">Add new video</span>
        </Button>
        <div className=""></div>
      </div>
    </React.Fragment>
  )
}
