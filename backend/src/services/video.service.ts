import db from '../utils/db'
import { type IVideo } from '../types/video.type'

export const addNewVideo = async (fields: IVideo, userId: string) => {
  return await db.video.create({ data: { admin_id: userId, ...fields } })
}

export const getVideoById = async (videoId: string) => {
  return await db.video.findUnique({ where: { id: videoId } })
}

export const updateVideoById = async (videoId: string, fields: IVideo) => {
  return await db.video.update({ where: { id: videoId }, data: fields })
}

export const deleteVideoById = async (videoId: string) => {
  return await db.video.delete({ where: { id: videoId } })
}

export const getVideosByCourseId = async (courseId: string) => {
  return await db.video.findMany({ where: { course_id: courseId } })
}
