import db from '../utils/db'
import { type ICourse } from '../types/course.type'

export const addNewCourse = async (fields: ICourse, userId: string) => {
  return await db.course.create({ data: { admin_id: userId, ...fields } })
}

export const getAllCourses = async (page: number, limit: number, search: string) => {
  const [data, count] = await db.$transaction([
    db.course.findMany({
      where: {
        OR: [{ title: { contains: search } }, { description: { contains: search } }]
      },
      skip: (page - 1) * limit,
      take: limit,
      include: {
        _count: {
          select: { videos: true }
        }
      },
      orderBy: { created_at: 'desc' }
    }),
    db.course.count({
      where: {
        OR: [{ title: { contains: search } }, { description: { contains: search } }]
      }
    })
  ])

  return { data, count }
}

export const getCourseById = async (courseId: string) => {
  return await db.course.findUnique({ where: { id: courseId } })
}

export const updateCourseById = async (courseId: string, fields: ICourse) => {
  return await db.course.update({ where: { id: courseId }, data: fields })
}

export const deleteCourseById = async (courseId: string) => {
  return await db.course.delete({ where: { id: courseId } })
}

export const updatePublishedCourse = async (courseId: string, published: boolean) => {
  return await db.course.update({ where: { id: courseId }, data: { is_published: published } })
}

export const addMemberToCourse = async (courseId: string, userId: string) => {
  return await db.course.update({
    where: { id: courseId },
    data: {
      members: {
        create: {
          user_id: userId
        }
      }
    }
  })
}

export const removeMemberFromCourse = async (courseId: string, userId: string) => {
  return await db.course.update({
    where: {
      id: courseId,
      admin_id: {
        not: userId
      },
      members: {
        some: {
          user_id: userId
        }
      }
    },
    data: {
      members: {
        deleteMany: {
          user_id: userId
        }
      }
    }
  })
}
