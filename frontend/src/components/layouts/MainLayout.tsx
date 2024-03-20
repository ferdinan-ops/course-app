import * as React from 'react'
import { MainFooter, MainHeader } from '../organisms'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <React.Fragment>
      <MainHeader />
      <main className="min-h-[calc(100vh-96px)] pt-20 lg:min-h-[calc(100vh-80px)] lg:pt-24">
        <Outlet />
      </main>
      <MainFooter />
    </React.Fragment>
  )
}
