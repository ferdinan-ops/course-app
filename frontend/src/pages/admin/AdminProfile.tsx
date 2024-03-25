import { Heading } from '@/components/organisms'
import * as React from 'react'
import { HiOutlineUser } from 'react-icons/hi2'

export default function AdminProfile() {
  return (
    <React.Fragment>
      <Heading className="flex items-center gap-5 text-font">
        <Heading.Icon icon={HiOutlineUser} />
        <div className="flex flex-col">
          <Heading.Title>Edit Profile</Heading.Title>
          <Heading.SubTitle className="text-font/80">Manage your profile information</Heading.SubTitle>
        </div>
      </Heading>
    </React.Fragment>
  )
}
