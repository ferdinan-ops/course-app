import { type Request, type Response } from 'express'

import { logError, logInfo } from '../utils/logger'
import { type ICourse } from '../types/course.type'
import { validCourse } from '../validations/course.validation'

import * as CourseService from '../services/course.service'
import * as VideoService from '../services/video.service'

export const createCourse = async (req: Request, res: Response) => {
  const { value, error } = validCourse(req.body as ICourse)
  if (error) {
    logError(req, error)
    return res.status(400).json({ error: error.details[0].message })
  }

  try {
    const data = await CourseService.addNewCourse(value, req.userId as string)
    logInfo(req, 'Creating new course')
    res.status(200).json({ message: 'Berhasil membuat course baru', data })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const updateCourse = async (req: Request, res: Response) => {
  const { value, error } = validCourse(req.body as ICourse)
  if (error) {
    logError(req, error)
    return res.status(400).json({ error: error.details[0].message })
  }

  try {
    const data = await CourseService.updateCourseById(req.params.courseId, value)
    logInfo(req, 'Updating course data')
    res.status(200).json({ message: 'Berhasil mengubah data course', data })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    await CourseService.deleteCourseById(req.params.courseId)
    logInfo(req, 'Deleting course')
    res.status(200).json({ message: 'Berhasil menghapus course' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const getCourses = async (req: Request, res: Response) => {
  const { page, limit, q } = req.query
  const currentPage = Number(page) || 1
  const perPage = Number(limit) || 10

  try {
    const { data, count } = await CourseService.getAllCourses(currentPage, perPage, q as string)

    logInfo(req, 'Fetching all courses')
    res.status(200).json({
      message: 'Berhasil mendapatkan semua course',
      data,
      meta: {
        current_page: currentPage,
        limit: perPage,
        total: count
      }
    })
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const getCourse = async (req: Request, res: Response) => {
  try {
    const data = await CourseService.getCourseById(req.params.courseId)
    if (!data) {
      logError(req, 'Course not found')
      return res.status(404).json({ error: 'Course tidak ditemukan' })
    }

    logInfo(req, 'Fetching course data')
    res.status(200).json({ message: 'Berhasil mendapatkan data course', data })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const publishCourse = async (req: Request, res: Response) => {
  if (req.body?.published === undefined) {
    logError(req, 'Published field is required')
    return res.status(400).json({ error: 'Field published diperlukan' })
  }

  try {
    const published = req.body.published
    await CourseService.updatePublishedCourse(req.params.courseId, published as boolean)

    logInfo(req, 'Publishing course')
    res.status(200).json({ message: 'Berhasil mempublish course' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const joinCourse = async (req: Request, res: Response) => {
  try {
    await CourseService.addMemberToCourse(req.params.courseId, req.userId as string)
    logInfo(req, 'Joining course')
    res.status(200).json({ message: 'Berhasil join course' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const leaveCourse = async (req: Request, res: Response) => {
  try {
    await CourseService.removeMemberFromCourse(req.params.courseId, req.userId as string)
    logInfo(req, 'Leaving course')
    res.status(200).json({ message: 'Berhasil meninggalkan course' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const getVideos = async (req: Request, res: Response) => {
  try {
    const data = await VideoService.getVideosByCourseId(req.params.courseId)

    logInfo(req, 'Fetching video by course')
    res.status(200).json({ message: 'Berhasil mendapatkan video', data })
  } catch (error) {
    res.status(500).json({ error })
  }
}
