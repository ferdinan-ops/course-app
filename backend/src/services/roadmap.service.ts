import db from '../utils/db'

import { type IRoadmap } from '../types/roadmap.type'

export const addNewRoadmap = async (fields: IRoadmap, userId: string) => {
  const roadmap = await db.roadmap.create({
    data: {
      admin_id: userId,
      title: fields.title
    }
  })

  fields.courses.forEach(async (courseId) => {
    await db.course.update({
      where: { id: courseId },
      data: {
        roadmapId: roadmap.id
      }
    })
  })

  return roadmap
}

export const updateRoadmapById = async (roadmapId: string, fields: IRoadmap) => {
  const roadmap = await db.roadmap.update({
    where: { id: roadmapId },
    data: { title: fields.title }
  })

  fields.courses.forEach(async (courseId) => {
    await db.course.update({
      where: { id: courseId },
      data: {
        roadmapId: roadmap.id
      }
    })
  })

  return roadmap
}

export const deleteRoadmapById = async (roadmapId: string) => {
  return await db.roadmap.delete({ where: { id: roadmapId } })
}

export const getRoadmapById = async (roadmapId: string) => {
  return await db.roadmap.findUnique({
    where: { id: roadmapId },
    include: {
      courses: {
        include: {
          _count: { select: { videos: true } }
        }
      }
    }
  })
}

export const getAllRoadmaps = async () => {
  return await db.roadmap.findMany()
}
