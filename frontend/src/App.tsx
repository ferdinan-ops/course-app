import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import { MainLayout, ProtectedAuth, ProtectedRoute } from './components/layouts'
import ImagePreview from './components/atoms/forms/ImagePreview'
import { Toaster } from './components/ui/toaster'

import { UserDashboard } from './pages/user'
import { Home, Course, DetailCourse } from './pages/public'
import { ForgotPassword, Login, Register, ResetPassword, VerifyEmail } from './pages/auth'

import { usePreviewImage } from './store/client'

export default function App() {
  const { previewImage, setPreviewImage } = usePreviewImage((state) => ({
    previewImage: state.previewImage,
    setPreviewImage: state.setPreviewImage
  }))

  return (
    <React.Fragment>
      {previewImage && <ImagePreview image={previewImage} onShow={() => setPreviewImage('')} />}
      <Toaster />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/user" element={<UserDashboard />} />
        </Route>
        <Route element={<ProtectedAuth />}>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="/verify" element={<VerifyEmail />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/course">
            <Route index element={<Course />} />
            <Route path=":courseId" element={<DetailCourse />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  )
}
