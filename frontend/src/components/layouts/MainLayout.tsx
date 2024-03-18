import * as React from 'react'
import { MainFooter, MainHeader } from '../organisms'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <React.Fragment>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </React.Fragment>
  )
}
