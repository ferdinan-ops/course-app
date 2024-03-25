import { Heading } from '@/components/organisms'
import { Button } from '@/components/ui/button'
import { useTitle } from '@/hooks'
import * as React from 'react'
import { HiOutlineBookOpen, HiPlus } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

export default function AdminCourse() {
  useTitle('Admin ~ Course')
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Heading className="flex items-center gap-5 text-font">
        <Heading.Icon icon={HiOutlineBookOpen} />
        <div className="flex flex-col">
          <Heading.Title>All Courses</Heading.Title>
          <Heading.SubTitle className="text-font/80">Manage all courses in the platform</Heading.SubTitle>
        </div>
      </Heading>
      <div className="mt-16 flex items-center justify-between">
        <Button className="gap-3" onClick={() => navigate('/admin/course/create')}>
          <HiPlus className="text-xl" />
          <span className="text-[13px]">Add new course</span>
        </Button>
        <div className=""></div>
      </div>
    </React.Fragment>
  )
}
